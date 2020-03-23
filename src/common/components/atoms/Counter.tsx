import React from 'react';
import { inject, observer } from 'mobx-react';
import CounterStore from '../../../stores/CouterStore';

interface InjectedProps {
  counterStore: CounterStore;
}

@inject('counterStore')
@observer
class Counter extends React.Component {
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const { counterStore } = this.injected;
    return (
      <div>
        <h1>{counterStore.number}</h1>
        <button type="button" onClick={counterStore.increase}>
          +1
        </button>
        <button type="button" onClick={counterStore.decrease}>
          -1
        </button>
      </div>
    );
  }
}
export default Counter;
