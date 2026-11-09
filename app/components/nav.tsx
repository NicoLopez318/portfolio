import Link from "next/link";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Nav() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand-mark" href="#home" aria-label="Nico, back to top">N<span>.</span></Link>
          <nav className="main-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link href={href} key={label}>{label}</Link>
            ))}
          </nav>
          <Link className="header-contact" href="#contact">Ask about support <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
    </>
  );
}
