

      
       

    var current = null;



    function flip(card){
        $(card).find('.front').toggleClass('latfront');
        $(card).find('.back').toggleClass('latback');
    
    console.log('this :', card);

        if(!current){
            current=$(card);
        } else{
            if (current.attr('data-name') !=$(card).attr('data-name')) {
                console.log('khac roi nhe');
            } else {
                console.log('yeah');
            }
            
        
    
    
    }
}


    var hopanh = ['f1', 'f2', 'f3', 'f4'];

    hopanh = hopanh.concat(hopanh);

   

    var anh = "";
    for(i=0;i<hopanh.length;i++){
        
        anh+=  '<div class="card" data-name=" ' + hopanh[i]+ ' "  onclick="flip(this)"><div class="front"><img src="photo/'+hopanh[i]+'.jpg"></div><div class="back"><img src="photo/back.jpg"></div></div></div>';
             

    };
        
         $('.content').html(anh);   

      

    