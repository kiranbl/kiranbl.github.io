// hello tags animation

$(".but").on("click", function() {
  $(".nav-menu").css("width", "250px");
});
$(".closebtn").on("click", function() {
  $(".nav-menu").css("width", "0px");
});
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyA5lf3OzM2yC7PMzxp3yJqedOjfmUaotR4",
  authDomain: "iot-webapp-53fe3.firebaseapp.com",
  databaseURL: "https://iot-webapp-53fe3-default-rtdb.firebaseio.com",
  projectId: "iot-webapp-53fe3",
  storageBucket: "iot-webapp-53fe3.appspot.com",
  messagingSenderId: "1096874791295",
  appId: "1:1096874791295:web:94066cdfd67ef03daa0a4a",
  measurementId: "G-PPCJPELDPR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();


messaging.getToken({ vapidKey: 'BLCUl4o2A4BdegSp-Vm3FBSy4zhSyGIWZAMN7qRJx_j0SA7rboZCHh4bcC4qqGFYOghNiZvk9EQbKKqrcZN-pco' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });



var $animation_elements = $(".anim");
var $animation_elements1 = $(".HeadAnim");
var $animation_elements2 = $(".HeadAnim1");
var $animation_elements3 = $(".HeadAnim2");
var $animation_elements4 = $(".HeadAnim3");
var $animation_elements5 = $(".pAnim");
var $animation_elements6 = $(".hAnim");
var $animation_elements7 = $("tr");
var $animation_elements8 = $(".HeadAnimDev");
var $animation_elements9 = $(".HeadAnim1Dev");
var $animation_elements10 = $(".HeadAnim2Dev");
var $animation_elements11 = $(".HeadAnim3Dev");





var $window = $(window);



function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });


  $.each($animation_elements1, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements2, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });
  $.each($animation_elements3, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements4, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements5, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });
  $.each($animation_elements6, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements7, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });


  $.each($animation_elements8, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements9, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });

  $.each($animation_elements10, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    }
  });
  $.each($animation_elements11, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');




$("tr").each(function(index) {
  $(this).css('animation-delay', index * 0.5 + 's');
});








if (window.matchMedia('(max-width: 577px)').matches) {
  if ($(".HeadAnimDev") === $(".HeadAnimDev").css("background-color", "#FFD700")) {
    $(".HeadAnimDev").css("animation-play-state:", "paused");
  }
}

if (window.matchMedia('(max-width: 577px)').matches) {
  if ($(".HeadAnim1Dev") === $(".HeadAnim1Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim1Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 577px)').matches) {
  if ($(".HeadAnim2Dev") === $(".HeadAnim2Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim2Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 577px)').matches) {
  if ($(".HeadAnim3Dev") === $(".HeadAnim3Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim3Dev").css("animation-play-state:", "paused");
  }
}

if (window.matchMedia('(max-width: 768px)').matches) {
  if ($(".HeadAnimDev") === $(".HeadAnimDev").css("background-color", "#FFD700")) {
    $(".HeadAnimDev").css("animation-play-state:", "paused");
  }
}

if (window.matchMedia('(max-width: 768px)').matches) {
  if ($(".HeadAnim1Dev") === $(".HeadAnim1Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim1Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 768px)').matches) {
  if ($(".HeadAnim2Dev") === $(".HeadAnim2Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim2Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 768px)').matches) {
  if ($(".HeadAnim3Dev") === $(".HeadAnim3Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim3Dev").css("animation-play-state:", "paused");
  }
}


if (window.matchMedia('(max-width: 1999px)').matches) {
  if ($(".HeadAnimDev") === $(".HeadAnimDev").css("background-color", "#FFD700")) {
    $(".HeadAnimDev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 1999px)').matches) {
  if ($(".HeadAnim1Dev") === $(".HeadAnim1Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim1Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 1999px)').matches) {
  if ($(".HeadAnim2Dev") === $(".HeadAnim2Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim2Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 1999px)').matches) {
  if ($(".HeadAnim3Dev") === $(".HeadAnim3Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim3Dev").css("animation-play-state:", "paused");
  }
}







if (window.matchMedia('(max-width: 1507px)').matches) {
  if ($(".HeadAnimDev") === $(".HeadAnimDev").css("background-color", "#FFD700")) {
    $(".HeadAnimDev").css("animation-play-state:", "paused");
  }
}

if (window.matchMedia('(max-width: 1507px)').matches) {
  if ($(".HeadAnim1Dev") === $(".HeadAnim1Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim1Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 1507px)').matches) {
  if ($(".HeadAnim2Dev") === $(".HeadAnim2Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim2Dev").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(max-width: 1507px)').matches) {
  if ($(".HeadAnim3Dev") === $(".HeadAnim3Dev").css("background-color", "#FFD700")) {
    $(".HeadAnim3Dev").css("animation-play-state:", "paused");
  }
}




if (window.matchMedia('(min-width:1508px)').matches) {
  if ($(".HeadAnim") === $(".HeadAnim").css("background-color", "#FFD700")) {
    $(".HeadAnim").css("animation-play-state:", "paused");
  }
}

if (window.matchMedia('(min-width:1508px)').matches) {
  if ($(".HeadAnim1") === $(".HeadAnim1").css("background-color", "#FFD700")) {
    $(".HeadAnim1").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(min-width:1508px)').matches) {
  if ($(".HeadAnim2") === $(".HeadAnim2").css("background-color", "#FFD700")) {
    $(".HeadAnim2").css("animation-play-state:", "paused");
  }
}
if (window.matchMedia('(min-width:1508px)').matches) {
  if ($(".HeadAnim3") === $(".HeadAnim3").css("background-color", "#FFD700")) {
    $(".HeadAnim3").css("animation-play-state:", "paused");
  }
}
