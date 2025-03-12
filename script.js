let totalSumma = 0;
let varukorg = [];

function laggTillIVarukorg(produktNamn, pris) {
    varukorg.push({ namn: produktNamn, pris: pris });
    uppdateraVarukorg();
}

function uppdateraVarukorg() {
    const varukorgLista = document.getElementById('varukorg-lista');
    varukorgLista.innerHTML = '';

    totalSumma = 0;

    varukorg.forEach((produkt, index) => {
        const item = document.createElement('li');
        item.textContent = `${produkt.namn} - ${produkt.pris} kr`;
        
        const taBortKnapp = document.createElement('button');
        taBortKnapp.textContent = '❌';
        taBortKnapp.style.marginLeft = '10px';
        taBortKnapp.onclick = () => taBortFrånVarukorg(index);

        item.appendChild(taBortKnapp);
        varukorgLista.appendChild(item);

        totalSumma += produkt.pris;
    });

    document.getElementById('total-summa').textContent = `Total: ${totalSumma} kr`;
}

function taBortFrånVarukorg(index) {
    varukorg.splice(index, 1);
    uppdateraVarukorg();
}

document.getElementById('töm-varukorg').addEventListener('click', () => {
    varukorg = [];
    uppdateraVarukorg();
});

document.addEventListener("DOMContentLoaded", () => {
    const produkter = [
        { namn: "Airforce 1", pris: 1200, bild: "img/AF1.jpg" },
        { namn: "Mocha Dunks", pris: 2000, bild: "img/nike.jpg" },
        { namn: "Purple Lobster", pris: 1700, bild: "img/plobster.jpg" },
        { namn: "Air Max", pris: 700, bild: "img/airmaxwebp.webp" },
        { namn: "Reverse Mocha", pris: 1800, bild: "img/revmocha.webp" },
        { namn: "Jordan 4 Midnight Navy", pris: 2200, bild: "img/Jordan4midnightnavy2.jpg" },
        { namn: "NIKE SB Dunk Grateful Dead Bears Green Low", pris: 17000, bild: "img/dunkgratefuldead2.webp" },
        { namn: "Rick Owens", pris: 3300, bild: "img/rickowens.webp" },
    ];

    const produktContainer = document.querySelector(".produkt-container");

    produkter.forEach(produkt => {
        const div = document.createElement("div");
        div.classList.add("produkt");
        div.innerHTML = `
            <p>${produkt.namn} - ${produkt.pris} kr</p>
            <img src="${produkt.bild}" alt="${produkt.namn}">
            <button onclick="laggTillIVarukorg('${produkt.namn}', ${produkt.pris})">Lägg till i varukorg</button>
        `;
        produktContainer.appendChild(div);
    });
});
