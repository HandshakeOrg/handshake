export default function ListingCard() {
  return (
    <div className='job-card'>
      <h2 className='title'>Online Sales Agent</h2>
      <p className='company-name'>Handshake</p>
      <p className='job-location'>Ikeja</p>
      <p className='job-salary'>
        <span className='amount'>&#8358;500000 - &#8358;1000000 a month </span>
        <span className='job-mode'>Fulltime</span>
      </p>
      <ul className='job-short-description'>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          beatae temporibus voluptates rerum quae excepturi, vero
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum sunt
          esse similique beatae quas molestiae in quis magnam, non ea
        </li>
      </ul>
      <span className='date-posted'>Today</span>
    </div>
  );
}
