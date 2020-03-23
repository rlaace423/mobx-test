import CounterStore from './CouterStore';

export default class RootStore {
  counterStore: CounterStore;

  constructor() {
    this.counterStore = new CounterStore();
  }
}
