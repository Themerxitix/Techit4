let aantalVerkocht = 0;
for (let i = 0; i < inventory.length; i++)
{
    const aantalVerkochts = inventory[i].sold;
    aantalVerkocht += aantalVerkochts;
}

/*console.log(aantalVerkocht);*/

const aantalVerkochtTotaal = document.getElementById("aantal-verkocht");
/*aantalVerkochtTotaal.textContent = aantalVerkocht;*/
//aantalVerkochtTotaal.innerHTML = `<div>${aantalVerkocht}</div>`;
