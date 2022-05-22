Webcam.set({
    width: 420,
    height: 340,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );
 function picture() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('Output').innerHTML = 
         '<img src="'+data_uri+'"/>';
    } );
 };
 console.log(ml5.version);
 classifier=ml5.imageClassifier("",modelReady);
 function modelReady(){
     console.log("Model Ready");
 }; 