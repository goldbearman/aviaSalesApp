export default class AviasalesService {
  _apiBase = "https://front-test.beta.aviasales.ru";



  async getResources(url) {
    console.log("getResource");
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }



  async getFlights() {
    // eslint-disable-next-line no-console
    console.log("getFlights");

    const searchIdJson = await this.getResources("/search");
    const searchId = searchIdJson['searchId'];
    console.log(searchId);


    // const res = await fetch(`${this._apiBase}/tickets?searchId=${this._searchId}`);
    // if (!res.ok) {
    //   throw new Error(`Could not fetch , received ${res.status}`);
    // }
    // eslint-disable-next-line no-return-await
    // return await res.json();
    return await this.getResources(`/tickets?searchId=${searchId}`);
  }
}