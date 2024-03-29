import styles from './PostJob.module.css';

function PostJob() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className='space-y-2'>
          <h1 className={styles.h1}>Post a listing</h1>
          <p className={styles.p}>
            Fill out the form below to post a listing to the list board.
          </p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='title'>Listing Title</label>
          <input
            id='title'
            type='text'
            placeholder='Enter the listing title'
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='user_type'>Organisation</label>
          <input
            id='user_type'
            type='text'
            placeholder='Enter the organisation name'
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='location'>Location</label>
          <input
            id='location'
            type='text'
            placeholder='Enter the location'
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='description'>Job description</label>
          <textarea
            id='description'
            placeholder='Enter the job description'
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='price_negotiable'>Price</label>
          <input
            id='price_negotiable'
            type='text'
            placeholder='Enter the price'
            required
          />
        </div>
        <div className={styles.radio_box}>
          <div className=''>
            <input
              id='active'
              type='radio'
              name='status'
              value='Active'
              required
            />
            <label htmlFor='active' className={styles.label}>
              Active
            </label>
          </div>
          <div className=''>
            <input
              id='inactive'
              type='radio'
              name='status'
              value='Inactive'
              required
            />
            <label htmlFor='inactive' className={styles.label}>
              Inactive
            </label>
          </div>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='expiry_date' className={styles.label}>
            Expiry Date
          </label>
          <input
            id='expiry_date'
            type='date'
            placeholder='Enter the expiry date'
            required
          />
        </div>
        <button className={styles.button}>Post job</button>
      </form>
    </main>
  );
}

export default PostJob;
