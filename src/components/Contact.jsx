import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    

    
    setSubmitted(true);

   
  };

  const handleThankYou = () => {
    alert("Thank you for reaching out to me, will get back to you shortly..");
  };

  return (
    <div className="lg:px-12 px-4 contact">
      <div className="mb-20 text-center">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Get In Touch
        </h2>
        <p className="mt-5">
          Please fill below details to reach out to me{" "}
        </p>
      </div>
      <div className="md:w-2/3 mx-auto mb-20">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-black rounded-lg p-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-black rounded-lg p-2 mt-2 w-full"
              />
            </div>
          </div>
          

          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                Email
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="block border border-black rounded-lg p-2 mt-2 w-full"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Phone number
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="block border border-black rounded-lg p-2 mt-2 w-full"
              />
            </div>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="firstname"
              className="text-base text-headingcolor w-full"
            >
              Choose a topic
            </label>
            <select name="topic" id="topic" className="block border border-black rounded-lg py-2 px-2 mt-2 w-full">
                <option value="1">Select one...</option>
                <option value="2">Web Design</option>
                <option value="3">UX/UI Design</option>
                <option value="4">Web Development</option>
                <option value="5">Graphic Design</option>
            </select>
          </div>
          <div className="w-full mb-8">
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full"
            >
              Message
            </label>
            <textarea name="message" id="message" cols="30" rows="5" className="block border border-black rounded-lg py-2 px-2 mt-2 w-full"></textarea>
          </div>
          <div className="w-full mb-8">
            <input type="checkbox" name="agree" id="agree"/>
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full ml-3"
            >
             I accept the terms
            </label>
          </div>


          <div className="w-36 mx-auto border rounded-lg">
            <input
              type="submit"
              value="Submit"
              className="btn-primary py-3 bg-teal-500 px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full"
            />
          </div>
        </form>

        {submitted && handleThankYou()}
      </div>
    </div>
  );
};

export default Contact;
