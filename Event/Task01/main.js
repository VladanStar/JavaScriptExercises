var grandparent = document.querySelector(".grandparent");
var parent = document.querySelector(".parent");
var child = document.querySelector(".child");

grandparent.addEventListener('click', e => {
    console.log('Grandparent 1');
},
{capture:true}
)

parent.addEventListener('click', e => {
    console.log('Parent 1');
})

child.addEventListener('click', e => {
    console.log("Child 1");
})
document.addEventListener('click',e => {
    console.log("document 1");
})