function Validation() {
  this.kiemTraRong = function(input, spanId, message) {
    if (input === "") {
      $(`#${spanId}`).css("display", "block");
      $(`#${spanId}`).html(message);
      return false;
    } else {
      $(`#${spanId}`).css("display", "none");
      $(`#${spanId}`).html("");
      return true;
    }
  };

  // this.kiemTraDoDai = function(input, spanId, message, min, max) {
  //   if (input.length <= min || input.length >= max) {
  //     $(`#${spanId}`).css("display", "block");
  //     $(`#${spanId}`).html(message);
  //     return false;
  //   } else {
  //     $(`#${spanId}`).css("display", "none");
  //     $(`#${spanId}`).html("");
  //     return true;
  //   }
  // };

  // this.kiemTraEmail = function(input, spanId, message) {
  //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (input.match(mailformat)) {
  //     $(`#${spanId}`).css("display", "none");
  //     $(`#${spanId}`).html("");
  //     return true;
  //   } else {
  //     $(`#${spanId}`).css("display", "block");
  //     $(`#${spanId}`).html(message);
  //     return false;
  //   }
  // };

  this.kiemTraSo = function(input, spanId, message) {
    var numbers = /^[0-9]+$/;
    if (input.match(numbers)) {
      $(`#${spanId}`).css("display", "none");
      $(`#${spanId}`).html("");
      return true;
    } else {
      $(`#${spanId}`).css("display", "block");
      $(`#${spanId}`).html(message);
      return false;
    }
  };

  // this.kiemTraTrungUser = function(taiKhoan, spanId, message) {
  //   var mangNguoiDung = JSON.parse(localStorage.getItem("DSND"));

  //   var isValid = true;
  //   mangNguoiDung.map(function(item) {
  //     if (item.taiKhoan === taiKhoan) {
  //       isValid = false;
  //     }
  //   });

    /*
        Sử dụng hàm some (thay map) để tìm kiếm phần tử có trong mảng hay không. Có => true. Không => false
        
        isValid = !mangNguoiDung.some(function(item){
            return item.taiKhoan === taiKhoan;
        })
    */

  //   if (isValid) {
  //     $(`#${spanId}`).css("display", "none");
  //     $(`#${spanId}`).html("");
  //     return true;
  //   } else {
  //     $(`#${spanId}`).css("display", "block");
  //     $(`#${spanId}`).html(message);
  //     return false;
  //   }
  // };
}
