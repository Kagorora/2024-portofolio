import ContactUsButton from '../ContactUsButton';
import DateTimeWeather from '../DateTimeWeather/DateTimeWeather';

const MyLocation = () => {
  return (
    <div className="my-location-container">
      <DateTimeWeather />
      <div className="contact-us-container">
        <ContactUsButton />
      </div>
    </div>
  );
};

export default MyLocation;
