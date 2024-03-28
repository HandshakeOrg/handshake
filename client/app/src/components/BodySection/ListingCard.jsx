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
      <p className='company-name'>{user_type}</p>
      <p className='job-location'>{location}</p>
      <p className='job-salary'>
        <span className='amount'>{price_negotiable}</span>
        <span className='job-mode'>{status}</span>
      </p>
      <p className='job-short-description'>{description}</p>
      <span className='date-posted'>{expiry_date}</span>
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
