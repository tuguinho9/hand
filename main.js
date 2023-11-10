//https://teachablemachine.withgoogle.com/models/0cCY1UTsS/
Webcam.set({
    width: 340, height: 300, image_format: "png", png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function capturar() {
    Webcam.snap(function(data_uri){
        document.getElementById("foto").innerHTML = '<img id="img1" src="'+data_uri+'">'
    });

}