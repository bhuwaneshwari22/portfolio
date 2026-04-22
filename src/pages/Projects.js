const projects = [
  {
    id: "01",
    name: "Multilingual Fake News Detection",
    description:
      "An AI system that detects fake news in both English and Telugu using mBERT and Explainable AI (LIME). Achieved 100% accuracy on test data with token-level explanations.",
    tags: ["Python", "mBERT", "Machine Learning", "NLP", "LIME"],
    github: "https://github.com/bhuwaneshwari22/fake-news-detection",
  },
  {
    id: "02",
    name: "Utility Bill Management System",
    description:
      "A Java GUI desktop application to manage utility bills like electricity, water, gas and internet. Features add, edit, delete, search, filter, sort and paid/unpaid tracking.",
    tags: ["Java", "Swing", "AWT", "OOP"],
    github: "https://github.com/bhuwaneshwari22/utility-bill-management",
  },
  {
    id: "03",
    name: "Form Validator",
    description:
      "An HTML and JavaScript based form validation project that validates user inputs in real time with instant feedback and error messages.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/bhuwaneshwari22/form-validator",
  },
];

function Projects() {
  return (
    <div className="page">
      <div className="projects-header">
        <h1 className="projects-page-title">My Projects</h1>
        <p className="projects-page-subtitle">
          Things I've built — from ideas to working code.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <p className="project-num">PROJECT {project.id}</p>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>

      <footer className="footer">
        © 2026 Ruddarraju Bhuwaneshwari · Built with React
      </footer>
    </div>
  );
}

export default Projects;
