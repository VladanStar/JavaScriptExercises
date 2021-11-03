window.addEventListener("load", main);

function obradaElementa(el) {
    return el.a + el.b;
}

function main() {
  let str = '[{"a":10.1,"b":3.12},{"a":22.3,"b":1.1},{"a":-7.0,"b":0.01},{"a":7.4,"b":12.9}]';
    
  let niz = JSON.parse(str);
    let minimum = Number.MAX_VALUE;
    let maximum = Number.MIN_VALUE;
    let suma = 0;
    for (let el of niz) {
        let rez = obradaElementa(el);

        if (rez < minimum) {
            minimum = rez;
        }
        if (rez > maximum) {
            maximum = rez;
        }
        suma += rez;
    }
    let average = suma / niz.length;
    document.getElementById('minimum').innerHTML = minimum;
    document.getElementById('maximum').innerHTML = maximum;
    document.getElementById('average').innerHTML = average
}
