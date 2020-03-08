import React from "react";

const TitlePureFunction = ({ name, lastName }) => {
  return <h1>Olá {`${name} ${lastName}`}!</h1>;
};

TitlePureFunction.defaultProps = {
  name: "Desconhecido",
  lastName: "Sem sobrenome"
};

export default TitlePureFunction;
