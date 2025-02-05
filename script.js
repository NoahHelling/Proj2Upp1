let totalSumma = 0;

function laggTillIVarukorg(produktNamn, pris) {
    const varukorgLista = document.getElementById('varukorg-lista');
    const item = document.createElement('li');
    item.textContent = `${produktNamn} - ${pris} kr`;
    varukorgLista.appendChild(item);

    // Uppdatera totalen
    totalSumma += pris;
    uppdateraTotalSumma();
}

function uppdateraTotalSumma() {
    const summaElement = document.getElementById('total-summa');
    summaElement.textContent = `Total summa: ${totalSumma} kr`;
}

document.addEventListener("DOMContentLoaded", () => {
    const produkter = [
        { namn: "Airforce 1", pris: 1200, bild: "img/AF1.jpg" },
        { namn: "Mocha Dunks", pris: 2000, bild: "img/nike.jpg" },
        { namn: "Purple Lobster", pris: 1700, bild: "img/plobster.jpg" }
    ];

    const produktContainer = document.getElementById("produkter");

    produkter.forEach(produkt => {
        const div = document.createElement("div");
        div.classList.add("produkt");
        div.innerHTML = `
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <p>${produkt.namn} - ${produkt.pris} kr</p>
            <button onclick="laggTillIVarukorg('${produkt.namn}', ${produkt.pris})">Lägg till i varukorg</button>
        `;
        produktContainer.appendChild(div);
    });
});