function reverse(str){
	var reverse = str.split('').reverse().join('');
	console.log(reverse);
}

reverse(`Hello World!`) /// "!dlroW olleH"
reverse(`Welcome World`) /// "dlroW emocleW"