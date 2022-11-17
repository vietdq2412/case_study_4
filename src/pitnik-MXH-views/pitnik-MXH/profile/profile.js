


if (loginUser.status == 0) {
    profileEditSettingId = "profileEditSetting"
    showProfileSettingPage(profileEditSettingId);
} else {
    showAboutPage()
}

function showTimeLine() {
    document.getElementById("page-contents").innerHTML = timeline_page_content;
    let ele = document.getElementById("profile-menu-timeline")
    ele.className = "active";

    $('.suggested-frnd-caro').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 1500,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:4,

            },
            1000:{
                items:4,
            }
        }
    });
}

function showAboutPage() {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = about_page_content;
    let ele = document.getElementById("profile-menu-about")
    ele.className = "active";
}

function showTimeLineFriend() {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = timeline_friend_page_content;
    let ele = document.getElementById("profile-menu-friend")
    ele.className = "active";
}

function showTimeLinePhotos() {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = timeline_photo_page_content;
    let ele = document.getElementById("profile-menu-photo")
    ele.className = "active";
}

function showProfileSettingPage(id) {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = profile_setting_page_content;
    document.getElementById(id).className += " active"
    let ele = document.getElementById("profile-menu-setting")
    ele.className = "active";
    let dob = document.getElementById("dob")
    dob.max =   new Date().toISOString().split("T")[0];

    document.getElementById("email").value = loginUser.email
    document.getElementById("display-name").value = loginUser.displayName
    document.getElementById("dob").value = loginUser.dob
    document.getElementById("phone").value = loginUser.phoneNumber
    // document.getElementById("img").value = loginUser.image
}