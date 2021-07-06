var ctrlModule = (function (data, showData, seasonsData, castData, ui, searchData) {

    const showID = localStorage.getItem("index");
    const init = () => {
        showPageInfo();
        getAll();
        getData();
        search();
        removeSearchDiv();
    }

    const showPageInfo = () => {
            $(document).on("click", function (event) {
                const eventID = parseInt(event.target.id);

                if (isNaN(eventID) === false) {
                    localStorage.setItem("index", event.target.id)
                    window.location = "showInfoPage.html";
                }

            });

    }

    const getAll = () => {
        const request = $.ajax({
            url: `https://api.tvmaze.com/shows/${showID}?embed[]=seasons&embed[]=cast`
        })

        request.done((response) => {
            const show = showData.createShow(response);
            const cast = castData.createCast(response._embedded.cast);
            const seasons = seasonsData.createSeasons(response._embedded.seasons);
            ui.showShowsOnPage(show);
            ui.showCastOnPage(cast);
            ui.showSeasonsOnPage(seasons);
        })

    }

    const getData = () => {
        const request = $.ajax({
            url: `https://api.tvmaze.com/shows`
        })

        request.done((response) => {
            const shows = data.createShows(response);
            ui.showShowsOnPage(shows);
        })
    }

    const search = () => {

        var word = "";
        $('.search').keydown(event => {
            if (event.originalEvent.key === "Backspace") {
                word = word.slice(0, -1);
            }
        })

        $('.search').keypress(function (event) {
            if (event.originalEvent.code === "Enter" || event.originalEvent.code === "NumpadEnter") {
                const request = $.ajax({
                    url: `https://api.tvmaze.com/search/shows?q=${word}`
                })

                request.done((response) => {
                    const searchShows = searchData.createSearchData(response);
                    ui.showSearchResult(response);
                })

                word = "";
                $('.search').val("")

            } else {
                let char = event.originalEvent.key;
                word += char;

            }
        })

    }

    const removeSearchDiv = () => {

        $div = $("searchedShowsDivInner")
        $(document).on("click", function (event) {
            if ($div) {
                $div.remove()
            }       
        })
    }

    return {
        init
    }

})(dataModule, showDataModule, seasonsDataModule, castDataModule, uiModule, searchDataModule);