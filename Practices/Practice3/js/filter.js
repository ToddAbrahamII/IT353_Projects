$(document).ready(function() {

//Gets Value From Sliders
$("input[type=range]").on('input',function() {

//Variables for Image Editing
var opacity = $('#sliderOpacity').val();
var saturation  = $('#sliderSaturation').val();
var brightness = $('#sliderBrightness').val();
var hue = $('#sliderHue').val();
var grayscale  = $('#sliderGray').val();
var blur = $('#sliderBlur').val();

console.log("Opacity:", opacity);
console.log("Saturation:", saturation);
console.log("Brightness:", brightness);
console.log("Hue:", hue);
console.log("Grayscale:", grayscale);
console.log("Blur:", blur);

//Get the big picture
//$("#imgManipulated").css('filter' + settings);


var settings ='blur('+ blur + 'px) ' +
            'brightness('+ brightness + '%) ' +
            'opacity('+ opacity + '%) ' +
            'saturate(' + saturation + '%) ' +
            'hue-rotate(' + hue + 'deg) ' + 
            'grayscale(' + grayscale + '%)';


console.log("Settings:", settings);
            
//Get the big picture
$('#imgManipulated').css("filter" , settings);


});//Input Function


}); //Ready Function

