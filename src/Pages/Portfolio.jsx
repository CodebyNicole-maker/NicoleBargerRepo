import Project from "../components/Project";
import ColorPaletteGenartorimg from "../assets/ColorPaletteGenartor.jpg";
import readmeimg from "../assets/readmeimg.jpg";
import empimg from "../assets/empimg.jpg";
import vehicleimg from "../assets/vehicleimg.jpg";
import portfolioimg from "../assets/portfolioimg.jpg";
import revealimg from "../assets/revealimg.jpg";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Color Palette Generator",
    link: "https://github.com/Devilwife/Color-Code-Palette",
    image: ColorPaletteGenartorimg, // Use the imported variable here
  },
  {
    title: "Fragile-Desktop",
    link: "https://github.com/Devilwife/fragile.desktop",
    image: readmeimg, // Use the imported variable here
  },
  {
    title: "Workforce-Watcher",
    link: "https://github.com/Devilwife/Workforce-Watcher",
    image: empimg, // Use the imported variable here
  },
  {
    title: "Vehicle Builder",
    link: "https://github.com/Liv-5/Vehicle-Builder-Challenge",
    image: vehicleimg, // Use the imported variable here
  },
  {
    title: "Portfolio Project",
    link: "https://github.com/Liv-5/Portfolio-Project",
    image: portfolioimg, // Use the imported variable here
  },
  {
    title: "Reveal",
    link: "https://github.com/Liv-5/Reveal",
    image: revealimg, // Use the imported variable here
  },
];
export default function Portfolio({ title, link, image }) {
  const navigate = useNavigate();
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container pcontainer">
      <h1 className="port">Portfolio</h1>

      <div className="pcards">
        {projects.map((p) => (
          <div className="pcard">
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