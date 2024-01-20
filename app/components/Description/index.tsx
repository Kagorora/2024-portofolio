import MyLocation from '../MyLocation';

import Sliding from '../common/SlidingText';

const Description = () => {
  return (
    <div className="description-container">
      <div className="description-left-container">
        <div className="image-container"></div>
        <div className="main-description">
          <Sliding text="Developer - Designer - Freelancer" />
        </div>
      </div>
      <div className="description-right-container">
        <MyLocation />
      </div>
    </div>
  );
};

export default Description;
