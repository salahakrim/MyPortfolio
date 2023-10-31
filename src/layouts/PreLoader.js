import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  });

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="preloader-container">
        <div className="intro-text">
          <h1 className="first-name">SalahEddine</h1>
          <div id="progress-line-container">
            <div className="progress-line" />
          </div>
          <h1 className="last-name">Akrim</h1>
        </div>
        <p className="opening-message">Welcome to my professional journey!</p>
      </div>
    </div>
  );
};
export default PreLoader;
// loaded
