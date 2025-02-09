import Nav from "./Nav";

import headerimg from "../assets/HEADER.jpg";

function Header() {
  console.log(headerimg);

  return (
    <header>
      <img src={headerimg} alt="header" />
      <h1>Nicole Barger</h1>
      <Nav />
    </header>
  );
}

export default Header;