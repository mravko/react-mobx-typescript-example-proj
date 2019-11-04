import { RouterStore } from "mobx-react-router";
import queryString from "queryString";
import { computed } from "mobx";

export default class RoutingStore extends RouterStore {
  @computed
  get queryStringParams() {
    return queryString.parse(this.location.pathname);
  }

  @computed
  get queryStringValue() {
    return this.location.search.replace("?", "");
  }

  setQueryValue(key: string, value: any) {
    var q = queryString.parse(this.queryStringValue);
    q[key] = value;
    this.history.push({
      search: `?${queryString.stringify(q)}`
    });
  }

  queryValue(key: string): string {
    var q = queryString.parse(this.queryStringValue);
    return q[key];
  }
}
