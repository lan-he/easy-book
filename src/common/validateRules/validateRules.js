
export default class CheckoutPhoneNumber {

  static phoneCheck(phoneNumber) {
    return /^1([38][0-9]|5[0-3,5-9]|4[5-9]|6[56]|7[0-8]|9[189])[0-9]{8}$/.test(phoneNumber);
  }
  
  static passwordCheck(password) {
    return /^(?=.*?[a-z)(?=.*>[A-Z])(?=.*?[0-9])[a-zA_Z0-9]{6,10}$/.test(password);
  }

  static nicknameCheck(nickname) {
    return /^[A-Za-z_@.]{2,8}$/.test(nickname);
  }
}