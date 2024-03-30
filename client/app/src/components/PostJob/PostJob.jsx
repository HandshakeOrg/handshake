import styles from './PostJob.module.css';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { isEmpty } from '../../utils/validation/AuthValidation';
function PostJob() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    user_type: '',
    location: '',
    description: '',
    price_negotiable: '',
    status: '',
    expiry_date: '',
    user_id: user,
    category_id: 1,
  });
  console.log(user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEmpty(formData.title)) {
      toast.error('Please enter a title');
      return;
    }
    if (isEmpty(formData.user_type)) {
      toast.error('Please enter a user_type.');
      return;
    }
    if (isEmpty(formData.location)) {
      toast.error('Please enter a location.');
      return;
    }
    if (isEmpty(formData.description)) {
      toast.error('Please enter a description');
      return;
    }
    if (isEmpty(formData.price_negotiable)) {
      toast.error('Please enter price.');
      return;
    }
    if (isEmpty(formData.status)) {
      toast.error('Please select a status');
      return;
    }
    if (isEmpty(formData.expiry_date)) {
      toast.error('Please set expiry date.');
      return;
    }
    try {
      const formBody = Object.keys(formData)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(formData[key])
        )
        .join('&');

      const response = await fetch(
        'https://handshake-edac.onrender.com/api/create_listings',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      // Handle successful response
      console.log('Listing created successfully');
    } catch (error) {
      console.error('Error creating listing:', error.message);
    }
  };
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className='space-y-2'>
          <h1 className={styles.h1}>Post a listing</h1>
          <p className={styles.p}>
            Fill out the form below to post a listing to the list board.
          </p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor='title' className={styles.label}>
            Listing Title
          </label>
          <input
            id='title'
            type='text'
            name='title'
            placeholder='Enter the listing title'
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='user_type' className={styles.label}>
            Organisation
          </label>
          <input
            id='user_type'
            type='text'
            name='user_type'
            placeholder='Enter the organisation name'
            value={formData.user_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='location' className={styles.label}>
            Location
          </label>
          <input
            id='location'
            type='text'
            name='location'
            placeholder='Enter the location'
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='description' className={styles.label}>
            Job description
          </label>
          <textarea
            id='description'
            placeholder='Enter the job description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor='price_negotiable' className={styles.label}>
            Price
          </label>
          <input
            id='price_negotiable'
            type='text'
            placeholder='Enter the price'
            name='price_negotiable'
            value={formData.price_negotiable}
            onChange={handleChange}
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
              onChange={handleChange}
              required
            />
            <label htmlFor='active' className={styles.label_radio}>
              Active
            </label>
          </div>
          <div className=''>
            <input
              id='inactive'
              type='radio'
              name='status'
              value='Inactive'
              onChange={handleChange}
              required
            />
            <label htmlFor='inactive' className={styles.label_radio}>
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
            name='expiry_date'
            placeholder='Enter the expiry date'
            value={formData.expiry_date}
            onChange={handleChange}
            required
          />
        </div>
        <input type='hidden' name='user_id' value={formData.user_id} />
        <input type='hidden' name='category_id' value={formData.category_id} />
        <button className={styles.button}>Post job</button>
      </form>
    </main>
  );
}

export default PostJob;
