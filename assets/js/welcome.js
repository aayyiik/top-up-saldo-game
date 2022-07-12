// alert('Hallo... Selamat datang di BlogHungry');
// alert('Menyajikan mengenai informasi seputar sistem informasi dan portofolio penulis');

$(document).ready(function(){
    $('input[type="radio"]').change(function(){
        if(this.value == 'gopay'){
            $('#cara-gopay').css('display','block');
        }
        else if (this.value == 'shopeepay'){
            $('#cara-shopeepay').css('display','block');
            // console.log('shopee');
        }
        else if (this.value == 'indomaret'){
            $('#cara-indomaret').css('display','block');
        }
        else{
            $('#cara-gopay').css('display','none');
        }
    });
});


(function() {
    var qr = new QRious({
      element: document.getElementById('qr-Invoice'),
      value: 'https://drive.google.com/file/d/1Ja209XJXVVC18UKJwnzQ5c1Y3gpSr35w/view?usp=drivesdk',
     
    });
  })();

  (function() {
    var qr = new QRious({
      element: document.getElementById('qr-Invoice-shopee'),
      value: 'https://drive.google.com/file/d/1JbxbfwHqXKWouMSa3b_X6qtibUEVe07K/view?usp=drivesdk',
     
    });
  })();





  function tampilkan(){
 
    var pembayaran = document.getElementById("form1").value;
    
    if (pembayaran = 'gopay'){
        // location.href='confirm-gopay.html';
        location.href= 'confirm-gopay.html';
    }
    else if(pembayaran = 'shopeepay'){
        location.href = 'confirm-shopeepay.html';

    }
    else if(pembayaran == 'indomaret'){
        location.href = 'confirm-indomaret.html';
  }

}

//   function submitdata(){
//      var metode = document.getElementById("form1").value;
//      if(metode = "gojek"){
//         alert(metode);
//      }
//      else if(metode = "shopee"){
//         alert(metode);
//      }

 



//   }

 