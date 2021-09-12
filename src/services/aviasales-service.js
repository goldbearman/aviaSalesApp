export default class AviasalesService {
  // _apiBase = "https://front-test.beta.aviasales.ru";
  _apiBase = "https://aviasales-test-api.java-mentor.com";


  async getResources(url) {
    // console.log("getResource");
    const res = await fetch(`${this._apiBase}${url}`);
    // console.log(res);
    if (res.ok) {
      // throw new Error("Bad response from server");
      return await res.json();
    }
  }

  async getId() {
    const searchIdJson = await this.getResources("/search");
    const searchId = searchIdJson['searchId'];
    return searchId;
  }


  async getFlights(searchId) {
    // eslint-disable-next-line no-console


    // console.log(searchIdJson);

    let res = await this.getResources(`/tickets?searchId=${searchId}`);
    console.log(res);
    if (res === undefined) {
      return {tickets: [], stop: false};
    } else return res;
  }
}