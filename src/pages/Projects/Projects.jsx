import { useLocation } from "react-router-dom";

import Message from "../../Components/Messages/Message";

function Projects() {
  const location = useLocation();
  let message = "";
  if(location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      <Message type="success" msg="sucesso" />
    </div>
  );
}

export default Projects;
