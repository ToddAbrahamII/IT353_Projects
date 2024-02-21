// src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"

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

//Get the big picture
//$("#imgManipulated").css('filter' + settings);


var settings ='blur('+ blur + 'px) ' +
            'brightness('+ brightness + '%) ' +
            'opacity('+ opacity + '%) ' +
            'saturation(' + saturation + '%) ' +
            'hue(' + hue + 'deg) ' + 
            'grayscale(' + grayscale + '%) ';

            
//Get the big picture
$("#imgManipulated").css('filter: ' +  settings);


});//Input Function


}); //Ready Function

