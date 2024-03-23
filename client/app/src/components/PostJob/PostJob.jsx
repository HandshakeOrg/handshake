import styles from './PostJob.module.css';

function PostJob() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className="space-y-2">
          <h1 className={styles.h1}>Post a job</h1>
          <p className={styles.p}>
            Fill out the form below to post a job to the job board.
          </p>
        </div>
        <div className={styles.input_box}>
          <label htmlFor="title">Job title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter the job title"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            placeholder="Enter the company name"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            placeholder="Enter the location"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor="description">Job description</label>
          <textarea
            id="description"
            placeholder="Enter the job description"
            required
          />
        </div>
        <div className={styles.input_box}>
          <label htmlFor="instructions">Application instructions</label>
          <textarea
            id="instructions"
            placeholder="Enter the application instructions"
            required
          />
        </div>
        <button className={styles.button}>Post job</button>
      </form>
    </main>
  );
}

export default PostJob;
