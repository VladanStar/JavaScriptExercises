(function () {

    const showId = window.location.search.split('=')[1];

    const newXHR = new XMLHttpRequest();
    newXHR.open('GET', 'http://api.tvmaze.com/shows/' + showId);


    newXHR.onload = function () { //.onload gets called when the data is back and successful
        console.log(JSON.parse(newXHR.responseText));

        data = JSON.parse(newXHR.responseText);

        //Info page title (h1) and container:
        let infoPageContainer = document.querySelector('.container');

        let showTitle = document.createElement('h1');
        infoPageContainer.append(showTitle);

        showTitle.textContent = data.name;


        //Creating elements - first row:
        let firstInfoRow = document.createElement('div');
        firstInfoRow.className = 'row firstInfoRow';

        let imgWrapper = document.createElement('div');
        imgWrapper.className = 'col-lg-6 imgWrapper';

        let showImg = document.createElement('img');

        let textWrapper = document.createElement('div');
        textWrapper.className = 'col-lg-6 textWrapper';

        let seasonsNumber = document.createElement('h2');

        let seasonsUnorderedList = document.createElement('ul');
        let seasonsListItems = document.createElement('li');

        let cast = document.createElement('h2');

        let castUnorderedList = document.createElement('ul');
        let castListItems = document.createElement('li');

        //Creating elements - second row:
        let secondInfoRow = document.createElement('div');
        secondInfoRow.className = 'row secondInfoRow';

        let showDetails = document.createElement('h2');
        let showDescription = document.createElement('p');


        //Appending elements - first row:
        infoPageContainer.append(firstInfoRow);

        firstInfoRow.append(imgWrapper);
        imgWrapper.append(showImg);

        firstInfoRow.append(textWrapper);
        textWrapper.append(seasonsNumber);
        textWrapper.append(seasonsUnorderedList);
        seasonsUnorderedList.append(seasonsListItems);

        textWrapper.append(cast);
        textWrapper.append(castUnorderedList);
        textWrapper.append(castListItems);

        //Appending elements - second row:
        infoPageContainer.append(secondInfoRow);

        secondInfoRow.append(showDetails);
        secondInfoRow.append(showDescription);


        //Adding content to elements - first row:
        showImg.setAttribute('src', data.image.original);


        //Adding content to elements - second row:
        showDescription.innerHTML = data.summary;
    }

    newXHR.send();



    const newXHRTwo = new XMLHttpRequest();
    newXHRTwo.open('GET', 'http://api.tvmaze.com/shows/' + showId + '/seasons');

    newXHRTwo.onload = function () {
        console.log(JSON.parse(newXHRTwo.responseText));
        dataTwo = JSON.parse(newXHRTwo.responseText);
        console.log(dataTwo.length);
        console.log(dataTwo[0].premiereDate + ' - ' + dataTwo[0].endDate);

        let a = document.createElement('di')
        let seasonsNumber = document.createElement('h2');


        seasonsNumber.textContent = 'Seasons(' + dataTwo.length + ')';
        console.log(seasonsNumber);



    }

    newXHRTwo.send();

})();