import "./_footer.scss";

const Footer = () => {
  return (
      <div className="footer-container">
        <div className="footer-section">
          <h2>Stocks</h2>
          <p>Search stocks</p>
          <p>Saved stocks</p>
        </div>
        <div className="footer-section">
          <h2>About</h2>
          <p>Who are we?</p>
          <p>Why Stockpile?</p>
        </div>
        <div className="footer-section">
          <h2>FAQ</h2>
          <p>See FAQ here</p>
        </div>
      </div>
  );
};

export default Footer;
