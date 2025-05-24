// import video from "../Components/Assets/video.mp4";
import SlideShow from "../SlideShow/SlideShow";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="homeSectionOne">
        <SlideShow />

        <div className="home-container">
          <p>
            Are you looking for a new church family to learn and worship with?
            would love to know more about you and your family. Join us this
            Sunday for worship! We have thousands of congregations worldwide for
            your convenience. If you are in the UK or Ireland, click on church
            directories to find a church near you. The churches of Christ
            welcome you. This is the official page for the Christian Worker
            magazine published by congregations of Christ in the UK.
          </p>
          <p>
            Editors: Trevor Williams and Jon Galloway
            <br />
            Web Developer: Emmanuel Uwujare
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
