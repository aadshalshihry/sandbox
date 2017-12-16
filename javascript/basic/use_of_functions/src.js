// change #tag with "New Text is here..."
function changeText(){
    document.getElementById('tag').innerHTML = "New Text is here...";
}

// Get input the change the text to it
function changeTextFromInput(input){
    var text = document.getElementById('inputToChange').innerText;
    console.log(text)
}

// trying to use addEventListener
document.getElementById('inputToChange').addEventListener('keyup', function(event){
    document.getElementById('inputResult').innerHTML = event.target.value;
});
