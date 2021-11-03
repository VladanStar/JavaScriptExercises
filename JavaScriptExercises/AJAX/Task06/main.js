window.addEventListener('load',main);
function main(){
    let text = document.getElementById("text");
    let student = {
ime:"Vladan",
prezime: "Cupric",
index: "96/511",
godine:2015,
ocene: []
    };
   for (let i =0; i<0; i++){
       student.ocene.push( i*10/2);
   }
 

    let jsonStudent = JSON.stringify(student);
    text.innerText = jsonStudent;
}