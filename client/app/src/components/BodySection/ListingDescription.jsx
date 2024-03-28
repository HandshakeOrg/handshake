import PropTypes from 'prop-types';

export default function ListingDescription({ listing }) {
  return (
    <div className='job-description-main-fixed'>
      <div className='job-title-box'>
        <h2 className='title'>{listing.title}</h2>
        <p className='company-name'>{listing.user_type}</p>
        <p className='job-location'>{listing.location}</p>
        <p className='salary'>{listing.price_negotiable}</p>
        <div className='cta'>
          <a href=''>Apply now</a>
        </div>
      </div>
      <div className='job-description-fixed'>
        <div className='job-details'>
          <h2>Listing details</h2>
          <h3 className='pay'>Pay </h3>
          <span className='amount'>{listing.price_negotiable}</span>
          <h3 className='job-type'>Status</h3>
          <span className='type'>{listing.status}</span>
        </div>
        <div className='job-location-box'>
          <h2>Location</h2>
          <p>{listing.location}</p>
        </div>
        <div className='job-full-description-box'>
          <h2>Full listing description</h2>
          <p className='description'>{listing.description}</p>
        </div>
      </div>
    </div>
  );
}
ListingDescription.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string.isRequired,
    user_type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price_negotiable: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
