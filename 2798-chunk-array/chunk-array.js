/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
   let arrContainer = [];
   for(let i=0;i<arr.length;i+=size){
    let subArr = arr.slice(i,size+i);
    arrContainer.push(subArr)
   }
   return arrContainer

};
