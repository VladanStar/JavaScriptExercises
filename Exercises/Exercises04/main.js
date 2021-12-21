window.addEventListener('load', main);

function main(){
    //http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php
    
    //API KEY: e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4

}
function ucitavanjeStatistike(){
    let form = new FormData();
    form.append('key','e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4')
    form.append('action','getSaleStatistics');
    fetch(
        'http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php',
        {
            method:'POST',
            body:form,
        }
    )
    .then(res=>res.json())
    .then(res=>{
        let app = document.getElementById('app');
    app.innerHTML='';
        if(res.type !=='success'){
            console.log("Doslo je do neke greske" + res.code);
            return;
        }
        else{
           app.innerHTML= JSON.stringify(res.data);
           app.innerHTML = "Ukupno prodaja " + res.data.total_sales +'</br>' +
                            "Najmanje prodato " + res.data.minimum_sold_quantity +'</br>'+
                            "Najvise prodato "+ res.data.maximum_sold_quantity +'</br>'+
                            "Najmanja cena " + res.data.minimum_sale_price +'<br>'+
                            "Najvisa cena " + res.data.maximum_sale_price + '<br>'+ 
                            "Najprodavaniji atikal "+ res.data.most_sold_article_name +'<br>'

        }
    })
}
function ucitavanjeTop10(){
    let form = new FormData();
    form.append('key','e5ad1ee36f0d002a7aada935c62937d866dcad8764841b4ad4fa65dc624caef4')
    form.append('action','getTopTenSales');
    fetch(
        'http://zadatak.singidunum.ac.rs/predmeti/osnove-html-css-js/fake-api.php',
        {
            method:'POST',
            body:form,
        }
    )
    .then(res=>res.json())
    .then(res=>{
        let app = document.getElementById('app');
    app.innerHTML='';
        if(res.type !=='success'){
            console.log("Doslo je do neke greske" + res.code);
            return;
        }
        else{
            let htmlTabele =`<table>
            <thead>
            <tr>
            <th>#
            <th>Datum prodaje
            <th>Naziv artikla
            <th>Cena
            <th>Kolicina
            <tbody>`;
            for (let artikal of res.data){
                htmlTabele +=`
                <tr>${artikal.sale_id}
                <td>${artikal.sold_at}
                <td>${artikal.article}
                <td>${artikal.price}
                <td>${artikal.quantity}`
            }
           app.innerHTML= htmlTabele;
           
        }
    })
}
