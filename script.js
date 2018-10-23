function greet() {
    window.alert("Hello everyone !");
}

function init() {
    document.getElementById("first").src = "flower2.png"; // Of course you can choose other file than flower2
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";
    document.getElementById("unique").innerHTML="You are doing great!";

    let image = document.createElement("img");

    document.getElementById("new_element").appendChild(image).src = "flower2.png";


    var changeSrc = function(event) {
        if (event.target.src) {
            event.target.src = "flower2.png";
        }
    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);


    let spans = document.getElementById("rainbow").querySelectorAll('span');
        let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];

    }
}