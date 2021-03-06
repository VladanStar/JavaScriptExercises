function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska);
                razresi();
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

function prikaziSve() {
    prikaziNisku("A");
    prikaziNisku("Б");
    prikaziNisku("В");
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziSve();

function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska);
                razresi();
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

function prikaziTriRedom() {
    prikaziNisku("А")
        .then(() => {
            return prikaziNisku("Б")
        })
        .then(() => prikaziNisku("В"));
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziTriRedom();