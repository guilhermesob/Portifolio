import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>Seu Nome</h1>
        <p>Cybersecurity Specialist | Software Engineer | Cloud Engineer</p>
      </header>
      <section className="skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Cybersecurity Strategy</li>
          <li>Web Application Development</li>
          <li>Cloud Infrastructure (AWS, Azure)</li>
          <li>Front-end Development (React)</li>
          <li>Data Analysis and Visualization</li>
          <li>Network Security</li>
          <li>Game Development</li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projetos Destacados</h2>
        {/* Lista de projetos com detalhes */}
      </section>
      <section className="experience">
        <h2>Experiência Profissional</h2>
        {/* Detalhes sobre suas funções e realizações anteriores */}
      </section>
      <section className="education">
        <h2>Formação Acadêmica</h2>
        {/* Detalhes sobre suas qualificações educacionais */}
      </section>
      <section className="contact">
        <h2>Contato</h2>
        <p>Email: seuemail@example.com</p>
        <p>LinkedIn: linkedin.com/in/seuperfil</p>
        <p>GitHub: github.com/seuusername</p>
      </section>
      <footer>
        <p>Desenvolvido com React | Seu Nome &copy; 2023</p>
      </footer>
    </div>
  );
};

export default Portfolio;
