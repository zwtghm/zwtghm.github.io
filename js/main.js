function m_1() {
  $("#l_1").css({ "width": "250px" });
}
function top_1() {
  $('body,html').animate({ scrollTop: 0 }, 600);
}

$(document).scroll(function () {
  var scroH = $(document).scrollTop();
  if (scroH > 10) {
    $("#top_1").css({ "opacity": "1" });
    $("#h_1").css({ "box-shadow": "0 0 6px #666" });
  } else {
    $("#top_1").css({ "opacity": "0" });
    $("#h_1").css({ "box-shadow": "none" });
  }
});
function m_2() {
  $("#l_1").css({ "width": "0" });
}
function ti_1() {
  var d = new Date(), str = '';
  str += d.getFullYear() + '年';
  str += d.getMonth() + 1 + '月';
  str += d.getDate() + '日';
  str += d.getHours() + '时';
  str += d.getMinutes() + '分';
  str += d.getSeconds() + '秒';
  return str;
}

var d_1 = 0
function dark() {
  console.log("暗色模式")
  $(".ybtn_1").css({ "color": "white" })
  $(".alert_1").css({ "color": "white" })
  $(".a_5").css({ "color": "white" })
  $(".a_4").css({ "color": "white" })
  $(".h_1").css({ "color": "white" })
  $(".a_2").css({ "color": "white" })
  $(".a_3").css({ "color": "white" })
  $(".a_1").css({ "color": "white" })
  $("body").css({ "background-color": "#333", "color": "white" });
  $(".wzxx_1").css({ "color": "white", "background-color": "#333" })
}
function light() {
  console.log("亮色模式")
  $(".ybtn_1").css({ "color": "#333" })
  $(".alert_1").css({ "color": "#333" })
  $(".a_5").css({ "color": "#333" })
  $(".h_1").css({ "color": "#333" })
  $(".a_4").css({ "color": "#333" })
  $(".a_2").css({ "color": "#333" })
  $(".a_3").css({ "color": "#333" })
  $(".a_1").css({ "color": "#333" })
  $(".wzxx_1").css({ "color": "#333", "background-color": "white" })
  $("body").css({ "background-color": "white", "color": "#333" });
}
function dark_1() {
  if (d_1 == 0) {
    dark()
    setCookie("dark_mode", "true", "/", "false")
    d_1 = 1
  } else {
    light()
    setCookie("dark_mode", "false", "/", "false")
    d_1 = 0
  }

}
function off_alt(alt) {
  $("#"+alt).fadeOut(1000);
}

function off_alt_1() {
  console.log("cookie授权")
  $("#calt_1").fadeOut(1000);
  setCookie("cookie", "true", "/", "true")
}
function setCookie(cname, value, path, expires) {
  if (expires == "true") {
    var date = new Date();
    date.setHours(date.getHours() + (24 * 30))
    var expires_1 = date.toGMTString()
  } else {
    var expires_1 = ""
  }
  document.cookie = cname + "=" + value + ";" + "path=" + path + ";" + "expires=" + expires_1
}
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
var fo_1 = "zwtghm的博客 📎 CC BY 4.0<br><script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>本站总访问量<span id='busuanzi_value_site_pv'></span>次<div id='bmsg'><button id='top_1' onclick='top_1()'>↑</button><button id='dark_1' onclick='dark_1()'>🌓</button><div>"
var h_3 = "<div id='h_1'><div id='t_1'><h4><a class='a_1 a_5' href='/index'>zwtghm的博客</a></h4></div></div><button id='m_1' onclick='m_1()'>🍔</button><div id='l_1'><button id='m_2' onclick='m_2()'>✖️</button><br><a class='a_1 a_4 a_5' href='/index'>🏠主页</a><br class='k_1'><a class='a_1 a_4 a_5' href='/about'>❗️关于</a></div>"

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    $(".showbox").fadeOut(1000);
  }
}

$(document).ready(function () {
  setTimeout(function () {
    if (getCookie("dark_mode") == "true") {
      l_1 = 0
      dark_1()
    } if (getCookie("dark_mode") == "false") {
      d_1 = 1
      dark_1()
    }
  }, 100)
  $("body").append("<div id='zalt'><div>")
  $("#zalt").append("<div class='alert_1' id='alt_2'>doge(@ccd @夕阳)<button class='ybtn_1' onclick='off_alt(`alt_2`)'>❎关掉doge</button></div>")
  $("head").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900'>")
  $(".h_3").html(h_3);
  if (getCookie("cookie") == "true") {

  } else {
    $("#zalt").append("<div class='alert_1' id='calt_1'>本网站使用Cookie,如果继续浏览,就代表同意使用Cookie<br><button class='ybtn_1' onclick='off_alt_1()'>✅同意并继续</button><button class='ybtn_1' onclick='window.close();'>❎不同意并关闭</button></div>")
  }
  $(".fo_1").html(fo_1);
  console.log("%czwtghm的博客 📎 CC BY 4.0 .........版本1.2", "color:#666;border-radius:100px;");
  var a_idx = 0;
  $("html").click(function (e) {
    var a = new Array("欢迎光临", "🌮饼", "zwtghm的博客", "娇气", "元气满满", "hello", "知足常乐");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 100000000,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "#0057e7"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
      1500,
      function () {
        $i.remove();
      });
  });
})
setInterval(function () { $(".ti_1").html(ti_1, "🐟") }, 1000);
