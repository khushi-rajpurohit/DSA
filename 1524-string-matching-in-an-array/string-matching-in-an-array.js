/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let result = new Set() //this checks uniyq element
    for(let i =0;i<words.length;i++){
        let word1 = words[i];
        for(let j =0;j<words.length;j++){
            let word2 = words[j];
            if(word1 !== word2 && word1.includes(word2)){
                result.add(word2);
            }
        }
    }
    return Array.from(result)
};