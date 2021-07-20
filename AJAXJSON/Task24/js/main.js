window.addEventListener('load',main);
function main(){
    fetch('https://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/news-sample.json')
    .then(res =>res.json())
    .then(data =>{
        if(data.error !==0){
            document.getElementById('left').innerHTML = "doslo je do greske. Pokusajte ponovo.";
        }
        else {
            generisiListuVesti(data.items);
        }
    })
    .catch(error =>{
        document.getElementById('left').innerHTML ='Greska u izvrsaavanju JSON-a';
    })
}
function generisiListuVesti(lista){
    // da obrisemo predhodnu listu vesti
    document.getElementById('left').innerHTML ='';
    
    for(let vest of lista){

        let vestDiv = document.createElement('div');
    
        let vestThumb = document.createElement('img');
        vestThumb.setAttribute('src',vest.thumb);
        vestThumb.setAttribute('alt',vest.title);
        vestDiv.appendChild(vestThumb);

        let vestTitle = document.createElement('span');
        vestTitle.innerHTML = vest.title;
        vestDiv.appendChild(vestTitle);

        vestDiv.classList.add('vest');

        vestDiv.addEventListener('click',()=>{
            document.getElementById('title').innerHTML =vest.title;
            document.getElementById('content').innerHTML =vest.content;

        });
        document.getElementById('left').appendChild(vestDiv);
    }

}
