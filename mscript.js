const prev = document.querySelectorAll('.slideleft')[0]
const next = document.querySelectorAll('.slideright')[0]
const slidewrap = document.querySelectorAll('.slidewrap')[0]
let currentidx = 0;
let slidecount = 5;

function moveslide(num) {
    slidewrap.style.left = -num * 375 + 'px';
    currentidx = num;
    
    for(var i=0 ; i<slidecount ; i++) {
        const circle = document.querySelector(`.circle .c1:nth-child(${i+1})`);
        if(i == num) circle.style.backgroundColor = 'red';
        else circle.style.backgroundColor = 'white';
    }
}

prev.addEventListener('click', function() {
    if(currentidx !== 0) moveslide(currentidx - 1);
    else moveslide(slidecount - 1);
});

next.addEventListener('click', function() {
    if(currentidx !== slidecount - 1) {
        moveslide(currentidx + 1);
    }
    else moveslide(0);
})