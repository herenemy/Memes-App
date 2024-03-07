export default class API {
  constructor() {
    this.baseUrl = 'https://api.imgflip.com';
  }
  fetchMeme() {
    return fetch(`${this.baseUrl}/get_memes`).then(data => data.json());
  }
}
