export default class AviasalesService {
  apiBase = 'https://aviasales-test-api.java-mentor.com';

  // eslint-disable-next-line consistent-return
  async getResources(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (res.ok) {
      // throw new Error("Bad response from server");
      return res.json();
    }
  }

  async getId() {
    const searchIdJson = await this.getResources('/search');
    const { searchId } = searchIdJson;
    return searchId;
  }

  async getFlights(searchId) {
    const res = await this.getResources(`/tickets?searchId=${searchId}`);
    if (res === undefined) {
      return { tickets: [], stop: false };
    }
    return res;
  }
}
