function copyContents(from, to){
    for (var i=0; i<from.childNodes.length;i++){
        to.appendChild(from.childNodes[i]);
    }
}
var referenceBox = document.createElement('div');
var link = document.createElement('a');
link.href = "https://www.example.com/";
link.textContent = 'A link';
referenceBox.appendChild(link);

for(var i=0; i<5;i++){
    var newBox = document.createElement('div');
    copyContents(referenceBox, newBox);
    document.body.appendChild(newBox)
}
// a link href has to be set
//  using setAttribute() setting the property 