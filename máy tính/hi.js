
var push = caculator.hienthi;

var kq = caculator.ketqua;

function display(num){
    
    push.value     +=num;
    
    
}
function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
function power(){
    
}


function result(){
    var per= push.value.indexOf("%");
    var fac= push.value.indexOf("!");
    var pow = push.value.indexOf("^");
    
    if (pow<1 && per < 1 && fac < 1){
        kq.value = eval(push.value);
    }
    if(per >0 && fac <1 && pow <1 ){
        re = push.value.replace(/%/g,"/100");
        kq.value = eval(re);
    }
    if(fac > 0 && per <1 && pow <1){
        
        for(i=0;i<push.value.length;i++){
            if(push.value[i]=="!"){
                re = push.value.replace(/[^a-z]!/g,factorial(push.value[i-1]));
                kq.value=eval(re);
            }
        }
    }
    if(fac > 0 && per >0 && pow <1){
    
            
            for(i=0;i<push.value.replace(/%/g,"/100").length;i++){
                
                if(push.value.replace(/%/g,"/100")[i]=="!"){
                   var re2 = push.value.replace(/%/g,"/100").replace(/[^a-z]!/g,factorial(push.value.replace(/%/g,"/100")[i-1]));
                   
                   
                   console.log(re2);
                
                   kq.value=eval(re2);
            }       

        }
 
    }




}


function backSpace(){
    push.value = push.value.slice(0, - 1);
}
function hello(){
    kq.value = "Hello Mình là Tùng";
}
      


function reset(){
    kq.value = "";
    push.value = "";
}

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}

function changeTheme(){

   var color = "#" + Math.floor((Math.random()*999)+1);
   $('#body').css('background-color',color);
   console.log(color);
    
   
    
 








}




