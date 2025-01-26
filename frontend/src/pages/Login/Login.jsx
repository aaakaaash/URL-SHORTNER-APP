
import "./Login.css";  

const Login = () => {
  const handleGoogleSignIn = () => {
     window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">URL SHORTENER</h1>
        <h2 className="login-subtitle">Welcome to URL Shortener</h2>
        <p className="login-text">Sign in to explore!</p>

        <button onClick={handleGoogleSignIn} className="google-btn">
          <span className="google-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
              <path fill="#4285F4" d="M23.49 12.3c0-.72-.06-1.38-.17-2h-9.62v3.26h5.59c-.24 1.42-1 2.62-2.12 3.22v2.66h3.42c2.01-1.85 3.14-4.61 3.14-8.14z"></path>
              <path fill="#34A853" d="M13.7 7.29c-.4-1.17-1.55-2-2.89-2s-2.48.83-2.88 2H3.07v2.66h2.07c.4-1.17 1.55-2 2.89-2 1.67 0 3.04 1.1 3.53 2.63 0 0 .03-.04.03-.06v-2.59h-2.05z"></path>
              <path fill="#FBBC05" d="M3.07 12.3c.5-1.53 1.87-2.63 3.53-2.63 1.34 0 2.49.83 2.89 2h2.07V9.04c-.5-1.73-1.86-2.63-3.53-2.63-1.34 0-2.49.83-2.89 2H3.07v2.66z"></path>
              <path fill="#EA4335" d="M3.07 6.61c-.4-1.17 0-2.41 1.29-3.23-1.7-.41-3.24 1.16-3.53 2.56l2.07 2.66c.5-1.19.97-2.63 1.17-3.23z"></path>
            </svg>
          </span>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
