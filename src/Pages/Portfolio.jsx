import Project from "../components/Project";
import ColorPaletteGenartorimg from "../assets/ColorPaletteGenartorimg.jpg";
import readmeimg from "../assets/readmeimg.jpg";
import employeetrackingimg from "../asset/employeetrackingimg.jpg";
import vehicleimg from "../assets/vehicleimg.jpg";
import portfolioimg from "../assets/portfolioimg.jpg";
import weatherforecastimg from "../assets/weatherforecastimg.jpg";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Color Palette Generator",
    link: "https://github.com/Devilwife/Color-Code-Palette",
    image: ColorPaletteGenartorimg, // Use the imported variable here
  },
  {
    title: "Fragile.Desktop",
    link: "https://github.com/Devilwife/fragile.desktop",
    image: readmeimg, // Use the imported variable here
  },
  {
    title: "Workforce-Watcher",
    link: "https://github.com/Devilwife/Workforce-Watcher",
    image: employeetrackingimg, // Use the imported variable here
  },
  {
    title: "Reasearch-Rover",
    link: "https://github.com/Devilwife/Research-Rover",
    image: vehicleimg, // Use the imported variable here
  },
  {
    title: "NicoleBargerRepo",
    link: "https://github.com/Devilwife/NicoleBargerRepo",
    image: portfolioimg, // Use the imported variable here
  },
  {
    title: "AtmosphereAlchemy",
    link: "https://github.com/Devilwife/AtmosphereAlchemy",
    image: weatherforecastimg, // Use the imported variable here
  }
];

function Portfolio({ title, link, image }) {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container pcontainer">
      <h1 className="port">Portfolio</h1>

      <div className="pcards">
        {projects.map((p) => (
          <div className="pcard" key={p.title}>
            <h2>{p.title}</h2>
            {/* <img src={p.image} className="projectimg" /> */}
            <a href={p.link}>
              <img src={p.image} className="projectimg" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;