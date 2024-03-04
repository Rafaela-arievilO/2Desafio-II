import "./styles.css";
import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");

  setTimeout(() => {
    setDesconto(
      "Parabéns Cliente!! Nessa semana você ganha R$ 15,00 de desconto em compras a cima de R$ 100,00."
    );
  }, 8000);

  //TENTEI COLOCAR UMA IMAGEM DO ITEM EM BAIXO DO PREÇO,
  // MAS NÃO CONSEGUI. TENTEI COLOCAR O
  //LINK DA IMAGEM (IMG SRC) E TENTEI CRIAR UM CONST MAS SEM SUCESSO.

  const Orquídea = () => {
    setItem("Mini Orquídea");
    setPreco("R$59.90");
  };

  const DozeHoras = () => {
    setItem("  Doze Horas ");
    setPreco("R$29.90");
  };

  const Cactos = () => {
    setItem("    Cactos   ");
    setPreco("R$19.90");
  };

  return (
    <>
      <div>
        <h1>Amor com Flor</h1>
      </div>
      <h2>{item}</h2>
      <h3>Preço: {preco}</h3>
      <p>{desconto}</p>
      <section>
        <button onClick={Orquídea}>Mini Orquídea</button>
        <button onClick={DozeHoras}> Doze Horas </button>
        <button onClick={Cactos}> Cactos </button>
      </section>
    </>
  );
}
