let colors =['pink','red','yellow','green','blue','brown','aqua','black'];
let button = document.getElementById('click');
let container =document.getElementById('container');
button.addEventListener('click',function(){
    // console.log('hi')
     var randomColors = colors[Math.floor(Math.random() * colors.length)]
    //  console.log(randomColors)
     
     container.style.background =randomColors;

})
