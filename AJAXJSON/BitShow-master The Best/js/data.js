var dataModule = (function () {

    class Show {
        constructor(title, image, id, rating) {
            this.title = title;
            this.image = image;
            this.id = id;
            this.rating = rating;
        }
    }

    const createShows = (response) => {

         return response.map(show => {
            const { name, image, id, rating } = show;
            return new Show(name, image.medium, id, rating.average);
        })
         
    }

    return {
        createShows: createShows
    }
})();