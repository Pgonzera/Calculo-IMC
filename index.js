const frm = document.querySelector('form')
const resp = document.getElementById('result')

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  let altura = Number(frm.altura.value);
  let peso = Number(frm.peso.value);

  if (isNaN(altura) || isNaN(peso)) {
    resp.innerText = 'Por favor, insira os dados corretos.';
  } else {
    const imc = peso / (altura ** 2);

    if (imc >= 18.5 && imc <= 24.9) {
      resp.innerText = `Seu IMC é de ${imc.toFixed(2)}.\nVocê está no peso normal.`;
    } else if (imc < 18.5) {
      resp.innerText = `Seu IMC é de ${imc.toFixed(2)}.\nVocê está abaixo do peso.`;
    } else if (imc >= 25.0 && imc <= 29.9) {
      resp.innerText = `Seu IMC é de ${imc.toFixed(2)}.\nVocê está com sobrepeso.`;
    } else if (imc >= 30.0 && imc <= 39.9) {
      resp.innerText = `Seu IMC é de ${imc.toFixed(2)}.\nVocê está com obesidade.`;
    } else if (imc >= 40.0) {
      resp.innerText = `Seu IMC é de ${imc.toFixed(2)}.\nVocê está com obesidade grave.`;
    }
  }
});

