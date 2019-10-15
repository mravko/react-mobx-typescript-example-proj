import { IReactionDisposer } from "mobx";

export default class RootModel {
  reactions: IReactionDisposer[] = [];

  disposers: Function[] = [];

  disposeReactions() {
    console.debug("disposing reactions");
    for (const reaction of this.reactions) {
      reaction();
    }
    for (const disposer of this.disposers) {
      disposer();
    }
  }
}
