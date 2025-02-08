const textConfig = {
  text1: "He luu Bé Như!",
  text2: "Anh có điều này muốn hỏi bé nhớ phải trả lời thật lòng nhaaa.",
  text3: "Bé có đồng ý làm vợ tương lai của anh không nàooooo ._.",
  text4: "Nếu bé ko trả lời mà thoát ra tức là muốn làm vợ anh rùi đó nha :v",
  text5: "Em sẽ trả lời sau khi suy nghĩ ahihi",
  text6: "không suy nghĩ gì hết làm vợ của anh suốt đời <3",
  text7: "lí do bé muốn làm vợ anh đi :vvvv",
  text8: "Gửi cho anh <3",
  text9: "Vì anh đẹp try chung thủy hihi",
  text10: "anh biết mà ^^ Yêu bé Như 300.000",
  test11:
    "Bé Như của anh giỏi qué anh sẽ tặng cho Bé Như một món quà nhân ngày valentine và kỉ niệm yêu nhau nhoa ahihi <3",
  text12: "Okii lunn <3",
  text13: "Anh cảm ơn pà xã vì đã gặp anh và yêu anh. Anh yêu pà xã nhiều nhắm.",
  text14: "Em cảm ơn ông xã nhiều nhiều Moaz Moazzzzz <3",
  text15: "Quà ngay bên cạnh Bé đóa Hí Hí <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 400,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftNoo = $("#no").css("left");
    var topNOo = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#noo").css("left", leftY);
    $("#noo").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
    $("#yes").css("left", leftNoo);
    $("#yes").css("top", topNOo);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
    $("#noo").css("left", left);
    $("#noo").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });
  $("#noo").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#noo").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text10,
          text: textConfig.test11,
          confirmButtonColor: "#83d0c9",
        }).then((result) => {
          if (result.value) {
            Swal.fire({
              width: 900,
              confirmButtonText: textConfig.text14,
              background: '#fff url("img/iput-bg.jpg")',
              title: textConfig.text13,
              text: textConfig.text15,
              confirmButtonColor: "#83d0c9",
              onClose: () => {
                window.location = "http://fb.com";
              },
            });
          }
        })
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
