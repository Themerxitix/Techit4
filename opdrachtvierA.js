/*
const gegevens = inventory.map((tvGegevens)=> {
    return tvGegevens.brand +" "+ tvGegevens.type +" "+ tvGegevens.name;
});
*/

function deGegevens()
{
    const alleGegevens= document.getElementById("gegevens");
    alleGegevens.textContent = inventory[4].brand +" "+ inventory[4].type +" "+ inventory[4].name;
}
deGegevens();

//----------------------------------------------------------------------------------------------------------------------
/*const prijs = inventory.map((telePrijs) => {
    return telePrijs.price;
})*/
function tvPrijs(){
    const allePrijzen = document.getElementById("prijzen");
    allePrijzen.textContent = inventory[4].price;
}
tvPrijs();
//----------------------------------------------------------------------------------------------------------------------
/*const schermGrotte = inventory.map((scherm) => {
    return scherm.availableSizes;
})*/
/*console.log(schermGrotte);*/

function tvScherm(){
    const schermenTv = document.getElementById("scherm");
    schermenTv.textContent = inventory[4].availableSizes;
}
tvScherm();