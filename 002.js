const data = [1,2,3,4,5];

function indexOf(data,args) {
	return console.log(data.indexOf(args));
}

function lastIndex(data){
	const last = data[data.length-1];
	indexOf(data,last);
}

function includes(data,args){
	return console.log(data.includes(args));
}

function fill(data = data,args){
	const fill_res = data.fill(args)
	return console.log(fill_res);
}

function join(numbers,args){
	return console.log(numbers.join(args))
}

function sum(numbers){
	var sum = numbers.reduce(function(a, b){
        return a + b;
    }, 0);
    
    console.log(sum);
}

indexOf(data,3) // 3
lastIndex(data) // 4
includes(data, 6) /// false
includes(data, 5) /// true
join(data,'-') /// 1-2-3-4-5
sum(data) /// 15
fill(data,3) /// (3,3,3,3,3) 
//Fill saya pindahin ke bawah karena jika ditaruh di atass join, isi data pada array 'data' akan terganti menjadi hasil fill