console.log('Gooooood morning Vietnam')

$('button').on('click', (e) => {
 	setHunger()

    console.log('the click is working')

})
let time = 0;
let hunger = 0;
let sleepiness = 0;
let bordem = 0;
let age = 0;


class Tomagotchi {
	constructor(name, hunger, sleepiness, bordem, age, actions){
		this.name = name;
		this.hunger = 0;
		this.sleepiness = 0;
		this.bordem = 0;
		this.age = 0;
		this.actions = {};
	}

	bored(play){

		if(this.bordem <= 3){
			alert('bored')
		}
		if(this.bordem <= 5){
			alert('BORED')
		}
		if(this.bordem <= 8){
			alert('BORED!')
		}
		return (this.bordem)
	}
	

	sleep(ZzZzZz){

		if(this.sleepiness <= 3){
			alert('sleep')
		}
		if(this.sleepiness <= 5){
			alert('SLEEP')
		}
		if(this.sleepiness <= 8){
			alert('SLEEEP!')
		}
		return(this.sleepiness)
	}
	

	feed(hungry){

		if(this.hunger <= 3){
			alert('feed me')
		}
		if(this.hunger <= 5){
			alert('FEED ME')
		}
		if(this.hunger <= 8){
			alert('FEED ME!')
		}


}


	killMeter(dead){

		if(this.hunger === 	10){
		alert('Yoshi has died')
		}
		if(this.sleepiness === 10){
		alert('Yoshi has died')
		}
		if(this.bordem === 10){
		alert('Yoshi has died')
		}
	}

}

const lilYoshi = new Tomagotchi('lilYoshi', 0, 0, 0, 0, [
{
	name: 'tongue flick'


}])

console.log(lilYoshi)

// 

const setHunger = () => {
    const timer = setInterval(() =>{
       time++


        $('#timer').text(`Hunger: ${time}`)
    }, 3000)


}
setHunger()

const setPlay = () => {
    const timer2 = setInterval(() =>{
       time++

        
        $('#timer2').text(`Play: ${time}`)
    }, 3000)


}
setPlay()

const setSleep = () => {
    const timer3 = setInterval(() =>{
       time++

        
        $('#timer3').text(`Sleep: ${time}`)
    }, 3000)


}
setSleep()






// class Yoshi extends Tomagotchi {
// 	constructor(name, hunger, sleepiness, bordem, age, actions){
// 	super(name, hunger, sleepiness, bordem, age, actions);

// 	}

// 	layEgg(Egg){
// 		console.log("Egg")
// 		}

// }

	

// const Yoshi = new Yoshi('Yoshi', 0, 0, 0, 0, [
// {
// 	name: 'tongue flick'

// }])












