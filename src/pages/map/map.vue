<template>
  <!--外部使用id 需要传进来，而且不同页面不能相同 -->
    <div :id="containerId" style="position: relative;width: 100%;height: 100%;">
    <!-- 首页绿色中心点扎标 -->
    <div class="location-picker" v-if="showLocationPicker">
      <img src="@/assets/image/index/newstart.png" style="width: 100%;height: 100%;" :class="{animate:animationSwitch}">
      <div class="ellipse" :class="{ellipseanimation:animationSwitch}"></div>
      <div class="location-picker-callout" @click="onCalloutTap">
        <div class="location-picker-minute">
          <span class="location-picker-minute-number">{{pickuptime}}</span>
          <br>
          <span class="location-picker-minute-text">分钟</span>
        </div>
        <div class="location-picker-dividingline"></div>
        <div class="location-picker-describe">
          点击立即打车
          <img src="@/assets/image/index/eta-arrow.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap';
import GetLocationHelper from '../../common/util/GetLocationHelper.js';

export default {
  name: 'AMap',
  props: {
    containerId: String,
    showLocationPicker: Boolean,
    showLocation: Boolean,

    // delegate method
    onRegionChange: Function,
    pickuptime: String,
    animationSwitch: Boolean,
  },
  data() {
    return {
      useNativeLocation: true,
      location: {},
    };
  },
  // end method
  mounted() {
    this._initMap();
  },
  methods: {
    onCalloutTap() {
      if (getApp().globalData.network.networkAvailable) {
        if (this.$route.query.search == 'mapchoose') {
          my.navigateBack({
            delta: 1,
          });
        } else {
          my.redirectTo({
            url: '/search?from=map',
          });
        }
      } else {
        my.showToast({
          content: '网络不佳，请重试',
          duration: 1500,
          success: () => {},
        });
      }
    },
    // public
    addNearbySpot(spotData) {
      // //my.log("aaaa 0: ", spotData.length);

      if (!this.recommendSpotOverlay) {
        this.recommendSpotOverlay = new AMap.OverlayGroup();
        this.map.add(this.recommendSpotOverlay);
      }

      if (!spotData) {
        return;
      }

      const markers = [];

      const oldMarkers = this.recommendSpotOverlay.getOverlays();

      // //my.log("aaaa 1: ", oldMarkers.length);

      const src = require('@/assets/image/index/recopoint.png');

      const deleteMarkers = [];

      for (let i = 0; i < oldMarkers.length; i++) {
        const oMarker = oldMarkers[i];
        const pos = oMarker.getPosition();


        let sameMarker = null;
        for (let j = 0; j < spotData.length; j++) {
          const oneSpot = spotData[j];
          if (pos.lng == oneSpot.longitude && pos.lat == oneSpot.latitude) {
            sameMarker = oMarker;
            // //my.log("aaaa same: ", oneSpot.iconAppendStr);
            break;
          }
        }

        if (!sameMarker) {
          deleteMarkers.push(oMarker);
        }
      }

      // //my.log("aaaa to delete: ", deleteMarkers.length);

      for (let j = 0; j < deleteMarkers.length; j++) {
        this.recommendSpotOverlay.removeOverlay(deleteMarkers[j]);
      }

      // add new
      const remainMarkers = this.recommendSpotOverlay.getOverlays();
      // //my.log("aaaa remainMarkers: ", remainMarkers.length);

      for (let i = 0; i < spotData.length; i++) {
        const oneSpot = spotData[i];

        let isRemain = false;
        for (let j = 0; j < remainMarkers.length; j++) {
          const oMarker = remainMarkers[j];
          const pos = oMarker.getPosition();

          if (pos.lng == oneSpot.longitude && pos.lat == oneSpot.latitude) {
            isRemain = true;
            break;
          }
        }

        if (!isRemain) {
          const position = new AMap.LngLat(oneSpot.longitude, oneSpot.latitude);
          const markerContent = `${'<div class="custom-content-marker" style="position: relative;">'
                        + '   <img src="'}${src}" style="width: ${20 / 15}rem; height: ${20 / 15}rem;">`
                        + `   <div class="custom-content-marker-label" style="position: absolute; top: ${20 / 15}rem; left: ${-(91 / 15)}rem; width: ${200 / 15}rem; text-align: center;">`
                        + `       <span style="position: absolute;top: 0;left: 50%;transform:translate(-50%,0);font-size:12px;font-weight: 400;-webkit-text-stroke: 3px #fff;color: #fff;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;overflow: hidden;">${oneSpot.iconAppendStr}</span>`
                        + `       <span style="position: absolute;top: 0;left: 50%;transform:translate(-50%,0);font-size:12px;font-weight: 800;color: #33B276;-webkit-line-clamp: 2;display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden;">${oneSpot.iconAppendStr}</span>`
                        + '   </div>'
                        + '</div>';

          const marker = new AMap.Marker({
            position,
            content: markerContent,
            offset: new AMap.Pixel(-10, -10),
            zIndex: 102,
          });

          markers.push(marker);
        }
      }
      // //my.log("aaaa new: ", markers.length);
      this.recommendSpotOverlay.addOverlays(markers);
    },

    removeNearbySpot() {
      if (this.recommendSpotOverlay) {
        this.map.remove(this.recommendSpotOverlay);
        this.recommendSpotOverlay = null;
      }
    },

    updateLocationPickerContent(minute) {
      this.pickuptime = minute;
    },

    addNearbyCar(carData) {
      if (this.nearbyTaxiOverlay) {
        this.map.remove(this.nearbyTaxiOverlay);
        this.nearbyTaxiOverlay = null;
      }

      if (!carData) {
        return;
      }

      let markers = [];

      const taxiArray = this._generateCarMarkers(carData, 'taxi');
      const expressArray = this._generateCarMarkers(carData, 'expressCar');
      const privateArray = this._generateCarMarkers(carData, 'privateCar');

      if (taxiArray.length > 0) {
        markers = markers.concat(taxiArray);
      }

      if (expressArray.length > 0) {
        markers = markers.concat(expressArray);
      }

      if (privateArray.length > 0) {
        markers = markers.concat(privateArray);
      }

      // 创建覆盖物群组，并将 marker 传给 OverlayGroup
      this.nearbyTaxiOverlay = new AMap.OverlayGroup(markers);
      this.map.add(this.nearbyTaxiOverlay);
    },

    removeNearbyCar() {
      if (this.nearbyTaxiOverlay) {
        this.map.remove(this.nearbyTaxiOverlay);
        this.nearbyTaxiOverlay = null;
      }
    },

    /*
        * let taxiInfo = {
                type: taxi, expressCar , privateCar
                latitude: ,
                longitude:,
                angle:,
                travelType: 0 显示已到达，1 接驾， 2 送驾
                travelText: "5.4公里 29分钟" ,type为1、2时有效
            };
        * */
    showTaxi(taxiInfo) {
      if (!taxiInfo) {
        return;
      }
      const src = require('@/assets/image/index/taxi.png');
      const angle = `${taxiInfo.angle}deg`;

      let taxiText = '';
      if (taxiInfo.travelType == 0) {
        taxiText = '<span style="color:#000000;">车辆已到达</span>';
      } else if (taxiInfo.travelText) {
        const actionStr = taxiInfo.travelType == 1 ? '距您' : '剩余';
        taxiText = `<span style="color:#757575;">${actionStr}</span>${taxiInfo.travelText}`;
      }
      let markerContent = '';

      if (taxiInfo.travelText) {
        markerContent = `${''
                + '<div class="custom-content-marker" style="position: relative; width: 20px; height: 40px;">'
                + '   <img src="'}${src}" style="width: 100%;height: 100%;-webkit-transform:rotate(${angle}); ">`
                + '   <div style="position: absolute; top: -50px;left: 50%;transform:translate(-50%,0);padding:0 15px;height: 40px;background-color: #fff; border-radius: 20px;text-align: center; box-shadow: -1px 1px 1px rgba(10, 10, 10, .3);line-height: 40px">'
                + `       <div style="white-space :nowrap;">${taxiText}</div>`
                + '       <div style="position: absolute;top: 39px;left: 50%;transform:translate(-50%,0);width: 0;height: 0;border: 8px solid #ffffff;border-color: #ffffff transparent transparent transparent;filter:drop-shadow(0 2px 1px rgba(10, 10, 10, .3));"></div>'
                + '   </div>'
                + '</div>';
      } else {
        markerContent = `${''
                + '<div class="custom-content-marker" style="position: relative; width: 20px; height: 40px;">'
                + '   <img src="'}${src}" style="width: 100%;height: 100%;-webkit-transform:rotate(${angle}); ">`
                + '</div>';
      }

      const position = new AMap.LngLat(taxiInfo.longitude, taxiInfo.latitude);
      if (this.taxiMarker) {
        this.taxiMarker.setContent(markerContent); // 更新点标记内容
        this.taxiMarker.setPosition(position); // 更新点标
        // this.taxiMarker.moveTo(position, 100); // 是否使用动画？？
      } else {
        const marker = new AMap.Marker({
          position,
          content: markerContent,
          offset: new AMap.Pixel(-10, -20),
          zIndex: 105,

        });
        this.map.add(marker);
        this.taxiMarker = marker;
      }
    },

    hideTaxi() {
      if (this.taxiMarker) {
        this.map.remove(this.taxiMarker);
        this.taxiMarker = null;
      }
    },

    /*
           * coordArray:
           *  [{longitude, latitude}]
           */
    addRoutePolyline(coordArray) {
      if (this.routePolyline) {
        this.map.remove(this.routePolyline);
        this.routePolyline = null;
      }

      const lnglatArray = [];
      for (let i = 0; i < coordArray.length; ++i) {
        const aLnglat = new AMap.LngLat(coordArray[i].longitude, coordArray[i].latitude);
        lnglatArray.push(aLnglat);
      }

      this.routePolyline = new AMap.Polyline({
        path: lnglatArray,
        isOutline: true,
        outlineColor: '#006f14',
        borderWeight: 1,
        strokeWeight: 10,
        strokeColor: '#20b53f',
        lineJoin: 'round',
        showDir: true,
      });

      this.routePolyline.setMap(this.map);
    },

    removeRoutePolyline() {
      if (this.routePolyline) {
        this.map.remove(this.routePolyline);
        this.routePolyline = null;
      }
    },

    /**
         *  startInfo/endInfo = {name，longitude，latitude，time, title}
         *  time 为起点的预估接驾时间, title 为"正在呼叫车辆" 等信息；
         *  有title使用title，然后看time是否大于0，否则不显示气泡
         */
    addStartEndMarker(startInfo, endInfo) {
      if (this.startEndOverlay) {
        this.map.remove(this.startEndOverlay);
        this.startEndOverlay = null;
        this.startMarker = null;
        this.endMarker = null;
      }


      if (!startInfo && !endInfo) {
        return;
      }

      const srcStart = require('@/assets/image/index/start-point.png');
      const srcEnd = require('@/assets/image/index/end-point.png');

      this.startMarker = this._generatePOIMarker(startInfo.name, startInfo.longitude, startInfo.latitude, startInfo.time, startInfo.title, startInfo.vehicle, srcStart, 'start');
      this.endMarker = this._generatePOIMarker(endInfo.name, endInfo.longitude, endInfo.latitude, endInfo.time, endInfo.title, endInfo.vehicle, srcEnd, 'end');

      const markers = [];

      if (this.startMarker) {
        markers.push(this.startMarker);
      }

      if (this.endMarker) {
        markers.push(this.endMarker);
      }

      this.startEndOverlay = new AMap.OverlayGroup(markers);
      this.map.add(this.startEndOverlay);
    },

    /**
         *  startInfo/endInfo = {name，time, title}
         *  time 为起点的预估接驾时间, title 为"正在呼叫车辆" 等信息；
         *  有title使用title，然后看time是否大于0，否则不显示气泡
         */
    updateStartEndContent(startInfo, endInfo) {
      if (this.startMarker) {
        const srcStart = require('@/assets/image/index/start-point.png');
        const markerContent = this._generatePOIMarkerContent(startInfo.name, startInfo.time, startInfo.title, startInfo.vehicle, srcStart);
        this.startMarker.setContent(markerContent);
      }
      if (this.endMarker) {
        const srcEnd = require('@/assets/image/index/end-point.png');
        const markerContent = this._generatePOIMarkerContent(endInfo.name, endInfo.time, endInfo.title, endInfo.vehicle, srcEnd);
        this.endMarker.setContent(markerContent);
      }
    },

    removeStartEndMarker() {
      if (this.startEndOverlay) {
        this.map.remove(this.startEndOverlay);
        this.startEndOverlay = null;

        this.startMarker = null;
        this.endMarker = null;
      }
    },

    // -- map control
    showUserLocation() {
      if (!this.locationTimer) {
        if (this.useNativeLocation) {
          this.locationTimer = setInterval(this._handleLocationNeedUpdate, 5000);
          this._handleLocationNeedUpdate();
        } else {
          // show web location
          const options = {
            showButton: true, // 是否显示定位按钮
            panToLocation: false,
            buttonPosition: 'RT', // 定位按钮的位置
            /* LT LB RT RB */
            buttonOffset: new AMap.Pixel(10, 80), // 定位按钮距离对应角落的距离
            showMarker: false, // 是否显示定位点
            // 'markerOptions':{//自定义定位点样式，同Marker的Options
            //     'offset': new AMap.Pixel(-19, -19),
            //     'content':'<img src="'+locationImg+'" style="width:38px;height:38px"/>'
            // },
            showCircle: false, // 是否显示定位精度圈
            circleOptions: {// 定位精度圈的样式
              strokeColor: '#0093FF',
              noSelect: true,
              strokeOpacity: 0.5,
              strokeWeight: 1,
              fillColor: '#02B0FF',
              fillOpacity: 0.25,
            },
          };
          const self = this;
          AMap.plugin(['AMap.Geolocation'], () => {
            self.geolocation = new AMap.Geolocation(options);
            self.map.addControl(self.geolocation);
            self.geolocation.getCurrentPosition();

            AMap.event.addListener(self.geolocation, 'complete', self.onLocationComplete);// 返回定位信息
          });
        }
      }
    },
    onLocationComplete(e) {
      // //my.log("onLocationComplete :" ,e);
      let userlocation = {};
      if (this.useNativeLocation) {
        userlocation = e;
      } else {
        userlocation = { latitude: e.position.lat, longitude: e.position.lng };
      }

      if (userlocation && userlocation.latitude && userlocation.longitude && this.locationTimer) {
        const location = new AMap.LngLat(userlocation.longitude, userlocation.latitude);
        if (this.userLocationMarker) {
          this.userLocationMarker.setPosition(location);
        } else {
          const locationImg = require('@/assets/image/index/user-location.png');
          this.userLocationMarker = new AMap.Marker({
            icon: locationImg,
            position: location,
            offset: new AMap.Pixel(-13, -13),
          });
          this.map.add(this.userLocationMarker);
        }
      }
    },

    isShowingUserLocation() {
      return this.locationTimer != null;
    },

    hideUserLocation() {
      if (this.userLocationMarker) {
        this.map.remove(this.userLocationMarker);
        this.userLocationMarker = null;
      }
      if (this.locationTimer) {
        clearInterval(this.locationTimer);
        this.locationTimer = null;
        // web location for test
        if (this.geolocation) {
          this.map.removeControl(this.geolocation);
        }
      }
    },

    getCurrentLocation() {
      if (this.userLocationMarker) {
        const pos = this.userLocationMarker.getPosition();
        return { longitude: pos.lng, latitude: pos.lat };
      }
      return null;
    },

    moveToCurrentLocation() {
      if (this.userLocationMarker) {
        const pos = this.userLocationMarker.getPosition();

        // //my.log("moveToCurrentLocation :", pos);
        this.setCenter(pos.lng, pos.lat);
      }
    },

    setCenter(longitude, latitude) {
      const mapCenter = new AMap.LngLat(longitude, latitude);
      if (this.map && this.map.setCenter) {
        this.map.setCenter(mapCenter);
      }
    },

    getCenter() {
      const center = this.map.getCenter();
      return {
        latitude: center.lat,
        longitude: center.lng,
      };
    },

    setZoom(zoom) {
      this.map.setZoom(zoom);
    },
    getZoom() {
      const zoom = this.map.getZoom();
      return zoom;
    },
    setZoomAndCenter(zoom, longitude, latitude) {
      this.map.setZoomAndCenter(zoom, [longitude, latitude]);
    },

    // elements = {start: 1, end :1 ,taxi: 1, route: 1} 设置全览，elements为需要全览元素参数。
    setFitView(elements = [], padding = [10, 100, 10, 10], maxZoom = 20) {
      const fitMarker = [];
      if (elements.start) {
        fitMarker.push(this.startMarker);
      }
      if (elements.end) {
        fitMarker.push(this.endMarker);
      }
      if (elements.taxi) {
        fitMarker.push(this.taxiMarker);
      }
      if (elements.route) {
        fitMarker.push(this.routePolyline);
      }
      // avoid:[Number,Number,Number,Number] 上下左右
      this.map.setFitView(fitMarker, false, padding, maxZoom);
    },

    // private methods
    _initMap() {
      this.map = new AMap.Map(this.containerId, {
        resizeEnable: true,
        center: [116.397428, 39.90923], // 中心点坐标
        zoom: 15,
        touchZoomCenter: 1,
      });

      // this.map.on('zoomend', this._mapZoomEnd);
      this.map.on('moveend', this._mapMoveEnd);
      this.map.on('movestart', this._mapMoveStart);
      this.map.on('resize', this._mapResize);

      if (this.showLocation) {
        this.showUserLocation();
      }
    },

    // _mapZoomEnd(e) {
    //     this.zoomLevel = this.map.getZoom();
    //     if (this.didMapZoomEnd) {
    //         this.didMapZoomEnd({zoom: this.zoomLevel});
    //     }
    // },

    _mapMoveStart(e) {
      const center = this.map.getCenter();
      this.zoomLevel = this.map.getZoom();
      this.location = {
        latitude: center.lat,
        longitude: center.lng,
      };

      if (this.onRegionChange) {
        this.onRegionChange({
          type: 'begin',
          zoom: this.zoomLevel,
          latitude: this.location.latitude,
          longitude: this.location.longitude,
        });
      }
    },

    _mapMoveEnd(e) {
      const center = this.map.getCenter();
      this.zoomLevel = this.map.getZoom();
      this.location = {
        latitude: center.lat,
        longitude: center.lng,
      };

      // if (this.didMapMoveEnd) {
      //     this.didMapMoveEnd({latitude: this.location.latitude, longitude: this.location.longitude});
      // }
      if (this.onRegionChange) {
        this.onRegionChange({
          type: 'end',
          zoom: this.zoomLevel,
          latitude: this.location.latitude,
          longitude: this.location.longitude,
        });
      }
    },
    _mapResize() {
      // 判断地图大小是否发生改变
      const isSetMap = true;
      this.$emit('onSizeChange', isSetMap);
    },
    _handleLocationNeedUpdate() {
      if (this.useNativeLocation && this.locationTimer) {
        const self = this;
        const currentUserLocation = getApp().globalData.currentUserLocation || null;
        if (currentUserLocation) {
          const getLocationTime = currentUserLocation.timeStamp || 0;
          const currentTime = (new Date()).getTime();
          if (currentUserLocation && currentTime - getLocationTime < 15000 && getLocationTime != 0) {
            self.onLocationComplete(currentUserLocation);
            if (self.onLocationComplete) {
              return;
            }
          }
        }

        GetLocationHelper.getLocation().then((res) => {
          if (res && res.longitude && res.latitude) {
            self.onLocationComplete(res);
          }
        });
      }
    },

    _getCarImageWithType(type) {
      const ICON_CAR = {
        taxi: require('@/assets/image/index/taxi.png'),
        expressCar: require('@/assets/image/index/expressCar.png'),
        privateCar: require('@/assets/image/index/privateCar.png'),
      };

      return ICON_CAR[type];
    },

    // type: taxi, expressCar, privateCar
    _generateCarMarkers(carData, type = '') {
      const markers = [];
      const src = this._getCarImageWithType(type);

      const carArray = carData[type] && carData[type].location || [];

      for (let i = 0; i < carArray.length; i++) {
        const oneCar = carArray[i];
        const angle = `${oneCar.angle}deg`;
        const markerContent = `${''
                    + '<div class="custom-content-marker" style="position: relative; width: 20px; height: 40px;">'
                    + '   <img src="'}${src}" style="width: 100%;height: 100%;-webkit-transform:rotate(${angle}); ">`
                    + '</div>';

        const position = new AMap.LngLat(oneCar.lon, oneCar.lat);

        const marker = new AMap.Marker({
          position,
          // 将 html 传给 content
          content: markerContent,
          // 以 icon 的 [center bottom] 为原点
          offset: new AMap.Pixel(-10, -20),
          zIndex: 101,
        });

        markers.push(marker);
      }
      return markers;
    },

    _generatePOIMarkerContent(name, time, title, vehicle, imgsrc) {
      let calloutContent = null;
      if (title) {
        calloutContent = `${''
                    + '   <div style="position: absolute; top: -50px;left: 50%;transform:translate(-50%,0);padding:0 15px; height: 40px;background-color: #fff; border-radius: 20px; '
                    + '   color: #000; text-align: center; box-shadow: -1px 1px 1px rgba(10, 10, 10, .3);line-height: 40px">'
                    + '       <span style="color:#000;white-space :nowrap;">'}${title}</span>`
                    + '       <div style="position: absolute;top: 39px;left: 50%;transform:translate(-50%,0);width: 0;height: 0;border: 8px solid #ffffff;border-color: #ffffff transparent transparent transparent;filter:drop-shadow(0 2px 1px rgba(10, 10, 10, .3));"></div>'
                    + '   </div>';
      } else if (time) {
        const timeStr = `${time}分钟后`;
        calloutContent = `${''
                    + '   <div style="position: absolute; top: -50px;left: 50%;transform:translate(-50%,0);padding:0 15px;height: 40px;background-color: #fff; border-radius: 20px; '
                    + '   text-align: center; box-shadow: -1px 1px 1px rgba(10, 10, 10, .3);line-height: 40px">'
                    + '       <div style="white-space :nowrap;"><span style="color:#4287ff;">'}${timeStr}</span>上车</div>`
                    + '       <div style="position: absolute;top: 39px;left: 50%;transform:translate(-50%,0);width: 0;height: 0;border: 8px solid #ffffff;border-color: #ffffff transparent transparent transparent;filter:drop-shadow(0 2px 1px rgba(10, 10, 10, .3));"></div>'
                    + '   </div>';
      } else if (vehicle) {
        calloutContent = `${''
                    + '   <div style="position: absolute; top: -50px;left: 50%;transform:translate(-50%,0);padding:0 15px;height: 40px;background-color: #fff; border-radius: 20px; '
                    + '   color: #000; text-align: center; box-shadow: -1px 1px 1px rgba(10, 10, 10, .3);line-height: 40px">'
                    + '       <div style="white-space :nowrap;">正在呼叫<span style="color:#4287ff;">'}${vehicle}种车型</span></div>`
                    + '       <div style="position: absolute;top: 39px;left: 50%;transform:translate(-50%,0);width: 0;height: 0;border: 8px solid #ffffff;border-color: #ffffff transparent transparent transparent;filter:drop-shadow(0 2px 1px rgba(10, 10, 10, .3));"></div>'
                    + '   </div>';
      }

      let labelContent = null;
      if (name) {
        labelContent = `${''
                    + '   <div class="custom-content-marker-label" style="position: absolute; top: 34px; left: -91px;width: 210px; text-align: center;">'
                    + '       <span style="font-size:13px;position: absolute;top: 0;left: 50%;transform:translate(-50%,0);-webkit-text-stroke: 3px #fff;color:#000000;">'}${name}</span>`
                    + `       <span style="font-size:13px;position: absolute;top: 0;left: 50%;transform:translate(-50%,0);font-weight: bolder; color:#000000;">${name}</span>`
                    + '   </div>';
      }

      let markerContent = `${''
                + '<div class="custom-content-marker" style="position: relative; width: 26px; height: 34px;">'
                + '   <img src="'}${imgsrc}" style="width: 100%;height: 100%;">`;

      if (calloutContent) {
        markerContent += calloutContent;
      }

      if (labelContent) {
        markerContent += labelContent;
      }

      markerContent += '</div>';

      return markerContent;
    },

    _generatePOIMarker(name, longitude, latitude, time, title, vehicle, imgsrc, scriccc) {
      const markerContent = this._generatePOIMarkerContent(name, time, title, vehicle, imgsrc);
      const position = new AMap.LngLat(longitude, latitude);
      let index = 103;
      if (scriccc == 'start') {
        index = 104;
      } else {
        index = 103;
      }

      const marker = new AMap.Marker({
        position,
        content: markerContent,
        offset: new AMap.Pixel(-13, -34),
        zIndex: index,
      });

      return marker;
    },

  },
};
</script>

<style scoped>
.amap-logo {
    pointer-events: none;
    display: none;
}
.animate {
    position: relative;
    animation: start-anim 800ms ease-out forwards;
    z-index: 3;
}
@keyframes start-anim{
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(10px)scale(1,0.8);
    }
    70% {
        transform: translateY(-20px)
    }
    80% {
        transform: translateY(-10px)scale(1,1);
    }
    100%{
        transform: translateY(0)scale(1,1);
    }
}
.ellipse {
    position: absolute;
    width: 0;
    height: 0;
    top: 55px;
    left: 50%;
    background: #0090CE;
    border-radius: 50%;
    transform:translate(-50%,0);
    z-index: 2;
    opacity: .9;
}
.ellipseanimation{
    animation: ellipse-anim 300ms ease-out forwards;
    animation-delay: 0.75s;
}
@keyframes ellipse-anim{
    0% {
        width: 0;
        height: 0;
    }
    100%{
        width: 86px;
        height: 15px;
        opacity: 0;
    }
}
.location-picker {
    width: 48px;
    height: 55px;
    position: absolute;
    margin: auto;
    top: -25px;
    right: 1.5px;
    bottom: 38px;
    left: 0;
    z-index: 1;
}

/* 地图中心扎标样式 */
.location-picker-callout {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -100px;
    right: -132px;
    padding: 14px 19px 30px 26px;
    font-size: 14px;
    background: url("../../assets/image/index/eta-bg.png");
    background-size: 100% 100%;
    color: #fff;
    text-align: center;
    line-height: 40px;
    white-space: nowrap;
}
.location-picker-dividingline {
    width: 1px; /*no*/
    height: 46px;
    margin: 0 17px;
    background-color: #8b92a4;
}
.location-picker-describe {
    font-size: 28px;
}
.location-picker-describe img {
    width: 15px;
    height: 27px;
    position: relative;
    top: 2px;
}
.location-picker-minute {
    display: flex;
    flex-wrap: wrap;
    width: 40px;
    line-height: 28px;
    align-items: center;
    justify-content: center;
}
.location-picker-minute-number {
    color: #fff;
    font-size: 32px;
    padding: 0;
    margin: 0;
}
.location-picker-minute-text {
    color: #fff;
    font-size: 20px;
    padding: 0;
    margin: 0;
}
</style>
