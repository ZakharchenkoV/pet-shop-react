import { Component } from 'react';

import { ButtonsBlock } from '../../ButtonsBlock';
import type { State } from '../types/ClassCounter';

import styles from './ClassCounter.module.scss';

// Классовые компоненты - устаревший подход, но в проектах втретиться могут, поэтому об их существовании необъодимо знать.
// Сейчас рекомендуется использовать функциональные компоненты и хуки.
export class ClassCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prev: { count: number }) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev: { count: number }) => ({ count: prev.count - 1 }));
  };

  render() {
    return (
      <div className={styles['counter']}>
        <h1>{this.state.count}</h1>
        <ButtonsBlock
          firstButton="-"
          firstStatus="negative"
          firstButtonClickHandler={this.decrement}
          secondButton="+"
          secondStatus="positive"
          secondButtonClickHandler={this.increment}
        />
      </div>
    );
  }
}
