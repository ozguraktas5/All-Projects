function createParagraph(event) {
    event.preventDefault(); // butonun varsayilan davranisini iptal etmek icin
    let amount = document.getElementById("amount").value;
    let loremText = document.getElementById("lorem-text");
    loremText.innerHTML = "";

    lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae sint quia totam ducimus provident, voluptates explicabo placeat perferendis laborum harum. At sed accusantium hic explicabo labore temporibus suscipit illum!"

    for (let i=0; i < amount; i++) {
        let paragraph = document.createElement("p");
        paragraph.textContent = lorem;
        loremText.appendChild(paragraph)
    }

 
}