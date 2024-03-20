import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <div className="lg:mx-12 mx-4 my-32" id="portfolio">
      <div className="mb-20 flex flex-col sm:flex-row md:items-center justify-between gap-5">
        <div>
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            My Projects
          </h2>
        </div>
      </div>

      {/* sample text remove lorem */}
      
      {/* project card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map(project => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <div className="shadow-xl rounded-lg bottom-1">
              <img className="h-96 w-full" src={project.image} alt="" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-headingcolor">{project.name}</h3>
                <p className="text-teal-500 mb-4">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
