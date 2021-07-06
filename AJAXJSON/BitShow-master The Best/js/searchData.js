var searchDataModule = (function () {
    class SearchShow {
        constructor (name, id) {
            this.name = name;
            this.id = id;
        }
    }

    const createSearchData = (response) => {
        return response.map(show => {
            return new SearchShow(show.show.name, show.show.id);
        });
    }

    return {
        createSearchData
    }

})();