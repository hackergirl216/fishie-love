function displayResult() {
    var textDisplay = document.getElementById("myHeader").innerHTML;
    if (textDisplay == "Hello Humans!") {
        document.getElementById("myHeader").innerHTML = "Hello Fishies!";
        document.getElementById("humanoids").innerText = "Humans click here";
    } else {
        document.getElementById("myHeader").innerHTML = "Hello Humans!";
        document.getElementById("humanoids").innerText = "Sea Creatures click here";
    }
}

function myFunction() {
    document.getElementById("demo").innerHTML = Date();
}