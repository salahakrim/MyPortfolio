import { useContext } from "react";
// import Poster from "../../public/img/bg-video-poster.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);

  const backgroundImageStyle = {
    backgroundImage: `url("/img/background.svg")`,
  };
  return (
    <section
      id="home"
      className={`${nav === "home" ? "active" : ""}`}
      style={backgroundImageStyle}
    >
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {/* {video && (
          <video className="bg-video" autoPlay loop muted poster={Poster}>
            <source
              src={require("../../public/img/video.mp4")}
              type="video/mp4"
            />
            <source
              src={require("../../public/img/video.mp4")}
              type="video/ogg"
            />
          </video>
        )} */}
        {/* <div className="left-image-container">
          <img
            className="leftimagepicture rounded-md w-50 h-10" // Adjust the classes to your preference
            src={"img/salah-background.png"}
            alt="myPhoto"
          />
        </div> */}
        <div className="main-text" id="selector">
          <h3>Hi there !</h3>
          <AnimationText />
          <p>
            {`I'm`} a dedicated Freelance Full-stack Developer, hailing from the
            vibrant city of Casablanca, Morocco. My passion lies in creating
            captivating and user-friendly web applications, meticulously
            constructed with code that harmoniously blends functionality and
            design. I specialize in crafting digital experiences that leave a
            lasting impression.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;
