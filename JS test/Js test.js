// Thay đổi fontsix=ze
function changeFontSize(n) {
    var x= document.querySelectorAll("p");
    console.log(x);
    for(i=0;i<x.length;i++){
        x[i].style.fontSize=n +"px";
    }
}
// tăng fonsize ko quá 30px
function increaseFontSize(n){
    var x = document.querySelectorAll("p");
    for(i=0;i<x.length;i++){
        var size=x[i].style.fontSize;
        size = parseInt(size);
        if(size>=30){
        
            x[i].style.fontSize=30+ "px";
        
        }
        else if(size<30 && i ==n ){
            x[i].style.fontSize=size+1 + "px";
       }

    }
}
// giảm fontsize ko dưới 10px
function decreaseFontSize(n){
    var x = document.querySelectorAll("p");
    for(i=0;i<x.length;i++){
        var size=x[i].style.fontSize;
        size = parseInt(size);
        if(size<=10){
        
            x[i].style.fontSize=10+ "px";
        
        }
        else if(size>10 && i ==n ){
            x[i].style.fontSize=size-1 + "px";
       }

    }
}
// đổi màu 3 đoạn văn xanh - vàng - đỏ
function changeColor(x,y,z){
    var arr = document.querySelectorAll("p");
    for(i=0;i<arr.length;i++){
        if(i==x){
            arr[i].style.color= 'blue';
        }
        else if(i==y){
            arr[i].style.color= 'yellow';

        }
        else if(i==z){
            arr[i].style.color= 'red';  
        }

    }
}

// thay đổi màu nền
function changeBgColor(str){

    document.querySelector('body').style.backgroundColor = str ;

}

// coppy nội dung

function coppy(x,y){
    var ar=document.querySelectorAll('p');
    for(i=0;i<ar.length;i++){
        console.log(i);
        ar[x].innerHTML=ar[y].innerHTML;
    }

}