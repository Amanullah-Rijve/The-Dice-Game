let dice1 = Math.floor(Math.random()*6)+1

let imgsrc1 = "images/dice"+ dice1 + ".jpg"
document.querySelectorAll("img")[0].setAttribute("src", imgsrc1)

let dice2 = Math.floor(Math.random()*6)+1

let imgsrc2 = "images/dice"+ dice2 + ".jpg"
document.querySelectorAll("img")[1].setAttribute("src", imgsrc2)

if( dice1 > dice2){
    document.querySelector("h1").innerHTML ="Player 1 Wins !"
}else if( dice1 < dice2){
    document.querySelector("h1").innerHTML ="Player 2 Wins !"
} else{
    document.querySelector("h1").innerHTML ="It's a Draw !"

}
    
