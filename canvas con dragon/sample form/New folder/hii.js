     
     // Khai báo ngữ cảnh chung ( 2D)
     var canvas = document.getElementById('my-canvas');
     var vatcanduoi = [];
     var vatcantren = [];
     context = canvas.getContext("2d");
     var img = document.getElementById('swing');
     

     //thiết lập độ rộng canvas
     canvas.width = 1000;
     canvas.height =400;
     var conrong;

     // start game

     function start(){
        
        
        // conrong = new me(20, 150, "swing-copters-2-spinki-falling", 30, 30, "image");
        conrong = new me(100, 150, 'red', 30, 30);
        conrong.ve();
        

        area.startGame();
       
     }


     // tạo vùng game
     var area = {

        startGame : function(){
            this.capnhat20x = setInterval(update,10);
            window.addEventListener('keyup',function(e){
               if(e.keyCode==38){
                   if(conrong.y<=0){conrong.y == 50}
                   else{ conrong.y += -60}
               }
            });
            this.frameNo =0;

        },
        clear : function() {
            this.context = canvas.getContext('2d');
            this.context.clearRect(0, 0, innerWidth, innerHeight);
            
        },
        stop : function() {
            clearInterval(this.capnhat20x);
        }
        
     }

     function everyinterval(n) {
        if ((area.frameNo / n) % 1 == 0) {return true;}
        return false;
    }

     // tạo conductor

     function me(x, y, color, a, b, type){
         this.type = type;
         if (type == "image") {
            this.image = new Image();
            this.image.src = color;
          }
        
        this.width = a;
        this.height = b;
        this.x = x;
        this.y = y; 
        this.color = color;
        this.speedx = 0;
        this.speedy = 0;
        
        this.ve = function(){
            this.context = canvas.getContext('2d');
            if (type == "image") {
                this.context.drawImage(this.image, 
                    this.x, 
                    this.y,
                    this.width, this.height);
            }else{
                        this.context.fillStyle = this.color;
                        this.context.fillRect(this.x, this.y, this.width, this.height); 
                  }
            
        },

        this.crackduoi = function(otherduoi){
            var left = this.x;
            var right = this.x + (this.width);
            // var top = this.y;
            var bottom = this.y + (this.height);
            var otherduoileft = otherduoi.x;
            var otherduoiright = otherduoi.x + (otherduoi.width);
            var otherduoitop = otherduoi.y;
            // var otherduoibottom = otherduoi.y + (otherduoi.height);
            var cash = true;
            if ((bottom < otherduoitop)|| (right < otherduoileft) || (left > otherduoiright)){
                return false;
            }
            return cash;
        }
        this.cracktren = function(othertren){
            var left = this.x;
            var right = this.x + (this.width);
            var top = this.y;
            // var bottom = this.y + (this.height);
            var othertrenleft = othertren.x;
            var othertrenright = othertren.x + (othertren.width);
            // var othertrentop = othertren.y;
            var othertrenbottom = othertren.y
            var cash = true;
            if ((top > othertrenbottom)|| (right < othertrenleft) || (left > othertrenright)){
                return false;
            }
            return cash;
        }
             
    }
    //  function anh(x,y,src,a,b){
    //     this.width = a;
    //     this.height = b;
    //     this.x = x;
    //     this.y = y; 
    //     this.anh = src;
    //     this.image = new Image();
    //     this.image.src = src;
    //     this.context = canvas.getContext('2d');
        
    //         this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
            
    //  }
     


     // update game

     function update(){
        area.frameNo += 1;
        var gap = 80;
        var h = canvas.height;
        
        var y = Math.floor(Math.random()*300);
        // m=h-y-gap;

        area.clear();


        for (i = 0; i < vatcanduoi.length; i += 1) {
            if (conrong.crackduoi(vatcanduoi[i])) {

                area.stop();
                
            }
            
        }
        for (j = 0; j < vatcantren.length; j += 1) {
            if (conrong.cracktren(vatcantren[j])) {

                area.stop();
                
            }
            
        }
        if(area.frameNo == 1 || everyinterval(150)){
            vatcanduoi.push(new me (970, y+gap, 'blue', 30, h-y-gap));
            vatcantren.push(new me (970, y-gap, 'blue', 30, -1000));

        }
        for (i = 0; i < vatcanduoi.length; i += 1){
            vatcanduoi[i].x += -3;

            vatcanduoi[i].ve();

        }
        for (j = 0; j < vatcantren.length; j += 1){
            vatcantren[j].x += -3;

            vatcantren[j].ve();
        }
        if(conrong.y==370){
            area.stop();
        }

        conrong.y += 2;
        conrong.ve();  
}
         

     


    