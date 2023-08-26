let text= document.getElementById('text');
let woman= document.getElementById('woman');
window.addEventListener('scroll', ()=>{
    let value =window.scrollY;
     console.log(value);
     if(value<240){
      
    text.style.marginTop = value * 2.5+ "px";}
    console.log(value);
     if(value<290){woman.style.left = value * 1.5+ "px";}
    
})