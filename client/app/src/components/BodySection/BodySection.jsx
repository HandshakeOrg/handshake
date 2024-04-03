import { useEffect, useState } from 'react';
import './BodySection.css';
import ListingCard from './ListingCard';
// import ListingDescription from './ListingDescription';
import Spinner from '../Spinners/Spinner';
export default function BodySection() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('title');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // const BASE_URL = 'https://handshake-edac.onrender.com/api';
  const BASE_URL = 'http://127.0.0.1:5000/api';
  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/get_listings?page=${currentPage}`,
          {
            credentials: 'include',
          }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch listings');
        }
        const data = await response.json();
        setLoading(false);
        setListings(data.listings);
        setTotalPages(data.total_pages);
        // console.log(data);
        // console.log(data.total_pages);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, [currentPage]);

  // For search listings
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}/listings_search?${searchType}=${searchQuery}&page=${currentPage}`,
        { credentials: 'include' }
      );
      if (response.ok) {
        const data = await response.json();
        setListings(data.listings);
        setTotalPages(data.total_pages);
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

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    console.log('Previous being pressed');
  };

  function formatDateFromString(dateString) {
    // Parse the string date into a Date object
    const date = new Date(dateString);

    // Get the day, month, and year from the date object
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' }); // Get month as a string
    const year = date.getFullYear();

    // Format the date as "day month year"
    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
  }

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
                key={listing.id}
                title={listing.title}
                user_type={listing.user_type}
                location={listing.location}
                price_negotiable={listing.price_negotiable}
                status={listing.status}
                description={listing.description}
                expiry_date={formatDateFromString(listing.expiry_date)}
              />
            ))}
          </div>
        </section>
        <div className='pagination'>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        {loading && <Spinner />}
      </div>
    </main>
  );
}
