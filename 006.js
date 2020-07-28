function fizzBuzz (number) {
	if(number % 2 === 0 && number % 3 === 0){
		console.log('Fizz Buzz');
	}else{
		if(number % 3 === 0) {
			console.log('Buzz');
		}else if(number % 2 === 0){
			console.log('Fizz');
		}else{
			console.log('')
		}
	}
}

fizzBuzz(30)