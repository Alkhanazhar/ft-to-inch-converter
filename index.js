var feet=document.getElementById("feet");
var inch=document.getElementById("inch");


feet.addEventListener('input',function(){
    let f=this.value;
    let i=f*12+" gitin";
  inch.value=i;
    console.log(i)
});
inch.addEventListener('input',function(){
    let i=this.value;
    let f=i/12+" ft";
    feet.value=f;
});

