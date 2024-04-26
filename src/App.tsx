import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 1,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
    infinite: false,
  };

  handleChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = evt.target;

    this.setState(newState => {
      let res = {};

      switch (name) {
        case 'infinite':
          res = { [name]: checked };
          break;
        default:
          res = { [name]: +value };
      }

      return {
        ...newState,
        ...res,
      };
    });
  };

  render() {
    const { images, step, frameSize, itemWidth, animationDuration, infinite } =
      this.state;

    return (
      <div className="app">
        <h1 className="app__title" data-cy="title">
          Carousel with {images.length} images
        </h1>
        <form className="carousel-settings" action="">
          <label className="carousel-settings__item" htmlFor="width">
            Item width:
            <input
              className="carousel-settings__input"
              id="width"
              name="itemWidth"
              type="number"
              value={itemWidth}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className="carousel-settings__item" htmlFor="size">
            Frame size:
            <input
              className="carousel-settings__input"
              name="frameSize"
              id="size"
              type="number"
              value={frameSize}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className="carousel-settings__item" htmlFor="step">
            Frame step:
            <input
              className="carousel-settings__input"
              name="step"
              id="step"
              type="number"
              value={step}
              onChange={this.handleChangeInput}
            />
          </label>
          <label
            className="carousel-settings__item"
            htmlFor="animation_duration"
          >
            Animation duration:
            <input
              className="carousel-settings__input"
              name="animationDuration"
              id="animation_duration"
              type="number"
              value={animationDuration}
              onChange={this.handleChangeInput}
            />
          </label>
          <label className="carousel-settings__item" htmlFor="infinite">
            Infinite:
            <input
              name="infinite"
              id="infinite"
              type="checkbox"
              checked={infinite}
              onChange={this.handleChangeInput}
            />
          </label>
        </form>

        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
          infinite={infinite}
        />
      </div>
    );
  }
}

export default App;
