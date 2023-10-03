//Event listeners
// element.addEvenlister("click,function")

const startButton = document.querySelector('#start_btn')

function alertBtn() {
    alert('testing'); 
}

startButton.addEventListener("click", alertBtn);
