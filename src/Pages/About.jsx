import MacysParadeImg from "../assets/MacysParadeimg.jpg";

export default function About() {
  return (
    <div className="aboutSection ">
      <h1>About Me</h1>

      <div className="aboutContent">
        <img
          className="MacysParadeimg"
          src={MacysParadeImg}
          alt="Me and my folks in front of the Macy's Thanksgiving Day Parade Sinclair Oil Float"
        />

        <p className="aboutMe">
        I’m a passionate coder who loves bringing ideas to life through creative and innovative web applications. 
        There’s nothing quite like the thrill of solving a tricky problem or seeing a project come together from scratch! 
        But when I’m not deep in code, you’ll probably find me curled up with a good book, completely lost in another world, 
        or watching a spine-tingling horror movie (the scarier, the better!). 
        Family is everything to me, and I cherish every moment spent with them—whether it’s sharing laughs, making memories, or just enjoying life’s little moments together.
        Having lived in Indiana and Utah and now thriving in sunny Florida, I’ve gained a unique perspective that shapes how I approach challenges, creativity, and growth. 
        Whether it’s in coding, storytelling, or life itself, I believe every new experience is an opportunity to learn, grow, and create something amazing!
        </p>
      </div>
    </div>
  );
}