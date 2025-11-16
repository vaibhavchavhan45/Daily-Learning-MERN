const response = await fetch("https://sum-server.100xdevs.com/todos")
const json = await response.json()
console.log(json.todos);

 /*
Jo bhi url hai that is representing the JSON data like this(wrap in {})
    {
         todos: [
            { id: 1, title: "Go to gym", description: "Timing allowed from 5-7" },
            { id: 2, title: "2 hrs Study", description: "Timing alloted from 8-10" },
            { id: 3, title: "Read book", description: "Timing alloted from 10-11" }
                ]
    }
This is a json data which we are receiving in the response
but this json data cannot be read by our browser/js interpreter So, we need to convert 
that data from json to JS object 
----const DATA = await response.json()  and this line does that work to convert json to JS object
DATA is holding js obj but we need array jisko todos represent kr rha hai
so we log json.todos to get that array from JS object
This is how fetch works
*/


fetch("https://api.example.com/data")
  .then(response => {
    console.log(response.headers.get("content-type"));
  });

  //This log helps us to see which type of data the server is sending i.e. json, plain text, HTML, img