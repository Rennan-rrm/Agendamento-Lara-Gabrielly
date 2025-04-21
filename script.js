document.querySelector(".btn-agenda").addEventListener("click", function (e) {
    e.preventDefault(); // Impede a navegação padrão do link
  
    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("serviço").value;
    const dataISO = document.getElementById("data-agendamento").value;
    const horario = document.getElementById("hora-agendamento").value;
  
    let dataFormatadaBR = "";
    if (dataISO) {
      const data = new Date(dataISO);
      const dia = data.getDate().toString().padStart(2, '0');
      const mes = (data.getMonth() + 1).toString().padStart(2, '0');
      const ano = data.getFullYear();
      dataFormatadaBR = `${dia}/${mes}/${ano}`;
    }
  
    const mensagemWhatszap =`Olá, meu nome é ${nome} quero agendar para o dia ${dataFormatadaBR} e horario: ${horario} para fazer ${servico}.`;
    const numero = "55619468754";
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemWhatszap)}`;
  
    window.open(link, "_blank");
  });