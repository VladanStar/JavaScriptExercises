var uiModule = (function () {

    function showShowsOnPage(shows) {
        for (let i = 0; i < 48; i++) {
            var showName = shows[i].title;
            var showImg = shows[i].image;
            var showID = shows[i].id;

            $div = $("<div>").addClass("showDiv").attr("id", showID);
            $img = $("<img>").attr("src", showImg).attr("id", showID).attr("class", "clickable");
            $($div).append($img);
            $p = $("<p>").append(showName).attr("id", showID);
            $($div).append($p);
            $('#popularShows').append($div);
        }
    }
    
    const showSearchResult = (searchedShows) => {
        if (searchedShows.length > 10) {
            searchedShows.length = 10;
        }
        if ($div) {
            $div.remove()
        }

        $ssd = $('.searchedShowsDiv');
        $ssd.css("left", $('.search').position().left + "px")
        $div = $("<div>").addClass("searchedShowsDivInner");
        for (let i = 0; i < searchedShows.length; i++) {
            let showName = searchedShows[i].show.name;
            let showid = searchedShows[i].show.id;
            $p = $('<p>').attr("id", showid).text(showName);
            $div.append($p);
        }
        $ssd.append($div);
    }

    return {
        showShowsOnPage,
        showSearchResult
    }

})();