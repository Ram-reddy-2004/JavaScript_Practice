// 1. Using Fetch API to get data from an external API using normal asynchronous  syntax

// fetch("https://catfact.ninja/fact")
// .then(response => response.text())   // used text() method to get raw text data
// .then(data => console.log(JSON.parse(data))) // parse the text data to JSON
// .catch(() => console.log("Error caught ..."))  ;


// fetch("https://catfact.ninja/fact")
// .then(response => response.json()) // directly parse the response to JSON
// .then(data => console.log(data))
// .catch(() => console.log("Error caught ..."))

// 2. Using Fetch API to get data from an external API using async await syntax

// async function fetchData(){
//     await fetch("https://catfact.ninja/fact")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(() => console.log("Error caught ..."))
// }
// fetchData();

// 3. Using Fetch API to get data from an external API using async await syntax with try catch block

async function fetchData(){
    try{
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Error caught ...");
    }
}
fetchData();