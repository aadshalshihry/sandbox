// trying to use addEventListener

document.getElementById('inputToChange').addEventListener('keyup', function(event){
    document.getElementById('inputResult').innerHTML = event.target.value;
});
