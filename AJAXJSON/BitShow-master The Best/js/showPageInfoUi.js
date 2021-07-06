var uiModule = (function () {

    const showShowsOnPage = (show) => {

        var showName = show.title;
        var showImg = show.image;
        var showInfo = show.summary;

        $showInfo = $('#showDetails');
        $showInfo.html(showInfo);
        $ShowName = $('#showName');
        $ShowName.text(showName);
        $showImgDiv = $('#showImgDiv');
        $showIMG = $('<img>').attr("src", showImg).attr("id", "showIMG");
        $showImgDiv.append($showIMG);
    }

    const showCastOnPage = (cast) => {

        $showContent = $('#showContent');
        $cast = $('<p>').text("Cast").css("font-weight", "bold");
        $showContent.append($cast);
        $ul = $('<ul>').attr("id", "castUl");

        if (cast.length > 6) {
            cast.length = 6
        }

        for (let i = 0; i < cast.length; i++) {
            castMember = cast[i].person.name;
            $li = $('<li>').attr("class", "castLi");
            $li.text(castMember);
            $ul.append($li);
        }
        $showContent.append($ul)
    }

    const showSeasonsOnPage = (seasons) => {

        $showContent = $('#showContent');
        $seasons = $('<p>').text(`Seasons(${seasons.length})`).css("font-weight", "bold");
        $showContent.append($seasons);
        $ul = $('<ul>').attr("id", "seasonsUl");

        for (let i = 0; i < seasons.length; i++) {
            seasonStart = seasons[i].premiereDate;
            seasonEnd = seasons[i].endDate;
            $li = $('<li>').attr("class", "seasonsLi");
            $li.text(`${seasonStart} - ${seasonEnd}`)
            $ul.append($li);
        }
        $showContent.append($ul)
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
        showCastOnPage,
        showSeasonsOnPage,
        showSearchResult
    }
})();