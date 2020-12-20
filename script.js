var color = document.getElementById("color_value");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
// Display color from input color 
function updateColor(){
    c1 = color1.value;
    c2 = color2.value;
    color.innerHTML = ''+c1+','+c2+'';
    document.body.style.background = 'linear-gradient(to right, '+c1+','+c2+')';
}
color1.addEventListener("change", updateColor);
color2.addEventListener("change", updateColor);


