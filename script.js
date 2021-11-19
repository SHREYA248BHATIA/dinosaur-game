var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var questions=[
    {
        prompt:"What colour are apples?\n(a)Red\n(b)Yellow\n(c)Blue\n(d)Pink",
        answer:"a"
    },
    {
        prompt:"What is 45+90?\n(a)88\n(b)135\n(c)136\n(d)155",
        answer:"b"
    }

];
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },700);
}
var i=0;
var checkAns = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft>60|| blockLeft<-10){
        var response = prompt(questions[i].prompt);
        if(response!=questions[i].answer){
            alert("WRONG! Now speed of obstacle will increase!");
            var str=block.style.animation;
            // console.log(str);
            var number=str.match(/(\d+)/);
            console.log(number);
            if(number[0])
                number=number[0]-1;
            var numberInString=number.toString();
            block.style.animation="block "+numberInString+"s infinite linear";
            // console.log(block.style.animation);
            i=(i+1)%2;
        }   
    }
}, 15000);

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/300));
        counter=0;
        block.style.animation = "block 3s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/300);
    }
}, 10);