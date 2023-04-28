import React, { useEffect, useState } from "react";
import BloodDrop from "./components/Blood";
import {
  DivP,
  Div1,
  Div2,
  Footer,
  Div3,
  Span1,
  Div4,
  Button1,
  Div5,
} from "./assets/styles/AppCSS";
import Calendary from "./components/Calendar";
import Menssagem from "./components/Menssagem";
import Style from "../src/App.css?";

const App = () => {
  const [doador, setDoardor] = useState(true);
  const [calendario, setcalendario] = useState(false);
  const [data, setdata] = useState(false);
  const [message, setMessage] = useState(false);
  const [quetionario, setquestionario] = useState(false);
  const [genero, setgenero] = useState(false);
  const [dataFinal, setDataFinal] = useState("");
  const [descanso, setDescanso] = useState(null);
  const [prioridade, setPrioridade] = useState(false);
  const [validacao1, setvalidacao1] = useState(false);
  const [validacao2, setvalidacao2] = useState(false);
  const [validacao3, setvalidacao3] = useState(false);
  const [validacao4, setvalidacao4] = useState(false);
  const [validacao5, setvalidacao5] = useState(false);
  const [validacao6, setvalidacao6] = useState(false);
  const [validacao7, setvalidacao7] = useState(false);
  const [title, setTitle] = useState("");
  const [typemessage, setTypemessage] = useState("");
  const [idade, setIdade] = useState(null);

  useEffect(() => {
    Buttons();
  }, []);
  function validarData(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia);
    return (
      data.getDate() == dia &&
      data.getMonth() == mes - 1 &&
      data.getFullYear() == ano
    );
  }

  function Buttons() {
    setTimeout(() => {
      const btn1 = document.getElementById("btn1");
      const btn2 = document.getElementById("btn2");

      btn1.addEventListener("click", () => {
        setDoardor(false);
        setdata(true);
      });
      btn2.addEventListener("click", () => {
        setDoardor(false);
        setgenero(true);
      });
    }, 500);
  }

  async function pegarData() {
    const dia = document.getElementsByName("dia")[0].value;
    const mes = document.getElementsByName("mes")[0].value;
    const ano = document.getElementsByName("ano")[0].value;
    const now = new Date();
    const yearNow = now.getFullYear();

    if (ano > yearNow) {
      await setTitle("Verificação de data");
      await setTypemessage("Ano invalido!");
      setMessage(true);
      setgenero(false);
      return typemessage, title;
    } else if (validarData(dia, mes, ano)) {
      const DataDoacao = `${ano}-${mes}-${dia}`;
      const VerificaDataDoacao = new Date(DataDoacao);
      if (VerificaDataDoacao > now) {
        setTitle("Bug na Matrix");
        setTypemessage(
          "Viajante no tempo detectado, acionando protocolo 191..."
        );
        setMessage(true);
        setgenero(false);
        setTimeout(() => {
          setTitle("Ta esperando o que?");
          setTypemessage("Coloca uma data válida");
        }, 5000);
        return;
      }
      setDataFinal(DataDoacao);
      setMessage(false);
      setgenero(true);
      setdata(false);
      return dataFinal;
    } else {
      setMessage(true);
      setTitle("Verificação de data");
      setTypemessage("Data invalida!");
      setgenero(false);
    }
  }
  function generoGet(event) {
    event.preventDefault();
    const genero = document.querySelectorAll("input[name='genero']");
    var generoEscolhido = "";
    var soma = 0;

    genero.forEach((check) => {
      if (check.checked) {
        generoEscolhido = check.value;

        if (generoEscolhido == "feminino") {
          soma = 60;
        } else {
          soma = 90;
        }
      }
      setDescanso(soma);
      return soma;
    });

    if (dataFinal == "") {
      const validar = new Date();
      setDataFinal(validar.toISOString().slice(0, 10));
      return dataFinal;
    }

    const dataSoma = new Date(dataFinal);

    dataSoma.setDate(dataSoma.getDate() + soma);

    setDataFinal(dataSoma.toISOString().slice(0, 10));
    setPrioridade(true);
    setgenero(false);
    return dataFinal;
  }
  function impedido1() {
    const option = document.querySelectorAll("input[name='maiorIdade']");
    const input = document.getElementById("input1");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "NAO") {
            setvalidacao1(true);
            input.style.display = "none";
          } else {
            setvalidacao1(false);
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido2() {
    const option = document.querySelectorAll("input[name='diabete']");
    const input = document.getElementById("input1");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "SIM") {
            setvalidacao2(true);
            input.style.display = "none";
          } else {
            setvalidacao2(false);
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido3() {
    const option = document.querySelectorAll("input[name='Getdiabete']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage("Diabeticos dependentes de insulina não podem doar");
            setMessage(true);
            input.style.display = "none";
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido4() {
    const option = document.querySelectorAll("input[name='epilepsia']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "As pessoas com epilepsia geralmente não são elegíveis para doar sangue porque a condição pode estar relacionada a um risco aumentado de convulsões, que podem ser desencadeadas pelo processo de doação de sangue. Além disso, muitos medicamentos usados para tratar a epilepsia podem afetar a coagulação sanguínea e aumentar o risco de sangramento durante a doação."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido5() {
    const option = document.querySelectorAll("input[name='lepra']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "Embora a Hanseníase seja tratável e curável, as pessoas que tiveram a doença podem ter resíduos da bactéria em seu sangue, o que representa um risco para o receptor do sangue."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido6() {
    const option = document.querySelectorAll("input[name='doencaRenal']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "Quem possui algum tipo de doença renal crônica é ilegivel de doação de sangue por conta dos seguinte riscos: Risco aumentado de anemia: A anemia é uma condição médica em que o corpo não produz glóbulos vermelhos suficientes. Pessoas com doença renal crônica têm um risco aumentado de desenvolver anemia, o que pode afetar a qualidade do sangue doado. Uso de medicamentos: Pessoas com doença renal crônica geralmente precisam tomar vários medicamentos para gerenciar sua condição. Alguns desses medicamentos podem afetar a coagulação sanguínea e aumentar o risco de sangramento durante a doação de sangue. Risco de infecções: Pessoas com doença renal crônica têm um risco aumentado de infecções, o que pode afetar a qualidade do sangue doado e representar um risco para o receptor."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido7() {
    const option = document.querySelectorAll("input[name='cancer']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "Isso ocorre porque o câncer é uma condição médica que pode afetar a qualidade do sangue doado e apresentar riscos para o receptor do sangue."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido8() {
    const option = document.querySelectorAll("input[name='AVC']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "O AVC é uma condição em que o suprimento de sangue para uma parte do cérebro é interrompido ou reduzido, o que pode causar danos permanentes ao tecido cerebral. Pessoas com antecedentes de AVC podem ter problemas de coagulação sanguínea e outros problemas de saúde que afetam a qualidade do sangue doado.Além disso, os tratamentos para o AVC, como medicamentos anticoagulantes e antitrombóticos, podem afetar a qualidade do sangue doado e representar um risco para o receptor."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido9() {
    const option = document.querySelectorAll("input[name='hepatite']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setvalidacao3(true);
            input.style.display = "none";
          } else {
            setvalidacao3(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido10() {
    const option = document.querySelectorAll("input[name='Tipohepatite']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "NAO") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "Pessoas com hepatite B e C geralmente não são elegíveis para doação de sangue. Isso ocorre porque a hepatite B e C são doenças infecciosas causadas por vírus que podem ser transmitidos pelo sangue. A transmissão do vírus da hepatite B e C pode ocorrer durante a doação de sangue, colocando o receptor em risco de contrair a doença. Além disso, a hepatite B e C podem afetar a qualidade do sangue doado, tornando-o inapropriado para uso em transfusões sanguíneas."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function impedido11() {
    const option = document.querySelectorAll("input[name='DST']");

    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const input = document.getElementById("input1");

          if (selectedValue == "SIM") {
            setTitle("Impedimento Definitivo");
            setTypemessage(
              "Pessoas com DSTs (Doenças Sexualmente Transmissíveis) são consideradas de risco para a transmissão dessas doenças por meio da doação de sangue. Por esse motivo, em muitos países, incluindo o Brasil, pessoas com DSTs são proibidas de doar sangue."
            );
            input.style.display = "none";
            setMessage(true);
            setTimeout(() => {
              const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
              element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest",
              });
            }, 1000);
          } else {
            setMessage(false);
            input.style.display = "block";
          }
        }
      });
    });
  }
  function verificarIdade() {
    const input = document.getElementById("input1");
    if (idade < 16) {
      setTitle("Impedimento Definitivo");
      setTypemessage("Idade insuficiente para doação");
      setquestionario(false);
      setMessage(true);
      input.style.display = "none";
      setTimeout(() => {
        const element = document.getElementById("MES"); // substitua "myElement" pelo ID do elemento que você deseja rolar
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }, 1000);
    } else {
      setMessage(false);
      input.style.display = "block";
    }
  }
  function pegarIdade(event) {
    const age = event.target.value;
    setIdade(age);
    return idade;
  }
  function quest1() {
    const option = document.querySelectorAll("input[name='gripe']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "SIM") {
            const soma = 15;
            var dataSoma = new Date();
            let verificador;

            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + soma);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + soma);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function quest2() {
    const option = document.querySelectorAll("input[name='diarreia']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma = 7;

          if (selectedValue == "SIM") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function validandoquest1() {
    const option = document.querySelectorAll("input[name='luz']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "SIM") {
            setvalidacao4(true);
          } else {
            setvalidacao4(false);
          }
        }
      });
    });
  }
  function quest3() {
    const option = document.querySelectorAll("input[name='parto']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma1 = 90;
          const Soma2 = 180;

          if (selectedValue == "SIM") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
          if (selectedValue == "NAO") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function validandoquest2() {
    const option = document.querySelectorAll("input[name='estetica']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "SIM") {
            setvalidacao5(true);
          } else {
            setvalidacao5(false);
          }
        }
      });
    });
  }
  function validandoquest3() {
    const option = document.querySelectorAll("input[name='estetica2']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma1 = 183;

          if (selectedValue == "NAO") {
            setvalidacao6(false);
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          } else if (selectedValue == "SIM" || selectedValue == "AMBOS") {
            setvalidacao6(true);
          }
        }
      });
    });
  }
  function quest4() {
    const option = document.querySelectorAll("input[name='estetica3']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma1 = 365;
          const Soma2 = 183;

          if (selectedValue == "SIM") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
          if (selectedValue == "NAO") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function validandoquest4() {
    const option = document.querySelectorAll("input[name='dente']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;

          if (selectedValue == "SIM") {
            setvalidacao7(true);
            return validacao7;
          } else {
            setvalidacao7(false);
            return validacao7;
          }
        }
      });
    });
  }
  function quest6() {
    const option = document.querySelectorAll("input[name='testo']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma = 183;

          if (selectedValue == "SIM") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return dataFinal;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function quest5() {
    const option = document.querySelectorAll("input[name='dente2']");
    option.forEach((radio) => {
      radio.addEventListener("change", (event) => {
        if (event.target.checked) {
          const selectedValue = event.target.value;
          const Soma1 = 3;
          const Soma2 = 7;
          const Soma3 = 6;

          if (selectedValue == "LIMP") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma1);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          } else if (selectedValue == "EXT") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          } else if (selectedValue == "IMP") {
            var dataSoma = new Date();
            let verificador;
            if (dataFinal == "") {
              dataSoma.setDate(dataSoma.getDate() + Soma2);
              setDataFinal(dataSoma.toISOString().slice(0, 10));
              return;
            } else {
              dataSoma = new Date(dataFinal);
              dataSoma.setDate(dataSoma.getDate() + Soma3);
              verificador = new Date(dataFinal);
              if (dataSoma > verificador) {
                setDataFinal(dataSoma.toISOString().slice(0, 10));
                return dataFinal;
              }
            }
          }
        }
      });
    });
  }
  function showData(event) {
    event.preventDefault();
    setquestionario(false);
    setcalendario(true);
  }

  function formCheck() {
    setPrioridade(false);
    setquestionario(true);
  }

  function esqueciData() {
    setdata(false);
    setDoardor(true);
    Buttons();
  }

  return (
    <DivP>
      <Div1>
        <BloodDrop />
      </Div1>
      <Footer>
        <Div2>
          {doador && (
            <div id="div3">
              <span>Você se lembra da ultima vez que doou sangue?</span>
              <Div3 className="d-flex justify-content-around">
                <button id="btn1" className="btn btn-success">
                  SIM
                </button>
                <button id="btn2" className="btn btn-danger">
                  NÂO
                </button>
              </Div3>
            </div>
          )}
          {data && (
            <Div4>
              <h3 className="text-center">Informe a data:</h3>
              <div className="d-flex justify-content-center">
                <input
                  type="number"
                  placeholder="dia"
                  className="form-control"
                  name="dia"
                  max={31}
                />
                <Span1>/</Span1>
                <input
                  type="number"
                  placeholder="mes"
                  className="form-control"
                  name="mes"
                  max={12}
                />
                <Span1>/</Span1>
                <input
                  type="number"
                  placeholder="ano"
                  className="form-control"
                  name="ano"
                  max={2023}
                />
              </div>
              <div className="d-flex flex-column justify-content-center mt-4">
                <button
                  id="btn3"
                  className="btn btn-success w-100 mb-3"
                  onClick={pegarData}
                >
                  Confirmar
                </button>

                <button className="btn btn-danger" onClick={esqueciData}>
                  Esqueci
                </button>
              </div>
            </Div4>
          )}
          {genero && (
            <form onSubmit={generoGet}>
              <Div5>
                <div className="text-center">
                  <h4>Informe seu gênero:</h4>
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      value={"masculino"}
                      name="genero"
                      required
                    />
                    <span>Masculino</span>
                  </div>
                  <div>
                    <input
                      className="form-check-input"
                      type="radio"
                      value={"feminino"}
                      name="genero"
                      required
                    />
                    <span>Feminino</span>
                  </div>

                  <h4 className="mt-3">Por que isso?</h4>
                </div>
                <span>
                  Segundo o Ministério da Saúde do Brasil, mulher após doar
                  sangue deve ter um descanso de 3 meses após a doação para doar
                  novamente e homem 2 meses. <br />
                  Caso tenha mais interece acesse o link.
                  <a href="https://www.gov.br/saude/pt-br/composicao/saes/sangue">
                    Doação de sangue - Ministério da Saúde
                  </a>
                </span>
                <input
                  className="btn btn-success w-100"
                  type="submit"
                  value={"Prosseguir"}
                />
              </Div5>
            </form>
          )}
          {prioridade && (
            <form required onSubmit={formCheck}>
              <div className="d-flex flex-column text-center non">
                <h4>Preencha corretamente (Questionário 1)</h4>
                <div className="d-flex flex-column">
                  <div>
                    <span>Você é maior de idade?</span>
                    <div className="text-center ">
                      <div className="bdbottom mb-2">
                        <input
                          type="radio"
                          name="maiorIdade"
                          className="form-check-input"
                          value={"SIM"}
                          onChange={impedido1}
                          required
                        />
                        <span className="mr-5">SIM</span>
                        <input
                          type="radio"
                          name="maiorIdade"
                          className="form-check-input"
                          value={"NAO"}
                          onChange={impedido1}
                          required
                        />
                        <span>NÃO</span>
                      </div>
                      {validacao1 && (
                        <div className="d-flex flex-column text-center align-items-center bdbottom mb-2">
                          <span>Quantos anos você tem?</span>
                          <div className="d-flex mt-2 mb-2 align-items-center text-center justify-content-center">
                            <input
                              type="number"
                              name="idade"
                              className="form-control w-25 mr-2"
                              onChange={pegarIdade}
                              required
                            />
                            <Button1 onClick={verificarIdade}></Button1>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Você possui algum tipo de diabete?</span>
                    <div>
                      <div className="bdbottom mb-2">
                        <input
                          type="radio"
                          name="diabete"
                          value={"SIM"}
                          className="form-check-input"
                          onChange={impedido2}
                          required
                        />
                        <span className="mr-5">SIM</span>

                        <input
                          type="radio"
                          name="diabete"
                          value={"NAO"}
                          className="form-check-input"
                          onChange={impedido2}
                          required
                        />
                        <span>NÃO</span>
                      </div>
                      {validacao2 && (
                        <div>
                          <span>Você é dependente de insulina?</span>
                          <div className="bdbottom mb-2">
                            <input
                              type="radio"
                              name="Getdiabete"
                              value={"SIM"}
                              className="form-check-input"
                              onChange={impedido3}
                              required
                            />
                            <span className="mr-5">SIM</span>
                            <input
                              type="radio"
                              name="Getdiabete"
                              value={"NAO"}
                              className="form-check-input"
                              onChange={impedido3}
                              required
                            />
                            <span>NÃO</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>
                      Você tem epilepsia ou tem convulsões constantes?
                    </span>
                    <div>
                      <input
                        type="radio"
                        name="epilepsia"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido4}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="epilepsia"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido4}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>
                      Você possui ou já possuiu Hanseníase? (também conhecida
                      como lepra)
                    </span>
                    <div>
                      <input
                        type="radio"
                        name="lepra"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido5}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="lepra"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido5}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>
                      Você possui ou já possuiu alguma doença renal crônica?
                    </span>
                    <div>
                      <input
                        type="radio"
                        name="doencaRenal"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido6}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="doencaRenal"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido6}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>Você tem ou já teve cancêr?</span>
                    <div>
                      <input
                        type="radio"
                        name="cancer"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido7}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="cancer"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido7}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>
                      Você possui algum antecedente de acidente vascular
                      cerebral? (AVC)
                    </span>
                    <div>
                      <input
                        type="radio"
                        name="AVC"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido8}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="AVC"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido8}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <span>Você possui Hepatite?</span>
                    <div>
                      <div className="bdbottom mb-2">
                        <input
                          type="radio"
                          name="hepatite"
                          value={"SIM"}
                          className="form-check-input"
                          onChange={impedido9}
                          required
                        />
                        <span className="mr-5">SIM</span>
                        <input
                          type="radio"
                          name="hepatite"
                          value={"NAO"}
                          className="form-check-input"
                          onChange={impedido9}
                          required
                        />
                        <span>NÃO</span>
                      </div>
                      {validacao3 && (
                        <div className="bdbottom mb-2">
                          <span>Sua hepatite é de qual tipo?</span>
                          <div>
                            <input
                              type="radio"
                              name="Tipohepatite"
                              value={"SIM"}
                              className="form-check-input"
                              onChange={impedido10}
                              required
                            />
                            <span className="mr-5">Tipo A</span>
                            <input
                              type="radio"
                              name="Tipohepatite"
                              value={"NAO"}
                              className="form-check-input"
                              onChange={impedido10}
                              required
                            />
                            <span>Tipo B ou C</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="d-flex flex-column bdbottom mb-2">
                    <span>Você possui alguma DST?(HIV, Síflis, Gonorreia)</span>
                    <div>
                      <input
                        type="radio"
                        name="DST"
                        value={"SIM"}
                        className="form-check-input"
                        onChange={impedido11}
                        required
                      />
                      <span className="mr-5">SIM</span>
                      <input
                        type="radio"
                        name="DST"
                        value={"NAO"}
                        className="form-check-input"
                        onChange={impedido11}
                        required
                      />
                      <span>NÃO</span>
                    </div>
                  </div>
                </div>
                <input
                  id="input1"
                  type="submit"
                  className="btn btn-info"
                  value={"Segundo questionario"}
                />
              </div>
            </form>
          )}
          {quetionario && (
            <form onSubmit={showData}>
              <div className="d-flex flex-column text-center non">
                <div className="bdbottom mb-2">
                  <span>
                    Você apresentou algum sintoma gripal nos ultimos 15
                    dias?(tosse, febre, dor de garganta)
                  </span>
                  <div>
                    <input
                      type="radio"
                      name="gripe"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={quest1}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="gripe"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={quest1}
                      required
                    />
                    <span>NÃO</span>
                  </div>
                </div>
                <div className="bdbottom mb-2">
                  <span>Você teve diarreia na última semana?</span>
                  <div>
                    <input
                      type="radio"
                      name="diarreia"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={quest2}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="diarreia"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={quest2}
                      required
                    />
                    <span>NÃO</span>
                  </div>
                </div>
                <div className="bdbottom mb-2">
                  <span>Você deu a luz recetemente?</span>
                  <div>
                    <input
                      type="radio"
                      name="luz"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={validandoquest1}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="luz"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={validandoquest1}
                      required
                    />
                    <span>NÃO</span>
                    {validacao4 && (
                      <div>
                        <span>Foi parto normal ou cesáriana?</span>
                        <div>
                          <input
                            type="radio"
                            name="parto"
                            value={"SIM"}
                            className="form-check-input"
                            onChange={quest3}
                            required
                          />
                          <span className="mr-5">Normal</span>
                          <input
                            type="radio"
                            name="parto"
                            value={"NAO"}
                            className="form-check-input"
                            onChange={quest3}
                            required
                          />
                          <span>Cesáriana</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bdbottom mb-2">
                  <span>
                    Você fez tatuagem/micropigmentação ou colocou percing
                    recetemente?
                  </span>
                  <div>
                    <input
                      type="radio"
                      name="estetica"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={validandoquest2}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="estetica"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={validandoquest2}
                      required
                    />
                    <span>NÃO</span>
                    {validacao5 && (
                      <div>
                        <span>Marque a opção que você fez recentemente:</span>
                        <div>
                          <input
                            type="radio"
                            name="estetica2"
                            value={"NAO"}
                            className="form-check-input"
                            onChange={validandoquest3}
                            required
                          />
                          <span className="mr-5">Tatuagem</span>
                          <input
                            type="radio"
                            name="estetica2"
                            value={"SIM"}
                            className="form-check-input"
                            onChange={validandoquest3}
                            required
                          />
                          <span className="mr-5">Piercing</span>
                          <input
                            type="radio"
                            name="estetica2"
                            value={"AMBOS"}
                            className="form-check-input"
                            onChange={validandoquest3}
                            required
                          />
                          <span>Ambos</span>
                          {validacao6 && (
                            <div>
                              <span>
                                O piercing foi inserido na parte genital ou
                                oral?
                                <div>
                                  <input
                                    type="radio"
                                    name="estetica3"
                                    value={"SIM"}
                                    className="form-check-input"
                                    onChange={quest4}
                                    required
                                  />
                                  <span className="mr-5">SIM</span>
                                  <input
                                    type="radio"
                                    name="estetica3"
                                    value={"NAO"}
                                    className="form-check-input"
                                    onChange={quest4}
                                    required
                                  />
                                  <span>NAO</span>
                                </div>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="bdbottom mb-2">
                  <span>
                    Fez algum metodo de tratamento dentario
                    recentimente?(limpeza, obturações, extração, canal ou
                    implante)
                  </span>
                  <div>
                    <input
                      type="radio"
                      name="dente"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={validandoquest4}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="dente"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={validandoquest4}
                      required
                    />
                    <span>NÃO</span>
                    {validacao7 && (
                      <div>
                        <span>Escolha o procedimento feito:</span>
                        <div>
                          <div>
                            <input
                              type="radio"
                              name="dente2"
                              value={"LIMP"}
                              className="form-check-input"
                              onChange={quest5}
                              required
                            />
                            <span>Limpeza/Obturação</span>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="dente2"
                              value={"EXT"}
                              className="form-check-input"
                              onChange={quest5}
                              required
                            />
                            <span>Extração/Canal</span>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="dente2"
                              value={"IMP"}
                              className="form-check-input"
                              onChange={quest5}
                              required
                            />
                            <span>Implante</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <span>
                    Você fez uso de testosterona ou qualquer outro anabolizante
                    recentemente?
                  </span>
                  <div>
                    <input
                      type="radio"
                      name="testo"
                      value={"SIM"}
                      className="form-check-input"
                      onChange={quest6}
                      required
                    />
                    <span className="mr-5">SIM</span>
                    <input
                      type="radio"
                      name="testo"
                      value={"NAO"}
                      className="form-check-input"
                      onChange={quest6}
                      required
                    />
                    <span>NÃO</span>
                  </div>
                </div>
                <input
                  className="btn btn-info mt-3"
                  type="submit"
                  value={"Verificar data"}
                />
              </div>
            </form>
          )}
          {calendario && <Calendary data={dataFinal} />}
        </Div2>
        <div id="MES" className="d-flex justify-content-center mt-5">
          {message && <Menssagem TextTitle={title} TextMessage={typemessage} />}
        </div>
      </Footer>
    </DivP>
  );
};
export default App;
