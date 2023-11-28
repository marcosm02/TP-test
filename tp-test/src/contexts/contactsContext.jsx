import { createContext, useState } from "react";

export const ContactsContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ContactsProvider = ({ children }) => {
  const contactsList = [
    {
      codigo: "001001",
      nome: "Jose da Silva",
      email: "jose@email.com",
      telefone: "(11) 99901-1234",
    },
    {
      codigo: "001002",
      nome: "Marcio de Souza",
      email: "marcio@email.com",
      telefone: "(11) 99902-1234",
    },
    {
      codigo: "001003",
      nome: "Mauricio Cruz",
      email: "mauricio@email.com",
      telefone: "(11) 99903-1234",
    },
    {
      codigo: "001004",
      nome: "Fabiana Dias",
      email: "fabiana@email.com",
      telefone: "(11) 99904-1234",
    },
  ];

  const [contacts, setContacts] = useState(contactsList);

  function addContact(data) {
    const codes = contacts.map((el) => parseInt(el.codigo, 10));
    const newCode = (Math.max(...codes) + 1).toString().padStart(6, "0");
    const formatedPhone = `(${data.telefone.slice(0, 2)}) ${data.telefone.slice(
      2,
      7
    )}-${data.telefone.slice(7, 11)}`;
    const newData = {
      codigo: newCode,
      nome: data.nome,
      email: data.email,
      telefone: formatedPhone,
    };
    setContacts([...contacts, newData]);
  }

  return (
    <ContactsContext.Provider value={{ contacts, setContacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
