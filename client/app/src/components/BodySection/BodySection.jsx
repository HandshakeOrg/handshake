import { useEffect, useState } from 'react';
import './BodySection.css';
import ListingCard from './ListingCard';
import ListingDescription from './ListingDescription';
import Spinner from '../Spinners/Spinner';
export default function BodySection() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [selectedListingId, setSelectedListingId] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title');

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://handshake-edac.onrender.com/api/get_listings'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setLoading(false);
        setListings(data.listings);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, []);
  useEffect(() => {
    if (selectedListingId) {
      const listing = listings.find(
        (listing) => listing.user_id === selectedListingId
      );
      setSelectedListing(listing);
    } else {
      setSelectedListing(null);
    }
  }, [selectedListingId, listings]);

  const handleListingSelect = (listingId) => {
    setSelectedListingId(listingId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://handshake-edac.onrender.com/api/listings_search?${searchType}=${searchQuery}`
      );
      if (response.ok) {
        const data = await response.json();
        setListings(data.listings);
      } else {
        console.error('Failed to search listings:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while searching listings:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchType(event.target.value);
  };
  return (
    <main className='main'>
      <div>
        <section className='search'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <div className='form'>
                <div className='search-field'>
                  <input
                    type='text'
                    placeholder='Search listings'
                    value={searchQuery}
                    onChange={handleInputChange}
                    className='input'
                  />
                  <select
                    value={searchType}
                    onChange={handleSelectChange}
                    className='select'
                  >
                    <option value='title'>By Title</option>
                    <option value='status'>By Status</option>
                    <option value='location'>By Location</option>
                  </select>
                </div>
                <div className='search-button-box'>
                  <button type='submit' className='search-button'>
                    Find listings
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section className='jobs'>
          <div className='job-listings'>
            {listings.map((listing) => (
              <ListingCard
                key={listing.user_id}
                title={listing.title}
                user_type={listing.user_type}
                location={listing.location}
                price_negotiable={listing.price_negotiable}
                status={listing.status}
                description={[listing.description]}
                expiry_date={listing.expiry_date}
                onSelect={handleListingSelect}
              />
            ))}
          </div>
          <div className='job-description'>
            {selectedListing && (
              <ListingDescription listing={selectedListing} />
            )}
          </div>
        </section>
        {loading && <Spinner />}
      </div>
    </main>
  );
}
