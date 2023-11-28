import { StyledDivDashboard } from "./style";
import { useContext, useEffect } from "react";
import { ContactsContext } from "../../contexts/contactsContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Email é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\d+$/, "Insira um telefone válido")
    .min(11, "Telefone deve conter 11 numeros")
    .max(11, "Telefone deve conter 11 numeros")
    .required("Telefone é obrigatório"),
});

export const Dashboard = () => {
  const { contacts, addContact } = useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function sendForm(data) {
    addContact(data);
    reset();
  }

  useEffect(() => {}, [contacts]);

  return (
    <StyledDivDashboard>
      <header>
        <h1>TP Contatos</h1>
      </header>
      <div className="contactsBox">
        <ul>
          {contacts.map((element) => (
            <li key={element?.codigo} id={element?.codigo}>
              <div className="contactsBox__codeBox">
                <h2>{element?.codigo}</h2>
              </div>
              <div className="contactsBox__infoBox">
                <div className="contactsBox__infoBox__nameEmail">
                  <h3>{element?.nome}</h3>
                  <p>{element?.email}</p>
                </div>
                <div className="contactsBox__phoneBox">
                  <h3>{element?.telefone}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="formBox">
        <div className="formBox__title">
          <h2>Adicione um novo contato!</h2>
        </div>
        <form onSubmit={handleSubmit(sendForm)}>
          <div className="formBox__formField">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              placeholder="Seu nome aqui"
              {...register("nome")}
            />
            <small>{errors.nome?.message}</small>
          </div>
          <div className="formBox__formField">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Seu email aqui"
              {...register("email")}
            />
            <small>{errors.email?.message}</small>
          </div>
          <div className="formBox__formField">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              placeholder="Seu telefone aqui"
              {...register("telefone")}
            />
            <small>{errors.telefone?.message}</small>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </StyledDivDashboard>
  );
};
