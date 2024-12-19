let books = [
    { title: "İnsan Ne ile Yaşar", author: "Tolstoy", price: 20, code: "4.1.RAF" },
    { title: "Hiçbir Karşılaşma Tesadüf Değildir", author: "Hakan Mengüç", price: 58, code: "3.5.RAF" },
    { title: "Hayat Kaybettiğin Yerden Başlar", author: "Miraç Çağrı Aktaş", price: 27, code: "1.3.RAF" },
    { title: "Her Şeyi Düşünme", author: "Anne Bogel", price: 34, code: "1.4.RAF" },
    { title: "Dikili İlişkiler", author: "Haluk Tatar", price: 17, code: "4.2.RAF" },
];

let raflar = [
    { code: "1.1.RAF", rendered: false },
    { code: "1.2.RAF", rendered: false },
    { code: "1.3.RAF", rendered: false },
    { code: "1.4.RAF", rendered: false },
    { code: "1.5.RAF", rendered: false },
    { code: "2.1.RAF", rendered: false },
    { code: "2.2.RAF", rendered: false },
    { code: "2.3.RAF", rendered: false },
    { code: "2.4.RAF", rendered: false },
    { code: "2.5.RAF", rendered: false },
    { code: "3.1.RAF", rendered: false },
    { code: "3.2.RAF", rendered: false },
    { code: "3.3.RAF", rendered: false },
    { code: "3.4.RAF", rendered: false },
    { code: "3.5.RAF", rendered: false },
    { code: "4.1.RAF", rendered: false },
    { code: "4.2.RAF", rendered: false },
    { code: "4.3.RAF", rendered: false },
    { code: "4.4.RAF", rendered: false },
    { code: "4.5.RAF", rendered: false },
    { code: "5.1.RAF", rendered: false },
    { code: "5.2.RAF", rendered: false },
    { code: "5.3.RAF", rendered: false },
    { code: "5.4.RAF", rendered: false },
    { code: "5.5.RAF", rendered: false },
];

function raflariOlustur() {
    const rafContainer = document.getElementById("kitap-rafi");
    rafContainer.innerHTML = ""; // Eski içeriği temizle
    raflar.forEach(raf => {
        const card = document.createElement("div");
        card.className = `col card ${raf.rendered ? "highlight" : ""}`;
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${raf.rendered ? raf.code : "---"}</h5>
            </div>`;
        rafContainer.appendChild(card);
    });
}

function kitapAra() {
    const kitapInput = document.getElementById("kitap-input").value;
    const kitap = books.find(book => book.title.toUpperCase().includes(kitapInput.toUpperCase()));
    if (kitap) {
        kitabiGoster(kitap.code);
        alert(`${kitap.title} (${kitap.code}) rafında bulundu.`);
    } else {
        alert("Kitap bulunamadı!");
    }
}

function kitabiGoster(code) {
    const raf = raflar.find(raf => raf.code === code);
    if (raf) {
        raf.rendered = true;
        raflariOlustur();
    }
}

// Başlangıçta rafları oluştur
raflariOlustur();
