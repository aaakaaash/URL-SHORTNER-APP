import './Dashboard.css'

const Dashboard = () => {
    return (
      <div className="shortener-container">
      <div className="shortener-header">
        <h2>Use our URL shortener,  and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything here</h2>
        <div className="buttons">
          <button className="short-link-button">Short link</button>
      
        </div>
      </div>
      <div className="shortener-form">
        <h2>Shorten a long link</h2>
        <p>No credit card required.</p>
        <label htmlFor="long-link">Paste your long link here:</label>
        <input type="text" id="long-link" placeholder="https://example.com/my-long-url" />
        <button className="get-link-button">Get your link </button>
      </div>
      <div className="shortener-footer">
        <p>Sign up for free. Your free plan includes:</p>
      </div>
    </div>
    );
  };
  
  export default Dashboard;