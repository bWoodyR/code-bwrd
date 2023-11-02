import "./loadingSpinner.scss"

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4"></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
