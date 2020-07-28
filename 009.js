function capitalize(str) {
	var a = str.split(' ');
	var arr = []
	for(let i = 0; i < a.length; i++){
		arr.push(a[i].charAt(0).toUpperCase() + a[i].slice(1));
	}
	const capital = arr.join(' ');
	return console.log(capital);
}

capitalize('hello world') /// Hello World