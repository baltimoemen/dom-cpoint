//declaration

var favs = Array.from(document.querySelectorAll(".fa-heart"));
var cards = Array.from(document.querySelectorAll(".card"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));


//favorites
for (let fav of favs){
    fav.addEventListener("click", function(){
        if  (fav.style.color == "black") {
            fav.style.color = "red";
        } else {
            fav.style.color = "black";
        }
    })
}
 //Delete 
 for (let i  in cards ) {
    deleteBtns[i].addEventListener("click", function() {
        cards[i].remove();
        total();
        

    });
 }

 // Add
 for (let plus of plusBtns ) {
    plus.addEventListener("click" , function() {
        plus.nextElementSibling.innerHTML++;   
        total(); 

    });
 }

 // Minus
 for (let minus of minusBtns ) {
    minus.addEventListener("click", function () {
        minus.previousElementSibling.innerHTML > 0
        ? minus.previousElementSibling.innerHTML--
        : null;
        total();
    });
 }

 // Total 
 function total() {
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll(".unitt-price"))
    let s= 0;
    for (let i=0 ; i<price.length; i++) {
        s = s + price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s;

 }






