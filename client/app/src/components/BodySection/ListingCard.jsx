import PropTypes from 'prop-types';

export default function ListingCard({
  title,
  user_type,
  location,
  price_negotiable,
  status,
  description,
  expiry_date,
}) {
  return (
    <div className='job-card'>
      <h2 className='title'>{title}</h2>
      <p className='company-name'>
        {user_type}, {location}
      </p>

      <p className='job-salary'>
        <span className='amount'>&#x20A6;{price_negotiable}/unit</span>
        <span className='job-mode active'>{status}</span>
      </p>
      <p className='job-short-description'>{description}</p>
      <span className='date-posted'>Open till: {expiry_date}</span>
      <div className='cta'>
        <button className='cta-button'>Apply</button>
      </div>
    </div>
  );
}
ListingCard.propTypes = {
  title: PropTypes.string.isRequired,
  user_type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price_negotiable: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expiry_date: PropTypes.string.isRequired,
};
