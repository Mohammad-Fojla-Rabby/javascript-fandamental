// hello = olleh
    //  function reverseString(sentence){
    //      console.log(sentence.length)
    //      for (i = 10; i >= 0; i--){
    //          console.length(sentence.lenght)
    //      }
    //  }
    //  reverseString('hello world')


/*     function reverstingedit(sentences)
{
   for (var i = sentences.length - 1; i >= 0 ; i--) {
       console.log(sentences[i]);
   }
   
}
reverstingedit('al') */
/* var numbers = [440,23,42,424,423,4,234,23,4,23,42,3,5,7,6];
function bignumber(mefind){
mefind.sort(function(a, b){return b-a });
return mefind[1];
}
var findlarge = bignumber(numbers);
console.log(findlarge) */
/* var names = ' what is your    name '
function wordCount(parameter){
  
    var count = 0;
    for (var i = 0; i < parameter.length; i++){
        if(parameter[i] == " " && parameter[i-1] != " "){
            count++;
        }
    }
    count++
    console.log(count);
}
wordCount(names) */
/* function WordCount(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
      if (str[i] === " ") { // if a space is found in str
        count++; // add 1 to total so far
    }
    
    count++; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
console.log(count)
}

WordCount('what is you  name')
 */

var names = ['jodu', 'modu']

console.log(typeof(names))