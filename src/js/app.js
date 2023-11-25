// TODO: write your code here

export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    const regex = /^[a-z](?:(?!\d{3,})[\w-])*[a-z]$/i;

    return regex.test(this.userName);
  }
}
