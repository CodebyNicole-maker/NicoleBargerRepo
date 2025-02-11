import React from "react";
import ColorPaletteGenartorimg from "../assets/ColorPaletteGenartorimg.png";
import readmeimg from "../assets/readmeimg.jpg";
import employeetrackingimg from "../assets/employeetrackingimg.jpg";
import vehicleimg from "../assets/vehicleimg.jpg";
import Portfolioimg from "../assets/Portfolioimg.png";
import weatherforecastimg from "../assets/weatherforecastimg.jpg";

const projects = [
  {
    title: "Color Palette Generator",
    link: "https://github.com/CodebyNicole-maker/Color-Code-Palette",
    image: ColorPaletteGenartorimg,
  },
  {
    title: "Fragile.Desktop",
    link: "https://github.com/CodebyNicole-maker/fragile.desktop",
    image: readmeimg,
  },
  {
    title: "Workforce-Watcher",
    link: "https://github.com/CodebyNicole-maker/Workforce-Watcher",
    image: employeetrackingimg,
  },
  {
    title: "Reasearch-Rover",
    link: "https://github.com/CodebyNicole-maker/Research-Rover",
    image: vehicleimg,
  },
  {
    title: "Nicole-Barger-Repo",
    link: "https://github.com/CodebyNicole-maker/NicoleBargerRepo",
    image: Portfolioimg,
  },
  {
    title: "Atmosphere-Alchemy",
    link: "https://github.com/CodebyNicole-maker/AtmosphereAlchemy",
    image: weatherforecastimg,
  },
];

export default function Portfolio() {
  return (
    <div className="container pcontainer">
      <h1 className="port">Portfolio</h1>
      <div className="pcards">
        {projects.map((project) => (
          <div className="pcard" key={project.title}>
            <h2>{project.title}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="projectimg"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
