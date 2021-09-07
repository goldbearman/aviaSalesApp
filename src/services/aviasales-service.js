export default class AviasalesService {
  _apiBase = "https://front-test.beta.aviasales.ru";

  _searchId = "1xgu6";

  async getResource() {
    // eslint-disable-next-line no-console
    console.log("getResource");
    // eslint-disable-next-line no-underscore-dangle
    const res = await fetch(`${this._apiBase}/tickets?searchId=${this._searchId}`);
    if (!res.ok) {
      throw new Error(`Could not fetch , received ${res.status}`);
    }
    // eslint-disable-next-line no-return-await
    return await res.json();
  }
}