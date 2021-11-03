window.addEventListener('load',main);
function main(){
    let text = document.getElementById("text");
   let lista =[];
    let broj = 4;
    for (let i =0;i<10;i++){
        broj+=broj-3;
        let objekatElement =  {
            "broj":broj,
            "dupli broj": (broj *2),

        };
        lista.push(objekatElement);
    }

    let jsonLista = JSON.stringify(lista);
    text.innerText = jsonLista;
}