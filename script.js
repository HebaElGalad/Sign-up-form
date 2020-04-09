var API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
var API_PATH_SIGNUP = "/auth/register";
var API_PATH_SIGNIN = "/auth/login";

// Toggle Sign in & Sign up Tabs
$(".sign-up-tab").click(function () {
  $("#sign-up-form").css("display", "block");
  $("#sign-in-form").css("display", "none");
  $(this).css({ backgroundColor: "#02b3e4", color: "#fff" });
  $(".sign-in-tab").css({ backgroundColor: "#fff", color: "#000" });
});

$(".sign-in-tab").click(function () {
  $("#sign-in-form").css("display", "block");
  $("#sign-up-form").css("display", "none");
  $(this).css({ backgroundColor: "#02b3e4", color: "#fff" });
  $(".sign-up-tab").css({ backgroundColor: "#fff", color: "#000" });
});
