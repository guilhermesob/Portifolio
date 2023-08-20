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
          <li>Cloud Infrastructure (AWS, Azure, GCP)</li>
          <li>Front-end Development (React)</li>
          <li>Data Analysis and Visualization</li>
          <li>Network Security</li>
          <li>Game Development</li>
          <li>Mobile Development</li>
          <li>Software development</li>
          <li>Ruby on Rails</li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projetos Destacados</h2>
        {/* Lista de projetos com detalhes
cd store management systems 
movie list management systems (HTML5, CSS, Javascript, PHP)
pokedex (HTML5, CSS, Javascript)
pokemon clone game
space invaders clone game
snake game clone (Java, python, HTML5, CSS)
 */}
      </section>
      <section className="experience">
        <h2>Experiência Profissional</h2>
        {/* Detalhes sobre suas funções e realizações anteriores
Game Developer
Graphic design and illustrator 
Computer Technician and Network Support 
 */}
      </section>
      <section className="education">
        <h2>Formação Acadêmica</h2>
        {/* Detalhes sobre suas qualificações educacionais 
*/It technician 
        Analysis and systems development }
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
