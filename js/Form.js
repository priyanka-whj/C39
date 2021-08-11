class Form
{
    constructor()
    {

    }

    display()
    {
        var title = createElement('h2');  //create a title of my page
        title.html("Car Racing Game");
        title.position(600, 100);

        var input = createInput("Name"); //create an input box
        input.position(550, 200);

        var button = createButton('Play'); //create a button in the form
        button.position(800, 200);

        button.mousePressed(function(){
            input.hide(); //hide the input text box from the form
            button.hide(); //hide button from the form
            var name = input.value(); //value() method helps me to fetch the data entered in the input text box
            var greeting = createElement('h3');
            greeting.html("Hello " + name);
            greeting.position(600, 250);
        })
        
    }
};