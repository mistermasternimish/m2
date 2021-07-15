class Form
{

constrouctor()
{


}

display()
{
var title = createElement('h2');
title.html("car Racing Game")
title.position(130,0);

var input =  createInput("Nmae")
input.position=(130,160);

var button = createButton("play")
button.position(250,200)

button.mousePreesed(function()
{
input.hide();
button.hide();

var name=input.value()

var greeting=createElement('h3')
greeting.html("helo"+name)
greeting.position('130,160')

})








}
































}