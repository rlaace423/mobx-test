import { action, observable } from 'mobx';

export default class CounterStore {
  @observable number = 0;

  @action increase = () => {
    this.number += 1;
  };

  @action decrease = () => {
    if (this.number > 0) this.number -= 1;
  };
}
