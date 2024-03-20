import logo from '../assets/v_logo.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-12 px-4">
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20'>
        <a href="/"><img width={50} height={50} src={logo} alt="" /></a>
        <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
          <a
            href="#home"
            className="block text-teal-500 hover:text-teal-500 py-2 px-4"
          >
            Home
          </a>
          
          <a href="#skills" className="block  hover:text-teal-500 py-2 px-4">
          Expertise
          </a>

          <a href="#portfolio" className="block  hover:text-teal-500 py-2 px-4">
            Portfolio
          </a>
        </div>
        <div className='flex items-center gap-4 ml-4'>
          <a href="https://www.instagram.com/annonymous.09/?igsh=eHhkZDAydTYybmpp" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-teal-500' />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-gharpankar-5b67562ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-teal-500' />
          </a>
          <a href="https://github.com/codewith-vaibhav" target="_blank" rel="noopener noreferrer">
            <FaGithub className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-teal-500' />
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
