import React from "react";

export default function Nav() {
  const navLinks = [
    { name: "About", link: "/" },
    { name: "Portfolio", link: "/Portfolio" },
    { name: "Contact", link: "/Contact" },
    { name: "Resume", link: "/Resume" },
  ];

  return (
    <nav>
      <section className="Nav navbar navbar-expand-lg">
        {navLinks.map((linkItem) => (
          <div className="navLink" key={linkItem.name}>
            <a href={linkItem.link}>{linkItem.name}</a>
          </div>
        ))}
      </section>
    </nav>
  );
}
