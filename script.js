const prev = document.querySelectorAll('.slideleft')[0]
const next = document.querySelectorAll('.slideright')[0]
const slidewrap = document.querySelectorAll('.slidewrap')[0]
let currentidx = 0;
let slidecount = 5;

function moveslide(num) {
    slidewrap.style.left = -num * 960 + 'px';
    currentidx = num;
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