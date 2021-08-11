import React from 'react';

import './TheStar.scss';

import './Top.scss';

class TheStar extends React.Component {
  render() {
    const { index, rating, clickStar, hoverStar } = this.props;
    return (
      <div
        className="emptyStar"
        index={index}
        onMouseMove={hoverStar}
        OnClick={clickStar}
      >
        {index - rating === 0.5 && <div className="halfStar" index={index} />}
        {index <= rating && <div className="fullStar" index={index} />}
      </div>
    );
  }
}

export default TheStar;