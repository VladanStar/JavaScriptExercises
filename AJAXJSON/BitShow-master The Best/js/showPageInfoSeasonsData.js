var seasonsDataModule = (function () {

    class Seasons {
        constructor(premiereDate, endDate) {
            this.premiereDate = premiereDate;
            this.endDate = endDate;
        }
    }     

    const createSeasons = (response) => {
        
        return response.map(seasons => {
            const { premiereDate, endDate } = seasons;
            return new Seasons(premiereDate, endDate);
        })
    }

    return {
        createSeasons
    }

})();