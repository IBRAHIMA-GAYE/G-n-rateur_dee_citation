const quotes = [{
    quote: '"Ce que l\on conçoit bien s\énnonce clairement et les mots pour le dire arrive aisément."',
    writer: '-Nicolas Boileau'
}, {
    quote: '"Je ne connais pas l\art d\être clair pour celui qui ne veut pas clair."',
    writer: '-Rousseau'
}, {
    quote: '"le bout de bois a beau s\éjourné dans l\eau mais ne sera jamais crocodile."',
    writer: '-Ousmane Sembéne'
}, {
    quote: '" Tout beau flatteur vit au dépend de celui qui l\'écoute."',
    writer: '-Fontaine'

}, {
    quote: '" Pour vivre heureux il faut vivre caché."',
    writer: '-Ovide'

}, {
    quote: '"La raison est héléne mais l\'émotion est nègre."',
    writer: '-Senghor'

}, {
    quote: '"L\'homme est naturellement bon mais c\'est la societé qui la corrumpu."',
    writer: '-Rousseau'

}, {
    quote: '" Un vieillard qui meurt c\'est une bibliothèque qui brule."',
    writer: '-Ampathé Ba'
}]



let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})