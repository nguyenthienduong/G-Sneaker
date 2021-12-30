them = (x) => {
  var div = x.parentElement.parentElement;
  var product = div.children;
  var productImage = product[0].children[0].src;
  var productName = product[1].innerHTML;
  var productPrice = product[2].children[0].innerHTML;
  var SoLuong = product[3].children[0].value;
  var tongTien = productPrice * SoLuong;
  // alert(tongTien);

  var giohang_tr = document.createElement("tr");
  var giohang_td = document.createElement("td");
  var giohang_td_productName = document.createTextNode(productName);
  giohang_td.appendChild(giohang_td_productName);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_hinh = document.createElement("img");
  giohang_td_hinh.src = productImage;
  giohang_td.appendChild(giohang_td_hinh);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_productName = document.createTextNode(productPrice);
  giohang_td.appendChild(giohang_td_productName);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_productName = document.createTextNode(SoLuong);
  giohang_td.appendChild(giohang_td_productName);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_productName = document.createTextNode(tongTien);
  giohang_td.appendChild(giohang_td_productName);
  giohang_tr.appendChild(giohang_td);

  var giohang_td = document.createElement("td");
  var giohang_td_nut = document.createElement("input");
  giohang_td_nut.type = "button";
  giohang_td_nut.value = "Xóa";
  giohang_td_nut.style = "padding: 3px; border-radius: 5px; border : none;";
  giohang_td_nut.setAttribute("onclick", "xoa(this)");
  giohang_td.appendChild(giohang_td_nut);
  giohang_tr.appendChild(giohang_td);

  var giohang = document.getElementById("giohang");
  giohang.appendChild(giohang_tr);

  tongdonhang();
};
xoa = (x) => {
  var tr = x.parentElement.parentElement;
  tr.remove();
  tongdonhang();
};
function tongdonhang() {
  var giohang = document.getElementById("giohang");
  var tr = giohang.children;
  var tong = 0;

  for (let i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");

    var ttien = parseInt(td[4].innerHTML);
    console.log(ttien);
    tong += ttien;
  }
  document.getElementById("tongdonhang").innerHTML = tong;
}

jQuery(document).ready(function ($) {
  var $filter = $(".menu");
  var $filterSpacer = $("<div />", {
    class: "vnkings-spacer",
    height: $filter.outerHeight(),
  });
  if ($filter.size()) {
    $(window).scroll(function () {
      if (
        !$filter.hasClass("fix") &&
        $(window).scrollTop() > $filter.offset().top
      ) {
        $filter.before($filterSpacer);
        $filter.addClass("fix");
      } else if (
        $filter.hasClass("fix") &&
        $(window).scrollTop() < $filterSpacer.offset().top
      ) {
        $filter.removeClass("fix");
        $filterSpacer.remove();
      }
    });
  }
});
