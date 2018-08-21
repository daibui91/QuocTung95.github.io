var  dung = document.getElementById('ting');
var sai = document.getElementById('fail');
var thienNhien = document.getElementById('nature');
var applause = document.getElementById('votay');


function ting(){
    dung.play();
}
function bruzz(){
    sai.play();
}
function nature(){
    thienNhien.play();
}
function votay(){
    applause.play();
}


var combo = {
   gate1 : {
        cau1 : "Hang động lớn nhất thế giới nằm ở đâu?",
        A : "Indonesia",
        B : "Quất Lâm",
        C : "Việt Nam",
        D : "Mỹ",
        dapan : "Việt Nam"

        
    },
    gate2 :  {
        cau2 : "Có xe lửa chạy từ Hải Phòng đến Hà Nội 100km, hỏi đi được 50km thì đang ở đâu",
        A : "Ở đường ray",
        B : "ở điểm giữa Hà Nội và Hải Phòng",
        C : "Vẫn Hải phòng",
        D : "Ở Hà Nội",
        dapan : "Ở đường ray"

    },
    gate3 : {
        cau3 : "Có một đàn vịt, cho biết 1 con đi trước thì có 2 con đi sau, 1 con đi sau thì có 2 con đi trước, 1 con đi giữa thì có 2 con đi 2 bên. Hỏi đàn vịt đó có mấy con?",
        A : "A. 1",
        B : "B. 2",
        C : "C. 3",
        D : "D. 4",
        dapan : "A. 1"
    },
    gate4 : {
        cau4 : "Sở thú bị cháy, con gì chạy ra đầu tiên?",
        A : "A. con chim",
        B : "B. con rắn",
        C : "C. con người",
        D : "D. con tê giác",
        dapan : "C. con người"
    },
    gate5 : {
        cau5 : "Cha của Ly có 5 người con tên thứ Nhất, thứ Hai, thứ Ba, thứ Năm, hỏi tên của người con thứ 5 là gì?",
        A : "A. Thứ 6",
        B : "B. Ly",
        C : "C. Út",
        D : "D. Cả",
        dapan : "B. Ly"
    },
    gate6 : {
        cau6 : "Ở Việt Nam có 5% số người sử dụng điện thoại không có tên trong danh bạ điện thoại. Nếu ta lấy ngẫu nhiên 100 người trong danh bạ thì trung bình sẽ có bao nhiêu người không có số điện thoại.",
        A : "A. 0%",
        B : "B. 20%",
        C : "C. 50%",
        D : "D. 100%",
        dapan : "A. 0%"
    },
    gate7 : {
        cau7 : "Sở thú bị cháy, con gì chạy ra đầu tiên?",
        A : "A. con chim",
        B : "B. con rắn",
        C : "C. con người",
        D : "D4",
        dapan : "D. con tê giác"
    },
    gate8 : {
        cau8 : "Những loài thú nào sau đây ăn cơm:",
        A : "A. Sư tử",
        B : "B. Cọp",
        C : "C. Hà mã",
        D : "D. Voi",
        dapan : "A. Sư tử"
    },
    gate9 : {
        cau9 : "Hai chiếc xe đò (xe buýt) đụng nhau ở biên giới Việt-Hoa. Hành khách trên cả 2 xe đều là khách du lịch từ khắp năm châu như (Mỹ, Á, Âu, Úc, Phi). Sau tại nạn, những người thoát nạn nên được chôn ở nước nào?",
        A : "A. Đưa người của nước nào về nước đó.",
        B : "B. Chôn tại địa bàn sẩy ra tai nạn.",
        C : "C. Nếu người nhà người thân nào xin thì cho đưa về, nếu không thì chôn tại chỗ.",
        D : "D. Câu trả lời khác.",
        dapan : "D. Câu trả lời khác."
    },
    gate10 : {
        cau10 : "Hai câu thơ: - Lối xưa xe ngựa hồn thu thảo. - Đền cũ lâu đài bóng tịch dương. của tác giả nào?",
        A : "A. Bà Huyện thanh Quan.",
        B : "B. Hồ Xuân Hương.",
        C : "C. Đoàn Thị Điểm.",
        D : "D. Thâm Tâm.",
        dapan : "A. Bà Huyện thanh Quan."
    },
    gate11 : {
        cau11 : "Nguồn ngốc của ngày 1-5 bắt nguồn từ nước nào?",
        A : "A. Mỹ",
        B : "B. Anh",
        C : "C. Pháp",
        D : "D. Nga",
        dapan : "A. Mỹ"
    },
    gate12 : {
        cau12 : "Nếu bạn muốn sản xuất kinh doanh để tồn tại và phát triển trong cơ chế thị trường, thì con đường cơ bản phải làm gì?",
        A : "A. Sản xuất ra nhiều sản phẩm và chấp nhận bán hàng hoá theo giá thị trường.",
        B : "B. Năng động, sáng tạo, tìm đến những mặt hàng có nhiều lợi nhuận.",
        C : "C. Năng động, sáng tạo, nâng cao năng suất và chất lượng sản phẩm.",
        D : "D. Đề nghị nhà nước hỗ trợ vốn, công nghệ, thông tin và bảo hộ sản xuất.",
        dapan : "C. Năng động, sáng tạo, nâng cao năng suất và chất lượng sản phẩm."
    },
    gate13 : {
        cau13 : "Linh vật của Seagame 25 được tổ chức tại Lào là linh vật ngộ nghĩnh nào?",
        A : "A. Chú voi champa.",
        B : "B. Con trâu vàng.",
        C : "C. Hình chiếc mặt nạ.",
        D : "D. Gấu bông.",
        dapan : "A. Chú voi champa."
    },
    gate14 : {
        cau14 : "Từ nào không cùng nhóm:",
        A : "A. Đường sắt",
        B : "B. Đường bộ",
        C : "C. Đường biên",
        D : "D. Đường thủy",
        dapan : "B. Đường biên"
    },
    gate15 : {
        cau15 : "Nhà Thanh có ao bèo 1.000m2, ngày hôm sau số lượng bèo sẽ nở gấp đôi ngày hôm trước, đến ngày thứ 18 thì bèo đã nở được nửa ao. Vậy đến ngày thứ bao nhiêu thì bèo sẽ nở đầy ao?",
        A : "A. ngày thứ 1",
        B : "B. Ngày thứ 19",
        C : "C. Ngày thứ 36",
        D : "D. Ngày thứ 42",
        dapan : "B. Ngày thứ 19"
    },
    gate16 : {
        cau16 : "9 – 6 - 1; 27 – 1 - 2; 6 - 3 - ?",
        A : "A. 2",
        B : "B. 3",
        C : "C. 4",
        D : "D. 5",
        dapan : "B. 3"
    },
    gate17 : {
        cau17 : "Số tiếp theo của dãy 19, 28, 37, 46, ... là số nào? ",
        A : "A. 79",
        B : "B. 55",
        C : "C. 49",
        D : "D. 67",
        dapan : "B. 55"
    },
    gate18 : {
        cau18 : "Minh 4 tuổi, tuổi anh Minh gấp 3 lần tuổi Minh. Khi anh Minh bao nhiêu tuổi thì tuổi anh Minh chỉ còn gấp đôi tuổi Minh? ",
        A : "A. 20",
        B : "B. 18",
        C : "C. 14",
        D : "D. 16",
        dapan : "D. 16"
    },
    gate19 : {
        cau19 : "John có 10 đôi tất. Nếu anh ta mất 7 chiếc tất riêng lẻ thì số đôi nhiều nhất mà anh ta còn lại là bao nhiêu? ",
        A : "A. 6",
        B : "B. 7",
        C : "C. 3",
        D : "D. 5",
        dapan : "A. 6"
    },
    gate20 : {
        cau20 : "Một đội bóng rổ chơi được 2/3 trận đấu và đã thắng 17 bàn, thua 3 bàn. Trong suốt trận đấu còn lại đội bóng có thể thua nhiều nhất bao nhiêu mà vẫn thắng ít nhất 3/4 toàn trận đấu? ",
        A : "A. 5",
        B : "B. 4",
        C : "C. 3",
        D : "D. 7",
        dapan : "B. 4"
    },
    gate21 : {
        cau21 : "Nếu x và y là các số nguyên tố thì các giá trị nào trong các giá trị sau không thể là tổng của x và y?",
        A : "A. 9",
        B : "B. 13",
        C : "C. 16",
        D : "D. 23",
        dapan : "D. 23"
    },
    gate22 : {
        cau22 : "Tiền thuê 1 chỗ đậu xe trong gara là 10 đôla/tuần hoặc 30 đôla/tháng. Một người có thể tiết kiệm được bao nhiêu tiền trong 1 năm nếu thuê theo tháng?",
        A : "A. 140",
        B : "B. 160",
        C : "C. 240",
        D : "D. 260",
        dapan : "B. 160"
    },
    gate23 : {
        cau23 : "Hiện nay A gấp 3 lần tuổi B, sau 10 năm nữa B sẽ bằng phân nửa tuổi A. Vậy hiện nay tuổi của A là bao nhiêu?",
        A : "A. 24 tuổi",
        B : "B. 30 tuổi",
        C : "C. 36 tuổi",
        D : "D. 40 tuổi",
        dapan : "B. 30 tuổi"
    },
    gate24 : {
        cau24 : "Từ nào sau đây có thể loại bỏ? ",
        A : "A. BÀNYTA",
        B : "B. ÙIĐ",
        C : "C. AIV",
        D : "D. V0GNRÒTN",
        dapan : "D. V0GNRÒTN"
    },
    gate25 : {
        cau25 : "Khi Messi thực hiện cú sút phạt đền, anh ta sẽ sút vào đâu? ",
        A : "A. Thủ môn",
        B : "B. Khung thành",
        C : "C. Lưới",
        D : "D. Qủa bóng",
        dapan : "D. Qủa bóng"
    }
};
// var dapan = ['A0','A1','A2','A3'];
// var dodai = dapan.length;

var randomCauhoi = [combo.gate1.cau1,combo.gate2.cau2,combo.gate3.cau3,combo.gate4.cau4,
                    combo.gate5.cau5,combo.gate6.cau6,combo.gate7.cau7,combo.gate8.cau8,
                    combo.gate9.cau9,combo.gate10.cau10,combo.gate11.cau11,combo.gate12.cau12,
                    combo.gate13.cau13,combo.gate14.cau14,combo.gate15.cau15,combo.gate16.cau16,
                    combo.gate17.cau17,combo.gate18.cau18,combo.gate19.cau19,combo.gate20.cau20,
                    combo.gate21.cau21,combo.gate22.cau22,combo.gate23.cau23,combo.gate24.cau24];

var random1 = [combo.gate1.A,combo.gate2.A,combo.gate3.A,combo.gate4.A,combo.gate5.A,combo.gate6.A,combo.gate7.A,combo.gate8.A,
               combo.gate9.A,combo.gate10.A,combo.gate11.A,combo.gate12.A,combo.gate13.A,combo.gate14.A,combo.gate15.A,combo.gate16.A,
               combo.gate17.A,combo.gate18.A,combo.gate19.A,combo.gate20.A,combo.gate21.A,combo.gate22.A,combo.gate23.A,combo.gate24.A];
var random2 = [combo.gate1.B,combo.gate2.B,combo.gate3.B,combo.gate4.B,combo.gate5.B,combo.gate6.B,combo.gate7.B,combo.gate8.B,
               combo.gate9.B,combo.gate10.B,combo.gate11.B,combo.gate12.B,combo.gate13.B,combo.gate14.B,combo.gate15.B,combo.gate16.B,
               combo.gate17.B,combo.gate18.B,combo.gate19.B,combo.gate20.B,combo.gate21.B,combo.gate22.B,combo.gate23.B,combo.gate24.B];
var random3 = [combo.gate1.C,combo.gate2.C,combo.gate3.C,combo.gate4.C,combo.gate5.C,combo.gate6.C,combo.gate7.C,combo.gate8.C,
               combo.gate9.C,combo.gate10.C,combo.gate11.C,combo.gate12.C,combo.gate13.C,combo.gate14.C,combo.gate15.C,combo.gate16.C,
               combo.gate17.C,combo.gate18.C,combo.gate19.C,combo.gate20.C,combo.gate21.C,combo.gate22.C,combo.gate23.C,combo.gate24.C];
var random4 = [combo.gate1.D,combo.gate2.D,combo.gate3.D,combo.gate4.D,combo.gate5.D,combo.gate6.D,combo.gate7.D,combo.gate8.D,
               combo.gate9.D,combo.gate10.D,combo.gate11.D,combo.gate12.D,combo.gate13.D,combo.gate14.D,combo.gate15.D,combo.gate16.D,
               combo.gate17.D,combo.gate18.D,combo.gate19.D,combo.gate20.D,combo.gate21.D,combo.gate22.D,combo.gate23.D,combo.gate24.D];
var dapan = [combo.gate1.dapan,combo.gate2.dapan,combo.gate3.dapan,combo.gate4.dapan,combo.gate5.dapan,combo.gate6.dapan,combo.gate7.dapan,
            combo.gate8.dapan,combo.gate9.dapan,combo.gate10.dapan,combo.gate11.dapan,combo.gate12.dapan,combo.gate13.dapan,combo.gate14.dapan,
            combo.gate15.dapan,combo.gate16.dapan,combo.gate17.dapan,combo.gate18.dapan,combo.gate19.dapan,combo.gate20.dapan,combo.gate21.dapan,
            combo.gate22.dapan,combo.gate23.dapan,combo.gate24.dapan]
var count = 0;
var countdown = 3;

$('.sansang').click(function (e) { 
    nature();
    
    $('.sansang').toggleClass('ssan');
        
    $('.main').addClass('mainhienra');
    var i = Math.floor(Math.random()*23);


    document.getElementById('cauhoi').innerHTML = randomCauhoi[i];
    document.getElementsByClassName('A')[0].innerHTML = random1[i];
    document.getElementsByClassName('B')[0].innerHTML = random2[i];
    document.getElementsByClassName('C')[0].innerHTML = random3[i];
    document.getElementsByClassName('D')[0].innerHTML = random4[i];
    

});
$('.again').click(function (e) { 
    $('.again').removeClass('againhien');
    $('.chucmung').removeClass('chucmunghien');
    $('.fall').removeClass('fallhien');
    $('.heart1').removeClass('mang1');
    $('.heart2').removeClass('mang2');
    $('.heart3').removeClass('mang3');
    
    var i = Math.floor(Math.random()*23);
    count = 0;
    countdown = 3;


    document.getElementById('cauhoi').innerHTML = randomCauhoi[i];
    document.getElementsByClassName('A')[0].innerHTML = random1[i];
    document.getElementsByClassName('B')[0].innerHTML = random2[i];
    document.getElementsByClassName('C')[0].innerHTML = random3[i];
    document.getElementsByClassName('D')[0].innerHTML = random4[i];
    // $('.fall').removeClass('fallhien');
    
    
});




function button(x){
    var chon = x.innerText;


    var i = Math.floor(Math.random()*23);


    document.getElementById('cauhoi').innerHTML = randomCauhoi[i];
    document.getElementsByClassName('A')[0].innerHTML = random1[i];
    document.getElementsByClassName('B')[0].innerHTML = random2[i];
    document.getElementsByClassName('C')[0].innerHTML = random3[i];
    document.getElementsByClassName('D')[0].innerHTML = random4[i];
    console.log('chon :', chon);

    
    
    if(chon === dapan[0] || chon === dapan[1] || chon === dapan[2]||chon === dapan[3]||chon === dapan[4]||chon === dapan[5]||chon === dapan[6]||chon === dapan[7]||chon === dapan[8]||chon === dapan[9]||chon === dapan[10]||chon === dapan[11]||chon === dapan[12]||chon === dapan[13]||chon === dapan[14]||chon === dapan[15]||chon === dapan[16]||chon === dapan[17]||chon === dapan[18]||chon === dapan[19]||chon === dapan[20]||chon === dapan[21]||chon === dapan[22]||chon === dapan[23]||chon === dapan[24] ){
        count ++;
        if(count == 10){
            votay();
            $('.chucmung').addClass('chucmunghien');
            $('.again').addClass('againhien');
        }
        document.getElementById('diemso').innerHTML = count;
        console.log('count :', count); 
        ting();
        return count;

        
    }

    if(chon !== dapan[0] || chon !== dapan[1] || chon !== dapan[2]||chon !== dapan[3]||chon !== dapan[4]||chon !== dapan[5]||chon !== dapan[6]||chon !== dapan[7]||chon !== dapan[8]||chon !== dapan[9]||chon !== dapan[10]||chon !== dapan[11]||chon !== dapan[12]||chon !== dapan[13]||chon !== dapan[14]||chon !== dapan[15]||chon !== dapan[16]||chon !== dapan[17]||chon !== dapan[18]||chon !== dapan[19]||chon !== dapan[20]||chon !== dapan[21]||chon !== dapan[22]||chon !== dapan[23]||chon !== dapan[24] ){
        countdown --;
        if(countdown == 0){
            $('.fall').addClass('fallhien');
            $('.again').addClass('againhien');
        }
        bruzz();
                if(countdown == 2){
                    $('.heart1').addClass('mang1');
                }
                if(countdown == 1){
                    $('.heart2').addClass('mang2');
                }
                if(countdown == 0){
                    $('.heart3').addClass('mang3');
                }
                
                console.log('countdown :', countdown);
                return countdown;
    }
        
}





























