
function showTimeLine() {
    document.getElementById("page-contents").innerHTML = getProfileTimeLineContent();
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
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = getAboutPageContent();
    let ele = document.getElementById("profile-menu-about")
    ele.className = "active";
    $('.frndz-list').owlCarousel({
        items: 5,
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
                items:2,
            },
            600:{
                items:3,

            },
            1000:{
                items:5,
            }
        }
    });

    $('.photos-list').owlCarousel({
        items: 5,
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
                items:2,
            },
            600:{
                items:3,

            },
            1000:{
                items:5,
            }
        }
    });

    $('.videos-list').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
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
                items:2,

            },
            1000:{
                items:3,
            }
        }
    });

}

function showTimeLineFriend() {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = getProfileTimeLineFriendContent();
    let ele = document.getElementById("profile-menu-friend")
    ele.className = "active";
}

function showTimeLinePhotos() {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = getProfilePhotosContent();
    let ele = document.getElementById("profile-menu-photo")
    ele.className = "active";
}

function showProfileSettingPage(id) {
    document.getElementById(PROFILE_PAGE_CONTENT_ID).innerHTML = getProfileSettingContent();
    document.getElementById(id).className += " active"
    let ele = document.getElementById("profile-menu-setting")
    ele.className = "active";
    let dob = document.getElementById("dob")
    dob.max =   new Date().toISOString().split("T")[0];

    document.getElementById("email").value = profile.email
    document.getElementById("display-name").value = profile.displayName
    document.getElementById("dob").value = profile.dob
    document.getElementById("phone").value = profile.phoneNumber
    document.getElementById("img-out").src = imgPath+ profile.image
    // document.getElementById("img").value = profile.image
}