function anagram (arg1, arg2) {
	var reg = /[\W_]/g; // /[^A-Za-z0–9]/g 
	var str1 = arg1.split('').sort().join('').toLowerCase().replace(reg, '');
	var str2 = arg2.split('').sort().join('').toLowerCase().replace(reg, '');
	if(str1 === str2){
		return console.log(true);
	}else{
		return console.log(false);
	}
}

anagram('hello world', 'world hello') /// true

anagram('hellow world', 'hello there') /// false

anagram('hellow world', 'hello there!') /// false

anagram('silent', 'listen')