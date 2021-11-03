

const getTodos = (callback) =>{
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //onsole.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    //console.log(request.responseText);
  } else if (request.readyState === 4) {
      callback('could not fetch the data');
    //console.log("could not fetch the data", undefined);
  }
});
request.open("GET", "./json/todos.json", true);
request.send();
};

// console.log(1);
// console.log(2);
getTodos((err, data) =>{
console.log('calback fired');
//console.log(err, data);
if (err){
    console.log(err);
}
else{
    console.log(data);
}
});
//console.log(3);
//console.log(4);

