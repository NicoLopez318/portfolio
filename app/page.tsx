import "./content.css";

const services = [
  "Software development guidance",
  "Database and system design",
  "Cloud, networking, and IT solutions",
  "Manuscript and documentation feedback",
  "Diagrams, testing, and evaluation",
  "Defense and presentation coaching",
];

const offerings = [
  {
    number: "01",
    type: "SYSTEM & SOFTWARE SUPPORT",
    title: "Plan and build your system",
    description:
      "Get guidance on requirements, system design, and development for web, mobile, desktop, cloud, or custom projects.",
    tags: ["Web, mobile, desktop", "Cloud and networking", "System design"],
    linkText: "Discuss technical support",
  },
  {
    number: "02",
    type: "DOCUMENTATION & DEFENSE",
    title: "Prepare a clear presentation",
    description:
      "Receive feedback on your manuscript, diagrams, documentation, testing plan, and defense presentation.",
    tags: ["Documentation feedback", "Testing", "Defense coaching"],
    linkText: "Discuss project coaching",
  },
];

export default function Home() {
  return (
    <div className="site-shell" id="home">
      <section className="hero section-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Capstone season<br /><span>is here.</span><br />Let's get started.</h1>
          <p className="hero-intro">
            Need a hand with your IT capstone? We offer commissioned technical guidance
            and project coaching, from system planning through presentation prep.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Send us a message <span aria-hidden="true">↘</span></a>
            <a className="text-link" href="#services">See how we can help <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-note">Student-friendly support · IT capstone projects</p>
        </div>

        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>

      <section className="about-section section-wrap" id="about" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">01 — Capstone support</p>
          <h2 id="about-title">Your idea,<br /><span>well supported.</span></h2>
        </div>
        <div className="about-copy">
          <p className="lead-copy">Have a system idea but need help getting started?</p>
          <p>
            We can help you organize your requirements, think through a suitable
            design, and prepare for implementation. You stay in charge of your
            project and its submissions; we provide guidance, review, and coaching
            to help you move forward with confidence.
          </p>
          <a className="text-link" href="#contact">Tell us where you are stuck <span aria-hidden="true">↘</span></a>
        </div>
      </section>

      <section className="skills-section" id="services" aria-labelledby="services-title">
        <div className="section-wrap skills-inner">
          <div className="section-heading">
            <p className="eyebrow">02 — How we can help</p>
            <h2 id="services-title">Support from idea<br /><span>to presentation.</span></h2>
          </div>
          <div className="skills-copy">
            <p>Choose the kind of technical or presentation support that fits your capstone stage.</p>
            <ul className="skill-list" aria-label="Capstone support services">
              {services.map((service, index) => (
                <li key={service}><span>0{index + 1}</span>{service}</li>
              ))}
            </ul>
            <p className="skills-footnote">You remain the author and presenter of your academic work.</p>
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading">
          <div className="section-heading">
            <p className="eyebrow">03 — Commission options</p>
            <h2 id="projects-title">Practical help for<br /><span>your capstone.</span></h2>
          </div>
          <p className="projects-intro">From system planning to defense preparation, we can tailor support to your project and timeline.</p>
        </div>
        <div className="project-grid">
          {offerings.map((offering) => (
            <article className="project-card" key={offering.number}>
              <div className="project-card-top"><span>{offering.type}</span><span>{offering.number}</span></div>
              <div className={`project-art ${offering.number === "01" ? "project-art-website" : "project-art-app"}`} aria-hidden="true">
                <div className="preview-window">
                  <div className="preview-topbar"><i /><i /><i /><span /></div>
                  {offering.number === "01" ? (
                    <div className="preview-landing">
                      <div className="preview-nav"><b>N<span>.</span></b><i /><i /><i /></div>
                      <div className="preview-landing-body">
                        <div className="preview-copy"><i /><b /><b /><span /></div>
                        <div className="preview-photo" />
                      </div>
                    </div>
                  ) : (
                    <div className="preview-dashboard">
                      <div className="preview-sidebar"><b>N<span>.</span></b><i /><i /><i /><i /></div>
                      <div className="preview-main">
                        <div className="preview-dash-heading"><b /><span /></div>
                        <div className="preview-stat-row"><i /><i /><i /></div>
                        <div className="preview-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <h3>{offering.title}</h3>
              <p className="project-description">{offering.description}</p>
              <ul className="tag-list" aria-label="Project types">
                {offering.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="project-link" href="#contact">{offering.linkText} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">04 — Get in touch</p>
          <h2 id="contact-title">Need capstone help?<br /><span>Send us a message.</span></h2>
          <p>Tell us your topic, what you need help with, and your timeline. We will get back to you to discuss the next steps.</p>
          <a
            className="button button-light"
            href="https://www.facebook.com/share/1RvCupNt3p/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send us a message <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">N<span>.</span></a>
        <p>Capstone guidance and technical support · 2026</p>
        <a className="back-to-top" href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
