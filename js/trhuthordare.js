document.getElementById("thruthB").addEventListener("click", truthrequest)
document.getElementById("dareB").addEventListener("click", darerequest)
document.getElementById("wyrB").addEventListener("click", whowouldrather)

function truthrequest(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.truthordarebot.xyz/v1/truth")
    request.send();
    request.onload = () => {
        if(request.status === 200) {
            let question = JSON.parse(request.response)
            document.getElementById("question").textContent = question.translations.de;
        }
        else{
            document.getElementById("error").textContent = "Please wait 5 seconds"
        }
    }
}

function darerequest(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.truthordarebot.xyz/api/dare")
    request.send();
    request.onload = () => {
        if(request.status === 200) {
            let question = JSON.parse(request.response)
            document.getElementById("question").textContent = question.translations.de;
            customDare();
        }
        else{
            document.getElementById("error").textContent = "Please wait 5 seconds"
        }
    }
}

function whowouldrather(){
    let request = new XMLHttpRequest();
    request.open("GET", "https://api.truthordarebot.xyz/api/wyr")
    request.send();
    request.onload = () => {
        if(request.status === 200) {
            let question = JSON.parse(request.response)
            document.getElementById("question").textContent = question.translations.de;
        }
        else{
            document.getElementById("error").textContent = "Please wait 5 seconds"
        }
    }
}

function customDare(){
    let percentage = Math.random();
    console.log(percentage);
    if(percentage < 0.1){
        document.getElementById("question").textContent = "Trink einen kurzen!";
    }
}