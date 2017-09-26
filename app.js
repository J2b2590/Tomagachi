console.log('Gooooood morning Vietnam')

$('button').on('click', (e) => {
 	
   setTimer()

    console.log('the click is working')

})
let time = 0;


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

const setUpRound = () => {
    $('.squares').empty();
    $('#round').text(`round: ${round}`)
    
	
    if(round === 1){
        createSquares(50);
        time = 5;
    }else if (round === 2){
        createSquares(100);
        time = 4;
    }else if (round === 3){
        createSquares(150);
        time = 3;
    }else{
        createSquares(250)
        time = 2;
    }
    
}

	


const lilYoshi = new Tomagotchi('lilYoshi', 0, 0, 0, 0, [
{
	name: 'tongue flick'


}])

console.log(lilYoshi)



const setTimer = () => {
    const timer = setInterval(() =>{
        time++

        
        $('#timer').text(`Timer: ${time}s`)
    }, 1000)


}






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












