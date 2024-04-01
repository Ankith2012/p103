Webcam.set({
width:350,
height:300,
img_format:'png',
png_quality:90
})

camera= document.getElementById('Camera')

Webcam.attach('#camera')

function takeScreenshot(){
    Webcam.snap(function (datauri){
        document.getElementById('result').innerHTML= "<img id='snapshot' src='" +datauri+"'>"
    })
}
classifier= ml5.imageClassifier( 'https://teachablemachine.withgoogle.com/models/mcxLHp_a0/modelready', modelready)

 function modelready() {
    console.log('Model Loaded')
 }

console.log('ml5 version', ml5.version)

function identify() {
    img= document.getElementById('snapshot')
    classifier.classify(img,gotResult)
}

function gotResult(error,result) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(result)
        document.getElementById('object_identity').innerHTML= result[0].label
        document.getElementById('Accuracy').innerHTML= result[0].confidence.toFixed(2)
    }
}