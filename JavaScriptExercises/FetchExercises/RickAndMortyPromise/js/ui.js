export const goNext = () => $(".next")
export const goPrevious = () => $(".previous");
export const buttonLeft = () => document.querySelector(".but1>a");
export const buttonRight = () => document.querySelector(".but3>a");
export const buttonCenter = () => document.querySelector(".but2>a");
const $loading = document.querySelector(".loading")



//*****     HomePage     *****//

export const renderAllCharacters = (data) => {

    const button = document.querySelector(".but1>a");
    const button3 = document.querySelector(".but3>a");
    const button2 = document.querySelector(".but2>a");
    localStorage.setItem("id", button.textContent);
    localStorage.setItem("id2", button3.textContent);
    localStorage.setItem("id3", button2.textContent);
    let $div = $(".main");
    $div.html("");
    let $img = "";

    $(data.results).each(function (element) {
        $img +=

            `<div class="col" lg-4>
            <a href="profile.html?=${this.id}">
               <div class="card" style="width: 18rem;">
                <img src="${this.image}" class="card-img-top" alt="...">
                 <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <a href="#" class="btn btn-outline-success">Like</a>
                </div>
              </div>
             </a>  
             </div>
            `
    });
    $div.append($img);
    $(".btn-outline-success").on("click", function () {
        $(this).toggleClass("active");
    })
    $loading.className="none"
}

//*****     Pagination     *****//

export const pagination = (counter) => {
    let button = document.querySelector(".but1>a");
    button.style.display = "block";
    let button2 = document.querySelector(".but2>a");
    let button3 = document.querySelector(".but3>a");
    button3.style.display = "block";
    let number = button.innerHTML;
    let number2 = button2.innerHTML;
    let number3 = button3.innerHTML;

    if (number >= 0 && number < 31) {
        let a = Number(number) + counter;
        let b = Number(number2) + counter;
        let c = Number(number3) + counter;
        if (a === 0) {
            displayButton()
        }
        if (c === 31) {
            button3.style.display = "none";
        }
        button.textContent = a;
        button2.textContent = b;
        button3.textContent = c;
    }
}

export const displayButton = () => {
    let button = document.querySelector(".but1>a");
    button.style.display = "none";
}

//*****     AboutPage     *****//

export const renderSingleCharacter = (data) => {
    const $name = document.createElement("h4");
    const $div = document.querySelector(".character");
    $name.textContent = data.name;
    const $div1 = document.createElement("div");


    const $ul = document.createElement("ul");
    $ul.className = "profileul";

    const $img = document.createElement("img");
    $img.setAttribute("src", data.image);
    $img.className = "profileimg"

    const $span1 = document.createElement("span");
    const $span2 = document.createElement("span");
    const $span3 = document.createElement("span");
    const $span4 = document.createElement("span");
    const $span5 = document.createElement("span");

    $span1.textContent = "Status";
    $span2.textContent = "Species";
    $span3.textContent = "Gender";
    $span4.textContent = "Origin";
    $span5.textContent = "Location";

    const $p1 = document.createElement("p");
    const $p2 = document.createElement("p");
    const $p3 = document.createElement("p");
    const $p4 = document.createElement("p");
    const $p5 = document.createElement("p");

    $p1.textContent = data.status;
    $p2.textContent = data.species;
    $p3.textContent = data.gender;
    $p4.textContent = data.origin.name;
    $p5.textContent = data.location.name;


    const $status = document.createElement("li")
    const $species = document.createElement("li");
    const $gender = document.createElement("li");
    const $origin = document.createElement("li");
    const $location = document.createElement("li");

    $status.appendChild($span1);
    $status.appendChild($p1);
    $species.appendChild($span2);
    $species.appendChild($p2);
    $gender.appendChild($span3);
    $gender.appendChild($p3);
    $origin.appendChild($span4);
    $origin.appendChild($p4);
    $location.appendChild($span5);
    $location.appendChild($p5);

    $ul.appendChild($status);
    $ul.appendChild($species);
    $ul.appendChild($gender);
    $ul.appendChild($origin);
    $ul.appendChild($location);
    $div1.appendChild($img);
    $div1.appendChild($name);
    $div.appendChild($div1);
    $div.appendChild($ul);

    $loading.className="none"
}

/*******************    Loading     *******************/

export const loading = () => {

    $loading.innerHTML =
        ` <div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
</div>`;
}