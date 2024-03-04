const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});
function login(){
    var u = document.getElementById('txtu').value;
    var p = document.getElementById('txtp').value;
    if (u == "vetmengheang57@gamil.com" && p == 1234){
        window.location.href = "index.html";
    }else{
        alert ("Username or password invalid!");
    }
}
//profile image//
const profilePicInput = document.getElementById('profilePictureInput');
const profilePic = document.getElementById('profilePic');

profilePicInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    profilePic.src = event.target.result;
  };

  reader.readAsDataURL(file);
});