class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Start');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Shooting game");
        this.title.style('font-size', '70px');
        this.title.position(windowWidth/2-200, 50);
        this.title.style('color', 'blue');
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.position(windowWidth/2-100,400);
        this.input.style('background', 'lavender');
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.position(windowWidth/2-100,500);
        this.button.style('background', 'lightblue');
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.position(windowWidth/1.1,40);
        this.reset.style('background', 'lightblue');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}