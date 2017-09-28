console.log('Gooooood morning Vietnam')

$('#feedButton').on('click', (e) => {

 	lilYoshi.feed()
   
    console.log('the click is working')
})

$('#playButton').on('click', (e) =>{

	lilYoshi.play()

	console.log('playbutton')
})

$('#sleepButton').on('click',(e) => {


	lilYoshi.sleep()

	console.log('sleepButton')
})
let time = 0;
let hunger = 0;
let sleepiness = 0;
let bordem = 0;
let age = 0;



class Tomagotchi {
	constructor(name, hunger, sleepiness, boredem, age, actions){
		this.name = name;
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredem = boredem;
		this.age = age;
		this.actions = {};


	}	

	setUpTimer(){
		const timer = setInterval(() =>{
   			this.age += 1
   			this.hunger++
   			this.sleepiness++
  			this.boredem++


  		if(this.hunger === 10 || this.sleepiness === 10 || this.boredem === 10){
  			clearInterval(timer)
  			alert ('Yoshi has died')
  		}

      	    $('#timer').text(this.hunger)
      	  	$('#timer2').text(this.boredem)
  	 		$('#timer3').text(this.sleepiness)
  	 		$('#timer4').text('Yoshi age: ' + this.age)
		}, 2000)
	}

	feed(){
		this.hunger--
	}
	play(){
		this.boredem--
	}
	sleep(){
		this.sleepiness--
	}

	// Morph(){
	// 	this.age > 5
	// 	return ''
	// }
	// killMeter (dead) {

	// if(this.hunger === 	10){
	// alert('Yoshi has died')
	// }
	// if(this.sleepiness === 10){
	// alert('Yoshi has died')
	// }
	// if(this.boredem === 10){
	// alert('Yoshi has died')
	// }



}	


//  killMeter (dead) {

// 	if(this.hunger === 	10){
// 	alert('Yoshi has died')
// 	}
// 	if(this.sleepiness === 10){
// 	alert('Yoshi has died')
// 	}
// 	if(this.boredem === 10){
// 	alert('Yoshi has died')
// 	}
// }

const lilYoshi = new Tomagotchi('lilYoshi', 0, 0, 0, 0, [
{
	name: 'tongue flick'


}])

lilYoshi.setUpTimer()

console.log(lilYoshi)



// }
// setHunger()

// const setPlay = () => {
//     const timer2 = setInterval(() =>{
//        time++

        
//         $('#timer2').text(`Play: ${time}`)
//     }, 3000)


// }
// setPlay()

// const setSleep = () => {
//     const timer3 = setInterval(() =>{
//        time++

        
//         $('#timer3').text(`Sleep: ${time}`)
//     }, 3000)


// }
// setSleep()






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












