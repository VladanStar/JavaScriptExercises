window.addEventListener("load", mainS);

// function main() {
//     let text = document.getElementById('text');
//     text.innerText = 'Neki tekst';
//     let lista = [];

//     let broj = 4;
//     for (let i = 0; i < 10; i++){
//         broj += broj - 3;

//         let objekatElement = {
//             "broj": broj,
//             "dupli broj": (broj * 2)
//         };
//         lista.push(objekatElement);
        
//     }
//     let jsonLista = JSON.stringify(lista);
//     text.innerText = jsonLista;
// }
function mainS() {
    let text = document.getElementById("text");
    let student = {
        "ime": "Vladan",
        "prezime": "Cupric",
        "indeks": 2010324,
        "godina upisa": 2012,
        "ocene":[]
    
    };
    for (let i = 0; i < 10; i++){
        student.ocene.push(i * 10 / 2);
    }
  
    let jsonStudent = JSON.stringify(student);
    text.innerText = jsonStudent;

}
