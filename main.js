//https://teachablemachine.withgoogle.com/models/SO86mDr6F/
Webcam.set({
    width: 360,
    height: 300,
    image_format: "png"
    ,png_quality: 90
})
camera=document.getElementById("camera")
Webcam.attach("#camera")
function takesnap() {
    Webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_url+'"/>'
    })
}
console.log('ml5version :',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SO86mDr6F/model.json",modelloaded)
function modelloaded() {
    console.log("modelloaded")
}
function check() {
    img=document.getElementById("capture_image")
    console.log(img)
    classifier.classify(img,gotresult)
}
function gotresult(error,results) {
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        document.getElementById("object_name").innerHTML=results[0].label
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2)
    }
}