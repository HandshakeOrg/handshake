import { Link } from "react-router-dom";
import styles from "./LandingHero.module.css";

function LandingHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.top}>
          <h1 className={styles.h1}>Welcome to handshake</h1>
          <h3 className={styles.h3}>
            Revolutionizing the Job Search and Classified Ads Experience
          </h3>
          <p className={styles.sub_title}>
            Looking for a platform that makes browsing, posting, and managing
            listings for employment opportunities and transactions a breeze?
            Welcome to handshake, where dynamic features meet user-centric
            design to create an unparalleled experience.
          </p>
          <Link to="/signup" className={styles.btns}>
            GET STARTED
          </Link>
        </div>
      </section>

      <section className={styles.first}>
        <div className={styles.wrapper}>
          <h2>What Sets Us Apart?</h2>
          <div className={styles.card_wrap}>
            <div className={styles.card}>
              <h3>Dynamic and Versatile</h3>
              <p>
                Our web-based application adapts to your needs, whether
                you&apos;re seeking employment or looking to post a listing.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Effortless Navigation</h3>
              <p>
                Say goodbye to clunky interfaces. Our intuitive design ensures
                smooth navigation for users of all levels.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Empowering Users</h3>
              <p>
                Take control of your listings with powerful management tools at
                your fingertips.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Comprehensive Listings</h3>
              <p>
                Discover a wide array of employment opportunities and
                transactions, all in one convenient location.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.second}>
        <div className={styles.full_width}>
          <h2 className={styles.features}>Our Key Features</h2>
          <div className={styles.second_container}>
            <div className={styles.flex_container}>
              <h2>Find your next opportunity</h2>
              <p>
                Discover a wide variety of job openings and classified ads
                effortlessly on our platform. Browse through listings and find
                the perfect opportunity that suits your needs.
              </p>
              <Link to="/app" className={styles.btns}>
                Browse listings
              </Link>
            </div>
            <div className={styles.flex_container}>
              <h2>Post your listings with ease</h2>
              <p>
                Whether you&apos;re looking to hire or sell, our platform
                provides a seamless experience for creating and publishing
                listings in just a few minutes. Post your listings with ease and
                reach a wide audience.
              </p>
              <Link to="/app/postjob" className={styles.btns}>
                Post a job
              </Link>
            </div>
          </div>
          <div className={styles.second_container}>
            <div className={styles.flex_container}>
              <h2>Manage your listings with ease</h2>
              <p>
                Whether you&apos;re looking to hire or sell, our platform
                provides a seamless experience for creating and publishing
                listings in just a few minutes. Post your listings with ease and
                reach a wide audience.
              </p>
              <Link to="/app" className={styles.btns}>
                Manage listings
              </Link>
            </div>
            <div className={styles.flex_container}>
              <h2>Join the vibrant community</h2>
              <p>
                Ready to take the first step? Sign up now and start exploring
                the endless possibilities!
              </p>
              <Link to="/signup" className={styles.btns}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingHero;
