const display = document.querySelector(".katta")
const actBtn = document.querySelectorAll(".raq")
actBtn.forEach((actBtn) => {
    actBtn.addEventListener('click', () => {
        if(actBtn.innerHTML === 'AC'){
            display.value = '';
            return
        }
        if(actBtn.innerHTML === 'DE'){
            display.value = display.value.slice(0, -1);
            return
        }
        if(actBtn.innerHTML === '='){
            display.value = eval(display.value);
            return
        }
display.value += actBtn.innerHTML;
        })
} )