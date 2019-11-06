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

  static async SaveWebsite(data: any) {
    return this.client.post("/websites", {
      websiteName: data.websiteName,
      websiteUrl: data.websiteUrl,
      databaseName: data.databaseName,
      connectionString: data.connectionString
    });
  }

  static async RemoveWebsite(id: number) {
    return this.client.delete("/websites/" + id);
  }
}
