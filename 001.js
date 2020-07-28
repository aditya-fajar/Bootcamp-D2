
const data = [4, 2, 1, 3, 5];
// 
function sort(numbers){
	var sort_res = numbers;
	return console.log(sort_res.sort((a, b) => a - b));}

function reverse(numbers){
	let reverse_res = [].concat(numbers).reverse();
	return console.log(reverse_res);
}

function splice(numbers,index,added) {
	numbers.splice(index,0,added);
	return console.log(numbers);
}

// console.log('data:' + data)
reverse(data);
splice(data,3,6);
sort(data);
//Sort saya pindahin ke bawah karena jika ditaruh di paling atas, isi data pada array 'data' akan terganti menjadi hasil sorting [1,2,3,4,5], 
//bukan [4, 2, 1, 3, 5]