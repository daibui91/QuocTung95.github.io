var anh = "";
var hopanh = ['f1', 'f2' ,'f3','f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'];


var current = null;
var count = 0;
var time = 60;
let run;
var ting = document.getElementById("ting");
var victory = document.getElementById("victory");
var lose = document.getElementById("lose");
var x2 = hopanh.concat(hopanh);


// function am thanh ne
function playting() {
    ting.play();
}
function playvictory() {
    victory.play();
}
function playlose() {
    lose.play();
}
// Hàm đảo vị trí các phần tử trong mảng

// Hàm đảo vị trí các phần tử trong mảng
// Tham khảo http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}


// ghép tên ảnh vào html
shuffle(x2)


for (i = 0; i < x2.length; i++) {

    anh += '<div class="card" data-name=" ' + x2[i] + ' "  onclick="flip(this)"><div class="front"><img src="photo/' + x2[i] + '.jpg"></div><div class="back"><img src="photo/back.jpg"></div></div></div>';

};

$('.content').html(anh);
    ;



$('.easy').click(function (e) {
    run = setInterval(function () {

        time--;
        console.log(time);
        if (time == 0) {
            clearInterval(run);
            playlose();
            $('.time').addClass('stop');
            $('.card').addClass('flipped');
            $('.card').removeClass('andi');

            $('.again').addClass('choilai');
            $('.momo').removeClass('momo-andi');
            count = 0;
            time = 60;
            current = null;
            $('.card').css('pointer-events', 'auto');

        }



    }, 1000);



});




$('.easy').click(function (e) {
    $('.momo').addClass('momo-andi');
    $('.time').addClass('start');

    $('.chucmung').removeClass('chucmung-hienra');

    // $('.momo').removeClass('momo-hienra');
    $('.option').removeClass('option-hienra');
    // $('.again').removeClass('choilai');
    // $('.time').addClass('start');
    $('.option').addClass('option-bienmat');
    // $('.momo').addClass('momo-andi');  
    $('.again').removeClass('again-andi');

});


$('.hinhtron').click(function (e) {

    $('.time').removeClass('stop');
    $('.time').removeClass('start');
    $('.card').removeClass('flipped');
    $('.card').removeClass('andi');
    $('.again').removeClass('choilai');

    $('.again').addClass('again-andi');
    // $('.card').removeClass('flipped');

    // $('.momo').addClass('momo-hienra');
    $('.option').addClass('option-hienra');
    // $('.momo').removeClass('momo-andi');
    // $('.time').removeClass('start');
    $('.option').removeClass('option-bienmat');



});


// so sánh lật bài





function flip(card) {
    $(card).addClass('flipped');
    if (!current) {
        current = $(card);
        current.css('pointer-events', 'none');
    } else {
        if (current.attr('data-name') != $(card).attr('data-name')) {
            $('.card').css('pointer-events', 'none');
            setTimeout(() => {

                current.removeClass('flipped');
                $(card).removeClass('flipped');
                current.addClass('flip-off');
                $(card).addClass('flip-off');


                $('.card').css('pointer-events', 'auto');

                current = null;


            }, 800);


        } else {
            setTimeout (()=> {
                playting();
                $(card).addClass('andi');
                current.addClass('andi');
                count++;
                current = null;


            },500);
         

           
            console.log(count)

            if (count === 12) {
                playvictory();

                clearInterval(run);
                count = 0;
                time = 60;
                current = null;
                $('.card').css('pointer-events', 'auto');
                $('.time').addClass('stop');


                $('.chucmung').addClass('chucmung-hienra');
                $('.momo').removeClass('momo-andi');

                $('.again').addClass('choilai');
                // $('.card').removeClass('andi');
                // $('.card').removeClass('flipped');
                // $('.time').addClass('time-andi');


            }

        }

    }
}










