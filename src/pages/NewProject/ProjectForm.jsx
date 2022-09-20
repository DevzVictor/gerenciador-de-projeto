import { useEffect, useState } from "react";

import Input from "../../Components/Form/Input";
import Select from "../../Components/Form/Select";
import SubmitButton from "../../Components/Form/SubmitButton";
import "./ProjectForm.css";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
