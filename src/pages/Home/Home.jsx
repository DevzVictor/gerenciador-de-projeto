import "./Home.css";
import money from "../../img/money.png";

function Home() {
  return (
    <section className="home_container">
      <h1>
        Bem-vindo ao <span>Project Manager</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <a href="/">Criar Projeto</a>
      <img src={money} alt="Project Manager" />
    </section>
  );
}

export default Home;
