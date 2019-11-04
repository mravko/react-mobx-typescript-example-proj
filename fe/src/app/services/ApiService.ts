import axios from "axios";

export default class ApiService {
  constructor() {}

  private static client = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 25000
  });

  static async GetForecastData() {
    return this.client.get("/weatherforecast");
  }
}
