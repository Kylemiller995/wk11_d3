var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr
	},

	square: function (arr) {
		var squared = arr.map(function(n){
			return n ** 2
		})
		return squared
	},

	sum: function (arr) {
		var sum = arr.reduce(function(total, i){
			return total + i
		})
		return sum
	},

	findDuplicates: function (arr) {
		arr.sort();
	  var results = arr.filter(function(number, pos){
	      return number === arr[pos + 1] && number !== arr[pos-1];
	    })
	  return results;
	},



	removeAndClone: function (arr, valueToRemove) {
		arrClone = arr.filter(function(n){
			return n !== valueToRemove
		})
		return arrClone
	},

	findIndexesOf: function (arr, itemToFind) {
		  var newarray = []
			var idx = arr.indexOf(itemToFind)
			while (idx != -1){
				newarray.push(idx)
				idx = arr.indexOf(itemToFind, idx +1)
			}
			return newarray
	},

	sumOfAllEvenNumbersSquared: function (arr) {
			var evens = arr.filter(function(x){
				return x % 2 == 0;
			})
			var evenSquared = evens.map(function(x){
				return x ** 2;
			})
			var reduced = evenSquared.reduce(function(total, i){
				return total+i;
			})
			return reduced;
	}

}

module.exports = arrayTasks
