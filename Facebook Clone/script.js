var leftcard = 1;
var a = document.getElementsByClassName("left_button");
var b = document.getElementsByClassName("right_button");
if(leftcard==1)
{
    a[0].style.display = "none";
}
var s=0;




function slide(n)
{
 leftcard+=n;
 
 var x= document.getElementsByClassName("story");
 if(leftcard+4==x.length)
 {
    b[0].style.display = "none"
   
 }else
 {
    b[0].style.display = "block"
 }
 if(leftcard>1)
 {

    a[0].style.display = "block";
 }
 else{
    a[0].style.display = "none";
 }
//  if(n==1){
//          x[leftcard-2].style.display = "none";
//         }
//     if(n==-1){
//         x[leftcard-1].style.display = "block";
//        }
 var i;
 if(n==1){

   s-=120;
     for(i=0; i<x.length; i++)
        {
         //  var s=-120*(leftcard-1);
         x[i].style.transform ="translateX("+s+"px)";
        }
    }
if(n==-1){
   s+=120;
    for(i=0; i<x.length; i++)
        {
         // var s=120*(leftcard-2);
         x[i].style.transform ="translateX("+s+"px)";
        }
}

}

var n = document.getElementsByClassName("middle_iconbuttons");
var m = document.getElementsByClassName("iconbottombar");
m[0].style.height = "3px";
function switchnavoption(p)
{
   for(i=0; i<m.length; i++)
        {
         m[i].style.height = "0px";
        }

        m[p].style.height = "3px";
}