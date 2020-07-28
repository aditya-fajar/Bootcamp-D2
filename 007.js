function maxCharacter(str) {
	var max = 0, maxChar = '';
  	str.split('').forEach(function(char){
    	if(str.split(char).length > max) {
        	max = str.split(char).length;
        	maxChar = char;
     	}
  	});
  	return console.log(maxChar);
};

maxCharacter('Hello World') // should return l