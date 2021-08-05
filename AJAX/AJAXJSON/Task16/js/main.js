const getTodos = (callback) =>{

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
//console.log(request, request.readyState);
if(request.status == 200 && request.readyState == 4){
   callback(undefined, request.responseText);
}
else if(request.readyState == 4){
   callback("coud not fetch data", undefined);
}

});
request.open("GET", 'https://jsonplaceholder.typicode.com/todos/');
console.log(request);
request.send();
};
getTodos((err , data) =>{
console.log('callback fired');
console.log(err,data);
});
