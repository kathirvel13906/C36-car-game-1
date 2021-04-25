class Form {
    constructor() {}

    display() {
        var title = createElement("h1");
        title.html("WHEELS ON FIRE");
        title.position(130,0);

        var input = createInput("name");
        input.position(120,160);

        var button = createButton("FIRE!");
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement("h2");
            greeting.html("hello RACER "+ name);
            greeting.position(130,160);
        })
    }
}