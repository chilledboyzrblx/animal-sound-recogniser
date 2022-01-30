function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    document.getElementById("note").style.visibility = "hidden";
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fC94VHI9r/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}