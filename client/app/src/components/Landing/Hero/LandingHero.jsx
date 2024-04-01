import { Link } from 'react-router-dom';
import styles from './LandingHero.module.css';

function LandingHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1 className={styles.h1}>Find what you&apos;re looking for</h1>
          <p className={styles.sub_title}>
            The best place to find your next adventure. From job postings to
            real estate listings, we&apos;ve got you covered.
          </p>
          <Link to='/signup' className={styles.btns}>
            GET STARTED
          </Link>
        </div>
      </section>

      <section className={styles.first}>
        <div className={styles.wrapper}>
          <h2>WHAT WE DO</h2>
          <p>
            Welcome to HANDSHAKE, the greatest resource for discovering your
            next career move or publishing job openings. Whether you&apos;re an
            employer seeking for top talent or a job seeker looking for your
            ideal job, HANDSHAKE is here to make the process simple and
            effective. Explore a variety of career opportunities across sectors
            and regions, or attract the top applicants by advertising job
            vacancies on our site.
          </p>
        </div>
      </section>
      <section className={styles.second}>
        <div className={styles.seek_text}>
          <h2>For Job Seekers</h2>
          <p>Find Your Perfect Fit</p>
          <p>
            Discover intriguing work possibilities based on your talents,
            experience, and goals. Whether you&apos;re looking for a tough new
            role, a career shift, or your first job out of college, JobSeekerHub
            offers a diverse choice of job ads to choose from. Our user-friendly
            website allows you to effortlessly browse for jobs, save your
            favourite ads, and apply directly to employers—all in one location.
          </p>
          <Link to='/signup' className={styles.apply_btns}>
            Apply to Listing/Job
          </Link>
        </div>
        <div className={styles.seek_img}>
          <img
            src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYiUyMHNlZWtlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='job seeker'
          />
        </div>
      </section>
      <section className={styles.third}>
        <div className={styles.employers}>
          <h2>For Employers</h2>
          <p>Attract Top Talent</p>
          <p>
            Connect with eligible prospects from our huge list of job seekers.
            Post your job openings on JobSeekerHub to attract a specific
            community of motivated individuals who are actively seeking new
            possibilities. Our powerful platform enables you to manage job ads,
            examine candidate profiles, and expedite the recruiting process, all
            while saving time and resources.
          </p>
          <Link to='/signup' className={styles.apply_btns}>
            Post a Listing
          </Link>
        </div>
        <div className={styles.seek_img}>
          <img
            src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYiUyMHNlZWtlcnxlbnwwfHwwfHx8MA%3D%3D'
            alt='job seeker'
          />
        </div>
      </section>
    </>
  );
}

export default LandingHero;
