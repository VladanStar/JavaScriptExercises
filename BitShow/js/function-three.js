export const functionThree = (function () {

    const newXHR = new XMLHttpRequest();
    newXHR.open('GET', 'http://api.tvmaze.com/shows/' + showId + '/seasons');

    newXHR.onload = function () {
        console.log(JSON.parse(newXHR.responseText));
        data = JSON.parse(newXHR.responseText);
        console.log(data.length);
        console.log(data[0].premiereDate + ' - ' + data[0].endDate);


    }

    newXHR.send();

})();