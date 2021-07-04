const rankingBody = document.querySelector("#ranking-table > tbody");


    function loadRankings(){
const request = new XMLHttpRequest();
request.open("GET","data/ranking.json", true);
request.onload = () => {
    try{
    const json = JSON.parse(request.responseText);
    populateRanking(json);
}
catch(error){
    console.warn("Could not");
}
};
request.send();
}
    function populateRanking(json){
        console.log(json);
while(rankingBody.firstChild){


    rankingBody.removeChild(rankingBody.firstChild)
}

// populate table
json.forEach((row)=>{
    const tr = document.createElement("tr");
  row.forEach((cell) => {
     
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
  });
  rankingBody.appendChild(tr);
})
    }

    document.addEventListener("DOMContentLoaded",()=> {
        loadRankings();
    })