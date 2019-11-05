import axios from "axios";

export default class ApiService {
  constructor() {}

  private static client = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 25000
  });

  static async GetWebsites() {
    return this.client.get("/websites");
  }
}
