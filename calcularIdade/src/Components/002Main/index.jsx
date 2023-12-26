import { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

const isValidDate = (day, month, year) => {
  const inputDia = parseInt(day, 10);
  const inputMes = parseInt(month, 10);
  const inputAno = parseInt(year, 10);

  if (
    inputDia > 0 &&
    inputDia <= 31 &&
    inputMes > 0 &&
    inputMes <= 12 &&
    inputAno <= new Date().getFullYear()
  ) {
    const daysInMonth = new Date(inputAno, inputMes, 0).getDate();
    return inputDia <= daysInMonth;
  }
  return false;
};

export function Conteudo() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [result, setResult] = useState("");
  const [proximoAniversarioResultado, setProximoAniversarioResultado] =
    useState("");
  const [diasVividosResultado, setDiasVividosResultado] = useState("");

  const handleDiaChange = (e) => {
    const value = e.target.value;
    const currentMonth = parseInt(mes, 10);

    const daysInMonth = (mes) => {
      const currentYear = new Date().getFullYear();
      return new Date(currentYear, mes, 0).getDate();
    };

    if (
      value === "" ||
      (parseInt(value) >= 1 && parseInt(value) <= daysInMonth(currentMonth))
    ) {
      setDia(value);
    }
  };

  const handleMesChange = (e) => {
    const value = e.target.value;

    if (value === "" || (parseInt(value) >= 1 && parseInt(value) <= 12)) {
      setMes(value);
    }
  };

  function handleCalcular() {
    // O valor 10 ta convertendo o valor para um número inteiro usando a base decimal.
    const inputDia = parseInt(dia, 10);
    const inputMes = parseInt(mes, 10);
    const inputAno = parseInt(ano, 10);

    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const isValido = isValidDate(dia, mes, ano);

    if (isValido) {
      const diasNoMes = new Date(inputAno, inputMes, 0).getDate();
      let idadeAno = anoAtual - inputAno;
      let idadeMes = mesAtual - inputMes;
      let idadeDia = diaAtual - inputDia;

      if (idadeDia < 0) {
        idadeMes -= 1;
        const ultimoDiaMesPassado = new Date(
          inputAno,
          inputMes - 1,
          0
        ).getDate();
        idadeDia = ultimoDiaMesPassado - inputDia + diaAtual;
      }

      if (idadeMes < 0) {
        idadeAno -= 1;
        idadeMes += 12;
      }

      setResult(`Idade: ${idadeAno} anos, ${idadeMes} meses, ${idadeDia} dias`);

      // Próximo aniversário
      const proximoAniversario = new Date(anoAtual + 1, inputMes - 1, inputDia);
      const hoje = new Date();
      const diferencaTempo = proximoAniversario - hoje;
      const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24));

      setProximoAniversarioResultado(
        `Faltam ${diferencaDias} dias para o próximo aniversário.`
      );

      // Dias vividos
      const aniversario = new Date(inputAno, inputMes - 1, inputDia);
      const tempoVivido = hoje - aniversario;
      const diasVividos = Math.floor(tempoVivido / (1000 * 60 * 60 * 24));

      setDiasVividosResultado(`Você viveu ${diasVividos} dias até hoje.`);
    } else {
      setResult("Por favor, insira uma data válida.");
      setProximoAniversarioResultado("");
      setDiasVividosResultado("");
    }
  }

  const handleClear = () => {
    setDia("");
    setMes("");
    setAno("");
    setResult("");
    setProximoAniversarioResultado("");
    setDiasVividosResultado("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleCalcular();
      console.log("Calculei");
    }
  };

  return (
    <main className="conteudo">
      <div className="conteudo__form">
        <label className="conteudo__form__label" htmlFor="mes">
          <input
            autoComplete="off"
            id="mes"
            type="number"
            className="conteudo__form__label--input"
            value={mes}
            onChange={handleMesChange}
            onKeyDown={handleEnter}
          />
          <FaInfoCircle />
          <span className="conteudo__form__label--tooltip">
            Mês em que você nasceu
            <p className="conteudo__form__label--tooltip--ex">
              Exemplo: 1; 2; 3; 4 ...
            </p>
          </span>
        </label>
        <label className="conteudo__form__label" htmlFor="dia">
          <input
            autoComplete="off"
            id="dia"
            type="number"
            className="conteudo__form__label--input"
            value={dia}
            onChange={handleDiaChange}
            onKeyDown={handleEnter}
          />
          <FaInfoCircle />
          <span className="conteudo__form__label--tooltip">
            Dia em que você nasceu{" "}
            <p className="conteudo__form__label--tooltip--ex">
              Exemplo: 1; 2; 3; 4 ...
            </p>
          </span>
        </label>
        <label className="conteudo__form__label" htmlFor="ano">
          <input
            autoComplete="off"
            id="ano"
            type="number"
            className="conteudo__form__label--input"
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            max={new Date().getFullYear()}
            onKeyDown={handleEnter}
          />
          <FaInfoCircle />
          <span className="conteudo__form__label--tooltip">
            Ano em que você nasceu
            <p className="conteudo__form__label--tooltip--ex">
              Exemplo: 2004; 1998;
            </p>
          </span>
        </label>
      </div>
      <div className="conteudo__form__button">
        <button
          className="conteudo__form__button--botao"
          onClick={handleCalcular}
        >
          Calcular
        </button>
        <button
          className="conteudo__form__button--botao-limpar"
          onClick={handleClear}
        >
          Limpar
        </button>
      </div>
      <div className="conteudo__form__resultados">
        {result && <p>{result}</p>}
        {proximoAniversarioResultado && <p>{proximoAniversarioResultado}</p>}
        {diasVividosResultado && <p>{diasVividosResultado}</p>}
      </div>
    </main>
  );
}
