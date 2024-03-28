import './BodySection.css';
import ListingCard from './ListingCard';
import ListingDescription from './ListingDescription';
export default function BodySection() {
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
                  Find jobs
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className='jobs'>
        <div className='job-listings'>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
        <div className='job-description'>
          <ListingDescription />
        </div>
      </section>
    </div>
  );
}
