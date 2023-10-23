let lstButtons = document.querySelectorAll('button');
let display = document.querySelector("#display");

for (let button of lstButtons) {
    button.addEventListener('click', function() {

        display.value = button.value;
    });
}

