import "./Home.css";
import money from "../../img/money.png";
import LinkButton from "../../Components/LinkButton/LinkButton";

function Home() {
  return (
    <section className="home_container">
      <h1>
        Bem-vindo ao <span>Project Manager</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto"/>
      <img src={money} alt="Project Manager" />
    </section>
  );
}

export default Home;
