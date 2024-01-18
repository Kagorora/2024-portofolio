import DateTimeWeather from '../components/common/DateTimeWeather';

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="profile">I am awesome</div>
      <div className="physical-location">
        <span>Current Location</span>
        <span>
          <DateTimeWeather />
        </span>
      </div>
    </div>
  );
};

export default Intro;
