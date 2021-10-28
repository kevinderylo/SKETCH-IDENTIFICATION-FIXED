function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas=createCanvas(600, 600);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
 function clearcanvas(){
     background("white");
 }
 function classifyCanvas(){
     classifier.classify(canvas, gotresult);
 }
 function gotresult(error,results){
     if(error){
         console.error(error);
     }
     console.log(results);
     document.getElementById("label").innerHTML="LABEL: "+ results[0].label;
     document.getElementById("confidence").innerHTML="CONFIDENCE: "+ Math.round(results[0].confidence*100)+"%";
     utter1=new SpeechSynthesisUtterance(results[0].label);
     synth.speak(utter1);
 }