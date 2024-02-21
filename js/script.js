console.log('esercizio "biglietto treno form"');

const pricePerKm = 0.21;
const pricePerKmUnder18 = 0.168;
const pricePerKmOver65 = 0.126;
// let totalPrice = '';




//INPUT
const inputName = document.querySelector('.input-name');
const inputKm = document.querySelector('.input-km');
const inputAge = document.querySelector('.input-age');


//BUTTONS
const btnGenerate = document.querySelector('.btn-generate');
const btnClear = document.querySelector('.btn-clear');

btnGenerate.addEventListener('click',function(){
  console.log(inputName.value);
  console.log(inputKm.value);
  console.log(inputAge.value);
  if(inputAge < 18){
    totalPrice = inputKm * pricePerKmUnder18
  } else if(inputAge > 65){
    totalPrice = inputKm * pricePerKmOver65
  } else{
    totalPrice = inputKm * pricePerKm
  }
  console.log(totalPrice.toFixed( 2));
})

// let totalPrice = '';


