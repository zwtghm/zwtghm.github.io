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
    $("#h_1").css({ "box-shadow": "0 0 6px #333" });
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
var fo_1 = "zwtghm的博客 📎 CC BY 4.0<br><script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>本站总访问量<span id='busuanzi_value_site_pv'></span>次<button id='top_1' onclick='top_1()'>回到顶部</button>"
var h_3 = "<div id='h_1'><div id='t_1'><h4><a class='a_1' href='/index'>zwtghm的博客</a></h4></div></div><button id='m_1' onclick='m_1()'>🍔</button><div id='l_1'><button id='m_2' onclick='m_2()'>✖️</button><br><a class='a_1 a_4' href='/index'>🏠主页</a><br class='k_1'><a class='a_1 a_4' href='/about'>❗️关于</a></div>"
$(document).ready(function () {
  $("head").append("<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900'>")
  $(".h_3").html(h_3);
  $(".fo_1").html(fo_1);
  console.log("%czwtghm的博客 📎 CC BY 4.0 .........版本1.2", "color:#666;border-radius:100px;");
  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      $(".showbox").fadeOut(1000);
    }
  }
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
      "color": "#00afef"
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
setInterval(function () { $(".ti_1").html(ti_1) }, 1000);
