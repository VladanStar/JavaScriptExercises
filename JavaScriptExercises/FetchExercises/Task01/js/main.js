window.addEventListener('load',main);
function main(){
    //http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php
    
    //Asinhroni zahtevi POST
    //u simularnom formularu moramo
    // -action
    //+
    // kada stigne odgovor, on u JSON obliku  =>konvertuejmo u bjekat
    // iz objekta da pogledamo vrednost type (success, error, warning)
    // data ->obrdara na adekvatan nacin
}
function ucitavanjeStatistike(){
    let form = new FormData();
    form.append('key','e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
    form.append('action','getSaleStatistics');
    fetch('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php',
    {
        method:'POST',
        body:form
    }) 
    .then(res=>res.json())
    .then(res =>{
        if(res.type !== 'success'){
            console.log('Doslo je do neke greska'+res.code);
            return;
        }
       // app.innerHTML = JSON.stringify(res.data); 
       app.innerHTML = 'Ukupno prodaja: ' + res.data.total_sales + '<br>'
       +'Najmanje prodato: ' + res.data.minimum_sold_quantity + '<br>'+
       "Najvise prodato: "+  res.data.maximum_sale_price + '<br>'+
       "Najpodavaniji artikal: " + res.data.most_sold_article_name;

    });

}

function ucitavanjeTopDeset(){
    let form = new FormData();
    form.append('key','e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4');
    form.append('action','getTopTenSales');
    fetch('http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php',
    {
        method:'POST',
        body:form
    }) 
    .then(res=>res.json())
    .then(res =>{
        if(res.type !== 'success'){
            console.log('Doslo je do neke greska'+res.code);
            return;
        }
       // app.innerHTML = JSON.stringify(res.data); 
       app.innerHTML = JSON.stringify(res.data);
    });

}

