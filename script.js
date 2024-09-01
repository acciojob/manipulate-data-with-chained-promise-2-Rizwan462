//your JS code here. If required.
function munipulateArray(){
	return new Promise((resolve) => {
		setTimeout(()=> {
			const array = [1,2,3,4];
			resolve(array);
		}, 3000);
	})
	.then ((array) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const evenNum = array.filter(num => num%2===0);
				document.getElementById('output').textContent = `Filtered array`
				resolve(evenNum);
			}, 1000);
		})
	})
	.then((evenNum) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const multipliedNum = evenNum.map(num=>num*2);
				document.getElementById('output').textContent = `Multiplied`
				resolve(multipliedNum);
			}, 2000)
		})
	})
}
munipulateArray();




