let aantalGekocht = 0;
for (let i = 0; i < inventory.length; i++)
{
    const aantalGekochts = inventory[i].originalStock;
    aantalGekocht += aantalGekochts;
}

/*console.log(aantalGekocht);*/

const aantalGekochtTotaal = document.getElementById("totaal-gekocht");
/*aantalGekochtTotaal.textContent = aantalGekocht;*/
/*aantalGekochtTotaal.innerHTML = `<div >${aantalGekocht}</div>`*/
