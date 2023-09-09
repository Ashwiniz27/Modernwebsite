const circle=document.querySelector('#circle');
window.addEventListener('mousemove',function(details) {
    let xValue =details.clientX;
    let yValue =details.clientY;
    setTimeout(() => {
    circle.style.top = `${yValue}px`;
    circle.style.left = `${xValue}px`;
    },50);
    
})

