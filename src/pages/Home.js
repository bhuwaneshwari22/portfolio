import profile from "../assets/profile.jpg";

function Home() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">
            Ruddarraju<br /><span>Bhuwaneshwari</span>
          </h1>
          <p className="hero-tagline">
            A passionate Computer Science student specializing in Artificial Intelligence,
            building intelligent solutions and exploring the future of technology.
          </p>
        </div>
        <div className="hero-img-wrap">
          <img src={profile} alt="Profile" className="hero-img" />
        </div>
      </section>

      <div style={{display:'flex', gap:'1rem', marginTop:'1.5rem'}}>
  <a 
    href="https://github.com/bhuwaneshwari22" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="github-btn"
    style={{fontSize:'1rem', padding:'0.8rem 1.8rem'}}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
    GitHub Profile
  </a>
  <a 
    href="#/projects"
    className="github-btn"
    style={{fontSize:'1rem', padding:'0.8rem 1.8rem', background:'var(--accent)', color:'white', border:'none'}}
  >
    View Projects →
  </a>
</div>



      {/* ABOUT ME */}
      <section className="section">
        <p className="section-title">01 — About Me</p>
        <div className="about-card">
          Hi! I'm Bhuwaneshwari, a Computer Science student at Mahindra University with a strong
          interest in Artificial Intelligence and Machine Learning. I enjoy building projects that
          solve real-world problems and I'm always eager to learn new technologies. I believe in
          continuous growth and bringing creative ideas to life through code.
        </div>
      </section>

      {/* RESEARCH INTERESTS */}
      <section className="section">
        <p className="section-title">02 — Research Interests</p>
        <div className="interests-grid">
          <div className="interest-chip"><span className="icon">🤖</span> Artificial Intelligence</div>
          <div className="interest-chip"><span className="icon">🧠</span> Machine Learning</div>
          <div className="interest-chip"><span className="icon">💬</span> Natural Language Processing</div>
          <div className="interest-chip"><span className="icon">💻</span> Web Development</div>
          <div className="interest-chip"><span className="icon">🔐</span> Cyber Security</div>
          <div className="interest-chip"><span className="icon">📊</span> Data Science</div>
          
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <p className="section-title">03 — Skills</p>
        <div className="skills-grid">
          {["Python", "Java", "C", "Deep Learning", "NLP", "OOP",
           "Machine Learning", "SQL", "GitHub", "Data Structures"].map(skill => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* PERSONAL DETAILS */}
      <section className="section">
        <p className="section-title">04 — Personal Details</p>
        <div className="details-card">
          <div className="detail-row">
            <span className="detail-icon">👤</span>
            <span className="detail-label">Full Name</span>
            <span className="detail-value">Ruddarraju Bhuwaneshwari</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">📞</span>
            <span className="detail-label">Phone</span>
            <span className="detail-value">+91 6305677593</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">📧</span>
            <span className="detail-label">Personal Email</span>
            <span className="detail-value">ruddarrajubhuwaneshwari@gmail.com</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">🎓</span>
            <span className="detail-label">College Email</span>
            <span className="detail-value">se23umcs052@mahindruniversity.edu.in</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">🏫</span>
            <span className="detail-label">University</span>
            <span className="detail-value">Mahindra University</span>
          </div>
          <div className="detail-row">
            <span className="detail-icon">📚</span>
            <span className="detail-label">Degree</span>
            <span className="detail-value">B.Tech — Computer Science Engineering</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Ruddarraju Bhuwaneshwari · Built with React
      </footer>
    </div>
  );
}

export default Home;
