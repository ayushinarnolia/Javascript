//Immediately Invoked Function Expressions (IIFE)
//usage: 
// 1) immediately execute a function
// 2)to get rid of global scope pollution!

(function chai()
{
    //named iife
    console.log(`DB CONNECTED`);
})();
//remember to add semicolon here!!!

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('ayushi')
