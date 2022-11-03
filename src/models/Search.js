import axios from 'axios';

export default class Search {
  constructor(number, type) {
    this.number = number;
    this.type = type;
  }
  async getFact() {
    let response;
    try {
      response = await axios(
        `http://numbersapi.com/${this.number}/${this.type}?json`
      );
      return response.data;
    } catch (error) {
      alert(error);
    }
  }
}
