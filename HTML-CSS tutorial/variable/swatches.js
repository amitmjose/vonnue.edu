var swatches = document.querySelectorAll('.swatches span');
var root = document.querySelector(':root');
console.log(swatches)

swatches.forEach((swatch)=>{
    swatch.addEventListener('click',(e)=>{
        root.style.setProperty('--thmecolr',e.target.style.background);
    })
})