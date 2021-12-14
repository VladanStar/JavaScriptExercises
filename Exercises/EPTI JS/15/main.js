function innerHTMLEscaped(input){
    var escaped = input
    .replace(/&/g, '&amp')
    .replace(/</g, '&lt')
    .replace(/>/g, '&gt');
    var element = document.createElement('div');
    element.innerHTML = '<b>' + escaped + '</b>';
    return element
}
