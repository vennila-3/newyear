
const days=document.querySelector("#day")
const hour=document.querySelector("#hrs")
const min=document.querySelector("#min")
const sec=document.querySelector("#sec")
const n=new Date().getFullYear();
const newyear=new Date(`january 1 ${n+1} 00:00:00`)  //00::00::00 countdown will stop
console.log(newyear);
function newo(){
    curr=new Date();
    diff=newyear-curr;
    d=Math.floor(diff/1000/60/60/24)  //1day=24hrs 1hr=60m 1m=60s 1000ms=1s
    h=Math.floor((diff/1000/60/60)%24)
    m=Math.floor((diff/1000/60)%60)
    s=Math.floor((diff/1000)%60)
    ms=Math.floor((diff/1000)%60)
    days.innerHTML=d<10?"0"+d:d;
    hour.innerHTML=h<10?"0"+h:h;
    min.innerHTML=m<10?"0"+m:m;
    sec.innerHTML=s<10?"0"+s:s;
}
setInterval(newo,100);