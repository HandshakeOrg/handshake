import { useEffect, useState } from 'react';
import './BodySection.css';
import ListingCard from './ListingCard';
import ListingDescription from './ListingDescription';
export default function BodySection() {
  const [listings, setListings] = useState([]);
  const [selectedListingId, setSelectedListingId] = useState(null);
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          'https://handshake-edac.onrender.com/api/get_listings'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setListings(data.listings);
      } catch (error) {
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
  return (
    <div>
      <section className='search'>
        <div className='form-container'>
          <form action=''>
            <div className='form'>
              <div className='search-field'>
                <input type='text' />
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
          {selectedListing && <ListingDescription listing={selectedListing} />}
        </div>
      </section>
    </div>
  );
}
