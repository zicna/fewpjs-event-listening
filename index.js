
const input = document.getElementsByTagName('input')[0]

function addingEventListener() {
    input.addEventListener('click', function(event){
        alert('I was clicked');
    })
}
