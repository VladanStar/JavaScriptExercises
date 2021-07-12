let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let obj = JSON.parse(this.responseText);
    let productsEl = document.getElementById("products");
    let html = "";
    console.log(obj);
    obj.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });

    for (let i = 0; i < obj.length; i++) {
      html +=
        "<div class='col-md-4' class='card-items'>" +
        "<div class='card'>" +
        "<img src='" +
        obj[i].image +
        "' alt=''>" +
        "<div class ='card-body'>" +
        "<h5 class='card-title'>" +
        obj[i].name +
        "</h5>" +
        "<p class='card-text'>$" +
        obj[i].price +
        "</p>" +
        "<button onclick ='addToCard(this)' class ='btn btn-primary' id ='" +
        obj[i].id +
        "'>Add to Cart</button>" +
        "<button onclick ='seeMore(this)' class ='btn btn-info' id ='" +
        obj[i].id +
        "' data-bs-toggle='modal' data-bs-target='#seeMoreModal'" +
        obj[i].id +
        "'>See More</button>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    productsEl.innerHTML = html;
  }
};
xhttp.open("GET", "https://60db8b72801dcb00172911e7.mockapi.io/products", true);
xhttp.send();

let totalPrice = 0;
let itemAllreadyAdded = false;

function addToCard(el) {
  let id = el.getAttribute("id");

  if (!itemAllreadyAdded) {
    document.getElementById("myCard").innerHTML =
      "<div class=row>" +
      "<div class='col-md-9'><h3>Your cart items</h3></div>" +
      "<div class='col-md-3'><b>Total: </b>$<span id='totalPrice'></span></div>" +
      "</div>";
    itemAllreadyAdded = true;
  }
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      document.getElementById("myCard").innerHTML +=
        "<div class='row' id='cart-item-" +
        obj.id +
        "' >" +
        "<div class='col-md-4'><b>Product name: </b>" +
        obj.name +
        "</div>" +
        "<div  class='col-md-3'><b>Material: </b>" +
        obj.material +
        "</div>" +
        "<div  class='col-md-2'><b>Price: </b>" +
        obj.price +
        "$</div>" +
        "<div   class='col-md-2'><button onclick ='removeForCart(this)' class='btn btn-danger' type='button' data_product_id='" +
        obj.id +
        "' data_price='" +
        obj.price +
        "'>Remove from card</button></div>" +
        "</div>";

      totalPrice += parseFloat(obj.price);
      document.getElementById("totalPrice").innerText = totalPrice;
    }
  };

  xhttp.open(
    "GET",
    "https://60db8b72801dcb00172911e7.mockapi.io/products/" + id,
    true
  );

  xhttp.send();

  console.log(id);
}

function seeMore(el) {
  let id = el.getAttribute("id");

  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      document.getElementById("productDetails").innerHTML =
        "<p>" +
        obj.description +
        "</p>" +
        "<p>Price: <b>" +
        obj.price +
        "$</b></p>";
    }
  };

  xhttp.open(
    "GET",
    "https://60db8b72801dcb00172911e7.mockapi.io/products/" + id,
    true
  );

  xhttp.send();
}
function removeForCart(el) {
  let id = el.getAttribute("data_product_id");

  document.getElementById("cart-item-" + id).remove();
  console.log(id);
  let total = parseInt(document.getElementById("totalPrice").innerText);
  total = total - parseInt(el.getAttribute("data_price"));
  document.getElementById("totalPrice").innerText = total;
  console.log(total);
}
