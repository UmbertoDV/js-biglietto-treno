const nKM = prompt('Quanti kilometri vuoi percorrere?');
const age = prompt('Quanti anni hai?'); 
const ticketCostKM = 0.21.toFixed(2);
const totalPrice = nKM * ticketCostKM;

if (age < 18 ) {
    let discountMinorenni = ((totalPrice * 20) / 100);
    let prezzoScontatoMinorenni = totalPrice - discountMinorenni;
    console.log(`${prezzoScontatoMinorenni.toFixed(2)} €`);
}
else if (age > 65 ) {
    let discountOver = ((totalPrice * 40) / 100);
    let prezzoScontatoOver = totalPrice - discountOver;
    console.log(`${prezzoScontatoOver.toFixed(2)} €`);
}
else{
    console.log(`${totalPrice.toFixed(2)} €`);
}