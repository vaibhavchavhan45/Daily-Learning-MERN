//Throtttling : Throttling means making sure a function runs at most once in a given time period.
//Lets understand with e.g
//Someone is hosting live on youtube, there is a chat feature and slow mode is activated of 1 min
//means user can send a msg once in 1 min, if he tries to send a multiple msg in 1 Min 
//Server will not accept it, this is because of throttling
function throttle(func, limit) {
  let inThrottle = false;
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Usage
function sayHello() {
  console.log("Hello!");
}

const throttledHello = throttle(sayHello, 1000);

// Even if you call it 10 times quickly:
for (let i = 0; i < 10; i++) {
  throttledHello();
}

// Output: "Hello!" will print only once per second
