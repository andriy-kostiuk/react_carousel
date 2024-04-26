import React, { useState } from 'react';
import './Carousel.scss';

interface Props {
  images: string[];
  step?: number;
  frameSize?: number;
  itemWidth?: number;
  animationDuration?: number;
  infinite?: boolean;
}

const Carousel: React.FC<Props> = ({
  images,
  step = 1,
  frameSize = 3,
  itemWidth = 130,
  animationDuration = 1000,
  infinite = false,
}) => {
  const [translateX, setTranslateX] = useState(0);
  const maxX = itemWidth * (images.length - frameSize) * -1;
  const isFirst = translateX === 0;
  const isLast = translateX === maxX;

  const handleNextClick = () => {
    if (isLast) {
      if (infinite) {
        setTranslateX(0);
      }

      return;
    }

    let nextX = translateX - itemWidth * step;

    if (nextX < maxX) {
      nextX = maxX;
    }

    setTranslateX(nextX);
  };

  const handlePrevClick = () => {
    if (isFirst) {
      if (infinite) {
        setTranslateX(maxX);
      }

      return;
    }

    let nextX = translateX + itemWidth * step;

    if (nextX > 0) {
      nextX = 0;
    }

    setTranslateX(nextX);
  };

  return (
    <div className="Carousel">
      <div
        className="Carousel__wrapper"
        style={{ width: `${frameSize * itemWidth}px` }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${translateX}px)`,
            transitionDuration: `${animationDuration.toString()}ms`,
          }}
        >
          {images.map((image, i) => {
            return (
              <li key={image}>
                <img
                  className="Carousel__img"
                  style={{ width: `${itemWidth}px`, height: `${itemWidth}px` }}
                  src={image}
                  alt={i.toString()}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Carousel__control">
        <button type="button" onClick={handlePrevClick}>
          Prev
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
