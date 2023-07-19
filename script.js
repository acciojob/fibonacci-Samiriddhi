function fibonacci(num) {
// your code here
	if(num==0||num==1){
		return num;
	}else{
		return (num-1)+(num-2);
	}
}

module.exports = fibonacci;
