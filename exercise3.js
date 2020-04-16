//Write two functions to chain together. The first function, makeAllCaps, will take in an array of words and capitalize them. A second function, sortWords, will sort the words in alphabetical order. 

//If the array contains anything besides a single word (string), an error should be thrown.

var fruits = ['apples', 'bananas', 'cherries', 'dates'];
var complicatedArray = ['apples', 44, true]

function makeAllCaps(array){
	return new Promise((resolve, reject)=>{
		let capsArray = array.map(word => {
			if(typeof word === 'string'){
				return word.toUpperCase()
			} else {
				reject('Error: Not all items in the array are strings!')
			}
		})
		resolve(capsArray)
	})
}

function sortWords(array){
	return new Promise((resolve,reject)=>{
		if (array){
			array.forEach((el)=>{
				if(typeof el != 'string'){
					reject('Error: Not all items in the array are strings!')
				}
			})
			resolve(array.sort());
		} else {
			reject('Error: Something went wrong with sorting words.')
		}
	})
}

makeAllCaps(fruits)
	. then(sortWords)
	.then((result)=> console.log(result))
	.catch(error => console.log(error))

makeAllCaps(complicatedArray)
	.then(sortWords)
	.then((result)=> console.log(result))
	.catch(error => console.log(error))

	
// // Creates function to capitalize an item.USING .MAP

// function makeAllCaps(fruitItem){
// 	return fruitItem.toUpperCase();
// }

// // Array items are passed through function and are capitalized and sent back as a new array.

// var fruitsAllCaps = fruits.map(makeAllCaps);


// // ********************* OR ***********************

// // Same as above but everything is done in one line/function. USING.MAP

// var fruitsAllCaps = fruits.map(function makeAllCaps(fruitItem) {
//     return fruitItem.toUpperCase();
// });
// console.log (fruitsAllCaps);



// //**************** EXAMPLE OF CHAIN PROMISES INSLIDES************************
// // //------------ dataService.js ------------
// // function getUserByName(username) {
// // return new Promise(function(resolve,reject){
// // 	 $.get('http://jsonplaceholder.typicode.com/users?username=' + username, function(users){
// // 		 resolve(users[0]);
// // 	 });
// //  })
// // }

// // function getPostsByUser(user) {
// // return new Promise(function(resolve,reject){
// // 	 $.get('http://jsonplaceholder.typicode.com/posts?userId=' + user.id, function(posts){
// // 		 resolve(posts);
// // 	 });
// // })
// // }

// // //------------ interface.js ------------

// // function render(posts) {
// // //render the posts data
// // console.log(posts);
// // }

// // function showUserItems(){
// // getUserByName('Bret')
// //  .then(getPostsByUser)
// //  .then(render);
// // }

// // showUserItems();