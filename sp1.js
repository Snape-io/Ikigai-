const qtContainer =document.getElementById("quote-cntID")
const quoteTxt = document.getElementById("qt-txt");
const author = document.getElementById("authorID");
const twitter = document.getElementById("twtID");
const insta= document.getElementById("insID");
const whatsapp = document.getElementById("wtsID");
const changeQt = document.getElementById("changeID");

let apiqt =[];
function newquote(){
    const qt = apiqt[Math.floor(Math.random() * apiqt.length)]
    if(! qt.author){
        author.textContent = "anonymous ";
    } else{
        author.textContent =qt.author;
    }
    quoteTxt.textContent = qt.text;
}
async function quotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const res = await fetch(apiUrl);
        apiqt = await res.json();
        newquote();
    }catch(error){

    }

}
function tweet(){
    const quote = quoteTxt.textContent;
    const auth = author.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ~ ${auth}`;
    window.open(twitterUrl, '_blank');

}
function instagram(){
    const instaUrl = `https://www.instagram.com/`;
    window.open(instaUrl)
}
function whatsappLink(){
    const quote = quoteTxt.textContent;
    const auth = author.textContent;
    const whtsUrl =`whatsapp://send?text=${quote}~ ${auth}`;
    window.open(whtsUrl);
}
changeQt.addEventListener('click', newquote);
twitter.addEventListener('click', tweet);
insta.addEventListener('click',instagram);
whatsapp.addEventListener('click',whatsappLink);
quotes();

function B1(){
    document.body.style.backgroundImage ="url('img1.jpg')";
}
function G1(){
    document.body.style.backgroundImage ="url('img9.jpg')";
}
function G2(){
    document.body.style.backgroundImage ="url('f4.jpg')";
}function G3(){
    document.body.style.backgroundImage ="url('img5.jpg')";
}function G4(){
    document.body.style.backgroundImage ="url('img11.jpg')";
}function G5(){
    document.body.style.backgroundImage ="url('img8.jpg')";
}function G6(){
    document.body.style.backgroundImage ="url('img7.jpg')";
}function G7(){
    document.body.style.backgroundImage ="url('img6.jpg')";
}
