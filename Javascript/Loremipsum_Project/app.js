function createParagraph() {
    let sayi = parseInt(document.getElementById("amount").value);

    if (!isNaN(sayi) && sayi > 0) {
        let loremText = document.getElementById("lorem-text");

        

        for (let i = 0; i < sayi; i++) {
            let paragraph = document.createElement("p");
            paragraph.textContent = "Paragraf" + (i+1);
            loremText.appendChild(paragraph);
            console.log(loremText)
        }
    } else {
        alert("Geçerli bir sayi girin")
    }

 
}