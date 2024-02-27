console.log('esercizio "biglietto treno form"');

const pricePerKm = 0.21;
const pricePerKmUnder18 = 0.168;
const pricePerKmOver65 = 0.126;



//BUTTONS
const btnGenerate = document.querySelector('.btn-generate');
const btnClear = document.querySelector('.btn-clear');

btnGenerate.addEventListener('click',function(){
  const inputName = document.querySelector('.input-name').value;
  const inputKm = parseInt(document.querySelector('.input-km').value);
  const age = document.getElementById('age').value;

  console.log(inputName);
  console.log(inputKm);
  console.log(age);
  
  let totalPrice = inputKm * pricePerKm;

  if(age === 'minorenne'){
    totalPrice = inputKm * pricePerKmUnder18;
  } else if(age === 'over65'){
    totalPrice = inputKm * pricePerKmOver65;
  } else{
    totalPrice = inputKm * pricePerKm;
  }
  console.log(totalPrice.toFixed( 2));
})

btnClear.addEventListener('click',function(){
  document.querySelector('.input-name').value = '';
  document.querySelector('.input-km').value = '';
  document.getElementById('age').value = 'minorenne';
})

