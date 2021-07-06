var showDataModule = (function () {

    class Show {
        constructor(title, image, summary) {
            this.title = title;
            this.image = image;
            this.summary = summary;
        }
    }

    const createShow = (response) => {
            const { name, image, summary } = response;  
            
        return new Show(name, image.original, summary);;
    }

    return {
        createShow
    }

})();