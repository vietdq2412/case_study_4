

if (user.status == 0) {
    showProfileSettingPage();
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
    document.getElementById("page-contents").innerHTML = about_page_content;
    let ele = document.getElementById("profile-menu-about")
    ele.className = "active";
}

function showTimeLineFriend() {
    document.getElementById("page-contents").innerHTML = timeline_friend_page_content;
    let ele = document.getElementById("profile-menu-friend")
    ele.className = "active";
}

function showTimeLinePhotos() {
    document.getElementById("page-contents").innerHTML = timeline_photo_page_content;
    let ele = document.getElementById("profile-menu-photo")
    ele.className = "active";
}

function showProfileSettingPage() {
    document.getElementById("page-contents").innerHTML = profile_setting_page_content;
    let ele = document.getElementById("profile-menu-setting")
    ele.className = "active";
}