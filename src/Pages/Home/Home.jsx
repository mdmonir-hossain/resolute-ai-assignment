import { Link } from "react-router-dom";


const Home = () => {
    return (
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://resoluteaisoftware.in/static/media/slider.aed0e2c7d91bc110c1ce.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">face genie</h1>
              <p className="mb-5">
                Safe, Secure, Hygienic, Automated & Touchless From Dynamic to
                Compact and Pro, we utilize the benifits of AI to the furthest
                extent possible to give you the competitive edge
              </p>
              <Link to='/video'>
                <button className="btn btn-primary">Watch Video</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;