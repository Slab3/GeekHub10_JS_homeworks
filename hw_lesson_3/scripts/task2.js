// console.log('Task 2: Tamagotchi');

let hunger = 100;
let hygiene = 100;
let energy = 100;
let pleasure = 100;
let social = 100;
let love = 100;

/* function of updating information on the screen. */
function Loop(time = 1){ /*how much "%" health-bar will lose per 1 tick*/
    let total = hunger + hygiene + energy + pleasure + social + love; /*sum of all "%" on health-bar*/

    /* If any of the attributes reaches 0, our pet "dies". */
    if(hunger <= 0 || hygiene <= 0 || energy <= 0 || pleasure <= 0 || social <= 0 || love <=0){
        document.getElementById('pet').src="img/black.jpg";
        document.getElementById('message').innerHTML = 'You let your pet die, buy new one.' +
            '<br>' + '(...or just refresh the page :D)';
    } else if(total > 480){  /*if sum is less than the specified number, the pet's picture changes*/
        document.getElementById('pet').src="img/blue.jpg";
    } else if(total > 370){
        document.getElementById('pet').src="img/green.jpg";
    } else if(total > 260){
        document.getElementById('pet').src="img/grey.jpg";
    } else if(total > 150){
        document.getElementById('pet').src="img/yellow.jpg";
    } else if(total > 100){
        document.getElementById('pet').src="img/red.jpg";
    }

    hunger = hunger - parseInt(time);
    hygiene = hygiene - parseInt(time);
    energy = energy - parseInt(time);
    pleasure = pleasure - parseInt(time);
    social = social - parseInt(time);
    love = love - parseInt(time);

    /* control the status bar of the pet */
    document.getElementById('hunger').style.width = hunger + 'px'; /*width of line with "health"*/
    document.getElementById('hygiene').style.width = hygiene + 'px';
    document.getElementById('energy').style.width = energy + 'px';
    document.getElementById('pleasure').style.width = pleasure + 'px';
    document.getElementById('social').style.width = social + 'px';
    document.getElementById('love').style.width = love + 'px';


    /* control the "%" of satisfaction */
    document.getElementById('hunger').innerHTML = hunger + '%';
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('energy').innerHTML = energy + '%';
    document.getElementById('pleasure').innerHTML = pleasure + '%';
    document.getElementById('social').innerHTML = social + '%';
    document.getElementById('love').innerHTML = love + '%';
}

/* starts LOOPing timer */
function Start(){
    setInterval(Loop, 1000);
}

/* reset hunger */
function Eat(){
    hunger = 100;
    /*function can work without it, but with "ping"*/
    document.getElementById('hunger').innerHTML = hunger + '%';
    document.getElementById('hunger').style.width = hunger + 'px';
}

/* reset hygiene */
function Shower(){
    hygiene = 100;
    document.getElementById('hygiene').innerHTML = hygiene + '%';
    document.getElementById('hygiene').style.width = hygiene + 'px';
}

/* reset energy */
function To_sleep(){
    energy = 100;
    document.getElementById('energy').innerHTML = energy + '%';
    document.getElementById('energy').style.width = energy + 'px';
}

/* reset pleasure */
function Play(){
    pleasure = 100;
    document.getElementById('pleasure').innerHTML = pleasure + '%';
    document.getElementById('pleasure').style.width = pleasure + 'px';
}

/* reset social */
function Talk(){
    social = 100;
    document.getElementById('social').innerHTML = social + '%';
    document.getElementById('social').style.width = social + 'px';
}

/* reset love */
function Love(){
    love = 100;
    document.getElementById('love').innerHTML = love + '%';
    document.getElementById('love').style.width = love + 'px';
}

/* start timer. */
Start();