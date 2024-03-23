import React from 'react';
import './BodySection.css';
import JobCard from './JobCard';
import JobDescription from './JobDescription';
export default function BodySection() {
  return (
    <div>
      <section className='search'>
        <div className='form-container'>
          <form action=''>
            <div class='form'>
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
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className='job-description'>
          <JobDescription />
        </div>
      </section>
    </div>
  );
}
