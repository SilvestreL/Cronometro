var mostrador = document.getElementById('counter');
var tempo = 1000;
var hh = 0;
var mm = 0;
var ss = 0;
var cron;
var emExecucao = false; // Variável de controle para verificar se o intervalo está em execução

function inicio() {
  if (!emExecucao) {
    cron = setInterval(() => {
      if (ss < 59) {
        ss++;
      } else if (mm < 59) {
        ss = 0;
        mm++;
      } else {
        ss = 0;
        mm = 0;
        hh++;
      }
      
      // Formatação com duas casas decimais usando padStart()
      var hhStr = hh.toString().padStart(2, '0');
      var mmStr = mm.toString().padStart(2, '0');
      var ssStr = ss.toString().padStart(2, '0');
      
      mostrador.innerText = `${hhStr}:${mmStr}:${ssStr}`;
      
      if (hh === 24) {
        clearInterval(cron);
      }
    }, tempo);
    emExecucao = true; // Atualiza a variável de controle para indicar que o intervalo está em execução
  }
}

function pause() {
  clearInterval(cron);
  emExecucao = false; // Atualiza a variável de controle para indicar que o intervalo foi interrompido
}

function stop() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  mostrador.innerText = '00:00:00';
  emExecucao = false; // Atualiza a variável de controle para indicar que o intervalo foi interrompido
}
