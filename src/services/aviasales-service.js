export default class AviasalesService {
  apiBase = 'https://aviasales-test-api.java-mentor.com';

  async getResources(url) {
    const res = await fetch(`${this.apiBase}${url}`);
    if (res.ok) {
      return res.json();
    }
    return undefined;
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
