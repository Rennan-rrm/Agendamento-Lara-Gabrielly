const nome =document.getElementById('nome'); 
const servico =document.getElementById('servico'); 
const dataAgendamento =document.getElementById('dataAgendamento'); 
const horaAgendamento =document.getElementById('horaAgendamento'); 
const form =document.getElementById('formAgendamento'); 
       
form.addEventListener('submit', function(event){
event.preventDefault();
  const numero =5561994648754;

  const partes = dataAgendamento.value.split('-');
  const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

  const mensagemWhatsZap= encodeURIComponent(
    `Olá, meu nome é  ${nome.value} quero agendar para o dia ${dataFormatada} e horario:${horaAgendamento.value} para fazer ${servico.value}.`
  );
        
  const link= `https://wa.me/${numero}?text=${mensagemWhatsZap}`;
  window.open(link,'_blank');
  });