var API_URL = "https://private-b2e6827-robustatask.apiary-mock.com";
var API_PATH_SIGNUP = "/auth/register";
var API_PATH_SIGNIN = "/auth/login";

//  Get Sign-up input fields
const nameField = document.getElementById("name");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const emailField = document.getElementById("email");

//  Get Sign-in input fields
const signInEmailField = document.getElementById("sign-in-email");
const signInPasswordField = document.getElementById("sign-in-password");

// email validation regex
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Validate Form Fields function
function formValidation(fieldName) {
  if (!fieldName.value) {
    fieldName.nextElementSibling.style.display = "inline-block";
  } else if (fieldName.value) {
    fieldName.nextElementSibling.style.display = "none";
  }
}

// Validate Email Field function
function emailValidation(fieldName) {
  if (!emailField.value || !emailField.value.match(emailRegex)) {
    emailField.nextElementSibling.style.display = "inline-block";
  } else if (emailField.value.match(emailRegex)) {
    emailField.nextElementSibling.style.display = "none";
  }
}

// SUBMIT SIGN-UP FORM
$("#sign-up-form").submit(function (event) {
  // Prevent page refreshes on submit
  event.preventDefault();

  // 1.Validate the Fields before submit
  formValidation(nameField);
  formValidation(usernameField);
  formValidation(passwordField);
  emailValidation(emailField);

  if (
    nameField.value &&
    usernameField.value &&
    passwordField.value &&
    emailField.value
  ) {
    // 2.Display loader
    $(".loader-container").css("display", "flex");

    // 3.Get the form data as array and stringify it.
    let formData = $(this).serializeArray();

    let jsonObject = {};
    for (let i = 0; i < formData.length; i++) {
      let key = formData[i].name;
      jsonObject[key] = formData[i].value;
    }

    // 4.Setting the AJAX request
    $.ajax({
      type: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: `${API_URL}${API_PATH_SIGNUP}`,
      data: JSON.stringify(jsonObject),
      success: function (res) {
        $(".loader-container").css("display", "none");
        $(".form-alerts").css({ display: "flex", backgroundColor: "#00b25b" });
        $(".form-alerts span").text(`${res.responseJSON.message}`);
      },
      error: function (err) {
        $(".loader-container").css("display", "none");
        $(".form-alerts").css({ display: "flex", backgroundColor: "#dc3545" });
        $(".form-alerts span").text(`${err.responseJSON.message}`);
      },
      dataType: "json",
    });
  }
});

// // SUBMIT SIGN-IN FORM
$("#sign-in-form").submit(function (event) {
  // Prevent page refreshes on submit
  event.preventDefault();

  // 1.Validate the Fields before submit
  formValidation(signInPasswordField);
  emailValidation(signInEmailField);

  if (signInEmailField.value && signInPasswordField.value) {
    // 2.Display loader
    $(".loader-container").css("display", "flex");

    // 3.Get the form data as array and stringify it.
    let formData = $(this).serializeArray();

    let jsonObject = {};
    for (let i = 0; i < formData.length; i++) {
      let key = formData[i].name;
      jsonObject[key] = formData[i].value;
    }

    // 4.Setting the AJAX request
    $.ajax({
      type: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      url: `${API_URL}${API_PATH_SIGNIN}`,
      data: JSON.stringify(jsonObject),
      success: function (res) {
        $(".loader-container").css("display", "none");
        $(".form-alerts").css({ display: "flex", backgroundColor: "#00b25b" });
        $(".form-alerts span").text(`${res.responseJSON.message}`);
      },
      error: function (err) {
        $(".loader-container").css("display", "none");
        $(".form-alerts").css({ display: "flex", backgroundColor: "#dc3545" });
        $(".form-alerts span").text(`${err.responseJSON.message}`);
      },
      dataType: "json",
    });
  }
});

// Close form alerts container
$(".close-button").click(function () {
  $(".form-alerts").css("display", "none");
});

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
