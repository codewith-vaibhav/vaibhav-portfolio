const skills = [
    {
      id: 1,
      name: "BASICS",
      description:
        "HTML5, CSS3, Javascript, jQuery",
      image: "src/assets/skills-1.png",
    },
    {
      id: 2,
      name: "FRAMEWORK",
      description:
        "React.JS",
      image: "src/assets/skills-1.png",
    },

    {
      id: 3,
      name: "STYLE",
      description:
        "Bootstrap, Tailwind CSS",
      image: "src/assets/skills-1.png",
    },

    {
      id: 4,
      name: "DESIGN",
      description:
        "Figma, Adobe XD, Photoshop, Balsamiq",
      image: "src/assets/skills-1.png",
    },
    {
      id: 5,
      name: "CMS TOOLS",
      description:
        "OpenText, AEM (Adobe Experience Management)",
      image: "src/assets/skills-1.png",
    },

    {
      id: 6,
      name: "VERSION CONTROL",
      description:
        "Git & Github",
      image: "src/assets/skills-1.png",
    },

    {
      id: 7,
      name: "DATABASE",
      description:
        "MySql",
      image: "src/assets/skills-1.png",
    },

   
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">What I Know..</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-white p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300 shadow-xl">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p className="text-teal-500">{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
