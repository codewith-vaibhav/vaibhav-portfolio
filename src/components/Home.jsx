import banner from "../assets/vaibhav_banner1.jpeg";

const Home = () => {
  return (
    <div className="mt-20 bg-white" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full">
          <img
            src={banner}
            alt=""
            className="w-full border-orange-400"
            style={{ width: '100%', height:'400px', borderRadius: '5%' }}
          />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Hey, I am Vaibhav</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            I create <span className="text-teal-500">Web Designs</span> and brand experience
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            An enthusiastic Engineer having more than 3 years of experience in Front-End Development.
          </p>
          {/* Link to download resume */}
          <a href="/cv.vaibhav.pdf" download="cv.vaibhav.pdf" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
            Download CV
          </a>
        </div>
        {/* right side */}
      </div>
    </div>
  );
};

export default Home;
