let setencesTest = ["jorgA miguel HERNANDEZ santos",
    "hello everyBody",
    "i like coding",
    "Never give up a dream because of the time it will take to accomplish it. The time will pass anyway."
]


// Learning how to do a titleCase
function titleCase(text) {
    //First we put all the lowercase, then we separate them by space, 
    //and then we use map, to call a function for each element.
    return text.toLowerCase().split(' ').map(function (word) {
        //Here we take the first element of the word, with chartAt(0)
        //and put to uppercase, and take the rest of the word  with slice(1)
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
setencesTest.forEach(element => {
    console.log(titleCase(element));
});