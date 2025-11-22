//Debouncing :
//You visited the flipkart website and try to search something in the search bar
//You have to search "Latest watches for men" Let say u r typing continuously and then stop at one point
//Till the moment u types "Latest wat" depending on that text I will give user suggestions
//below the search bar like "Latest watch for mens", "Latest watch for womens", "Latest watch for kids",
//That is the debouncing
//If user is typing continuosly let him complete, if user stops for let say decided timer wo kitna bhi ho skta hai
//let say ki he stops for decided 1 sec or 500 ms then I will give him suggestions

function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// Example usage:
function sayHello() {
  console.log("Hello!");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello();


/*
Steps to Implement debouncing : 
Create a debounce function that takes:
1.func → the function you want to run
2.delay → wait time in milliseconds
3.Inside debounce:
4.Keep a timer variable
5.Clear the previous timer every time the function is called
6.Set a new timer to run func after the delay
7.Use the debounced function instead of the original function.
*/