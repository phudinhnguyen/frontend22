$(document).ready(function() {
  //Khởi tạo đối tượng danhSachNguoiDung từ lớp đối tượng DanhSachNguoiDung
  var danhSachNguoiDung = new DanhSachNguoiDung();
  var validation = new Validation();

  function themnguoidung(){
    console.log("themnguoidung2");
  }

  function xoanguoidung(){
    console.log("xoanguoidung2");
  }

  //Lấy giữ liệu từ localStorage khi load lại trang
  layLocalStorage();

  //Khi bấm vào nút btnThemNguoiDung
  $("#btnThemNguoiDung").click(function() {
    $("#TaiKhoan").removeAttr("disabled");

    //Gán lại tiêu đề modal
    $(".modal-title").html("Thêm người dùng");

    var footer = `
        <button id="btnThem" class="btn btn-success">Thêm</button>
        <button class="btn btn-danger" data-dismiss="modal">Đóng</button>
    `;

    //Gán vào footer modal 2 nút Thêm & Đóng
    $(".modal-footer").html(footer);
  });

  //Khi bấm vào nút Sửa Modal sẽ hiện lên tượng tự nút thêm người dùng
  $("body").delegate(".btnSua", "click", function() {
    $(".modal-title").html("Sửa người dùng");

    var footer = `
        <button id="btnCapNhat" class="btn btn-success">Cập nhật</button>
        <button class="btn btn-danger" data-dismiss="modal">Đóng</button>
    `;

    $(".modal-footer").html(footer);

    /*
      Gọi đến phương thức layTinNguoiDung bên lớp DanhSachNguoiDung
      Sau đó DOM & gán dữ liệu lại lên từng ô input.
      VD: $("#TaiKhoan").val(nguoiDung.taiKhoan);
    */
    var taiKhoan = $(this)
      .data("taikhoan")
      .toString();

    var nguoiDung = danhSachNguoiDung.layTinNguoiDung(taiKhoan);

    $("#TaiKhoan").val(nguoiDung.taiKhoan);
    $("#TaiKhoan").attr("disabled", "disabled");

    $("#HoTen").val(nguoiDung.hoTen);
    $("#MatKhau").val(nguoiDung.matKhau);
    $("#Email").val(nguoiDung.email);
    $("#SoDienThoai").val(nguoiDung.soDT);
  });

  //DOM đến nút cập nhật tạo sự kiện click.
  $("body").delegate("#btnCapNhat", "click", function() {
    /*
      B1: DOM đến 6 ô input lấy dữ liệu người dùng sửa
      B2: Tạo đối tượng người dùng
      B3: Truyền đối tượng nguoiDung => Phương thức danhSachNguoiDung.capNhatNguoiDung
    */

    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();

    //Khởi tạo đối tượng người dùng
    var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT);
    danhSachNguoiDung.capNhatNguoiDung(nguoiDung);
    taoBang(danhSachNguoiDung.mangNguoiDung);
    LuuStore();
  });

  //Thêm mới 1 người dùng. delegate => Lý do nút btnThem render ra giao diện sau
  // $("body").delegate("#btnThem", "click", function() {
  //   var taiKhoan = $("#TaiKhoan").val();
  //   var hoTen = $("#HoTen").val();
  //   var matKhau = $("#MatKhau").val();
  //   var email = $("#Email").val();
  //   var soDT = $("#SoDienThoai").val();

  //   var isValid = true;

  //   isValid &=
  //     validation.kiemTraRong(
  //       taiKhoan,
  //       "tbTaiKhoan",
  //       "(*) Vui lòng nhập tài khoản"
  //     ) &&
  //     validation.kiemTraDoDai(
  //       taiKhoan,
  //       "tbTaiKhoan",
  //       "(*) Vui lòng nhập từ 6 - 12 ký tự",
  //       6,
  //       12
  //     ) &&
  //     validation.kiemTraTrungUser(
  //       taiKhoan,
  //       "tbTaiKhoan",
  //       "(*) Tài khoản đã tồn tại"
  //     );

  //   isValid &= validation.kiemTraRong(
  //     hoTen,
  //     "tbHoTen",
  //     "(*) Vui lòng nhập họ tên"
  //   );

  //   isValid &= validation.kiemTraRong(
  //     matKhau,
  //     "tbMatKhau",
  //     "(*) Vui lòng nhập mật khẩu"
  //   );

  //   isValid &=
  //     validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email") &&
  //     validation.kiemTraEmail(
  //       email,
  //       "tbEmail",
  //       "(*) Email không đúng định dạng!"
  //     );

  //   isValid &=
  //     validation.kiemTraRong(soDT, "tbSoDT", "(*) Vui lòng nhập SDT") &&
  //     validation.kiemTraSo(soDT, "tbSoDT", "(*) Vui lòng nhập vào số!");
  //   if (isValid) {
  //     //Khởi tạo đối tượng người dùng
  //     var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT);

  //     //Thêm người dùng vào danhSachNguoiDung
  //     danhSachNguoiDung.themNguoiDung(nguoiDung);

  //     //Gọi hàm tạo bảng để render thông tin người dùng ra giao diện
  //     taoBang(danhSachNguoiDung.mangNguoiDung);

  //     //Lưu mảng người dùng xuống localStorage
  //     LuuStore();
  //   }
  // });

  // btn thêm người dùng 
  $("body").delegate("#btnThem", "click", function(){
    var taiKhoan = $("#TaiKhoan").val();
    var hoTen = $("#HoTen").val();
    var matKhau = $("#MatKhau").val();
    var email = $("#Email").val();
    var soDT = $("#SoDienThoai").val();

    var isValid = true;

    isValid &= validation.kiemTraRong(taiKhoan, "tbTaiKhoan", "(*) Vui lòng nhập vào tài khoản") && validation.kiemTraSo(taiKhoan, "tbTaiKhoan", "(*) Vui lòng chỉ nhập số vào tài khoản")
    isValid &= validation.kiemTraRong(hoTen, "tbHoTen", "(*) Vui lòng nhập vào tài khoản")
    isValid &= validation.kiemTraRong(matKhau, "tbMatKhau", "(*) Vui lòng nhập vào tài khoản")
    isValid &= validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập vào tài khoản")
    isValid &= validation.kiemTraRong(soDT, "tbSoDT", "(*) Vui lòng nhập vào tài khoản")

    if(isValid){
      var nguoiDung = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT);
      danhSachNguoiDung.themNguoiDung(nguoiDung);
      taoBang(danhSachNguoiDung.mangNguoiDung);
    }
  })

  //Bấm nút btnXoa => Xóa người dùng
  $("body").delegate(".btnXoa", "click", function() {
    var taiKhoan = $(this).data("taikhoan");
    danhSachNguoiDung.xoaNguoiDung(taiKhoan);

    //Sau khi xóa xong gọi lại hàm tạo bảng render lại bảng thông tin người dùng
    taoBang(danhSachNguoiDung.mangNguoiDung);

    //Lưu mảng người dùng xuống localStorage
    LuuStore();
  });

  //Chức năng tìm kiếm
  $("#txtTimKiem").keyup(function() {
    var chuoiTimKiem = $("#txtTimKiem").val();

    var mangTimKiem = danhSachNguoiDung.timKiemNguoiDung(chuoiTimKiem);

    taoBang(mangTimKiem);
  });

  function taoBang(mang) {
    //DOM đến tbody của bảng
    var tblBody = $("#tblDanhSachNguoiDung");
    var content = "";

    //Duyệt mảng bằng map
    mang.map(function(item, index) {
      //Sử dụng string template
      content += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>
                    <button class="btn btn-primary btnSua" data-taikhoan="${
                      item.taiKhoan
                    }"  data-toggle="modal" data-target="#myModal">Sửa</button>
                    <button class="btn btn-danger btnXoa" data-taikhoan="${
                      item.taiKhoan
                    }">Xóa</button>
                </td>
            </tr>
        `;
    });

    //Gán dữ liệu lại cho tbody của table
    tblBody.html(content);
  }

  function LuuStore() {
    //JSON.stringify chuyển về kiểu chuỗi
    var luuMangNguoiDung = JSON.stringify(danhSachNguoiDung.mangNguoiDung);

    //Lưu mảng người dùng xuống localStorage
    localStorage.setItem("DSND", luuMangNguoiDung);
  }

  function layLocalStorage() {
    if (localStorage.getItem("DSND") != null) {
      //lấy DSND từ localStorage gán vào mảng người dùng => Lưu ý lấy localStorage lên phải parse về JSON
      danhSachNguoiDung.mangNguoiDung = JSON.parse(
        localStorage.getItem("DSND")
      );

      taoBang(danhSachNguoiDung.mangNguoiDung);
    }
  }
});
