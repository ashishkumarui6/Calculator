let string = ""

let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('.screen_tab').value = string;
    });
});



