function DanhSachNguoiDung() {
  this.mangNguoiDung = [];

  this.themNguoiDung = function(nguoiDung) {
    this.mangNguoiDung.push(nguoiDung);
  };

  this.xoaNguoiDung = function(taiKhoan) {
    /*
      *Cách 1 dùng map
        B1: Tạo biến vitri
        B2: Duyệt mảng bằng map
        B3: Nếu item.taiKhoan === taiKhoan
              gán vitri = index
        B4: Gọi đến mangNguoiDung.splice(vitri, 1)
    */
    // var vitri;
    // this.mangNguoiDung.map(function(item, index) {
    //   if (item.taiKhoan === taiKhoan) {
    //     vitri = index;
    //   }
    // });

    /* -------------------------------
     *Cách 1 dùng findIndex
        B1: Duyệt mảng bằng findIndex
        B2: trả về chỉ số oject trong mảng khi tìm thấy
        B3: Tạo biến index gán lại chỉ số trả về từ findIndex
    */

    var index = this.mangNguoiDung.findIndex(function(item) {
      return item.taiKhoan === taiKhoan;
    });

    this.mangNguoiDung.splice(index, 1);
  };

  //viết phương thức lấy thông tin người dùng theo tài khoản
  this.layTinNguoiDung = function(taiKhoan) {
    /* Duyệt vòng lặp bằng map */
    // var nguoiDung;
    // this.mangNguoiDung.map(function(item) {
    //   if (item.taiKhoan === taiKhoan) {
    //     nguoiDung = item;
    //   }
    // });

    // return nguoiDung;

    /*
      Hướng dẫn duyệt vòng lập bằng find để trả về oject người dùng cần tìm
    */
    return this.mangNguoiDung.find(function(item) {
      return item.taiKhoan === taiKhoan;
    });
  };

  //Viết phương thức cập nhật người dùng
  this.capNhatNguoiDung = function(nguoiDung) {
    /*
      Hướng dẫn duyệt vòng map duyệt mảng
      Kiểm tra nguoiDung truyền vào có trong mangNguoiDung chưa. Nếu có thì gán các thông tin lại
    */
    this.mangNguoiDung.map(function(item) {
      if (item.taiKhoan === nguoiDung.taiKhoan) {
        item.taiKhoan = nguoiDung.taiKhoan;
        item.hoTen = nguoiDung.hoTen;
        item.matKhau = nguoiDung.matKhau;
        item.email = nguoiDung.email;
        item.soDT = nguoiDung.soDT;
      }
    });
  };

  //Tìm kiếm người dùng
  this.timKiemNguoiDung = function(chuoiTimKiem) {
    var mangTimKiem = [];

    this.mangNguoiDung.map(function(item) {
      if (
        item.taiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1
      ) {
        //Nếu tìm thấy tài khoản
        mangTimKiem.push(item);
      }
    });

    return mangTimKiem;
  };
}
