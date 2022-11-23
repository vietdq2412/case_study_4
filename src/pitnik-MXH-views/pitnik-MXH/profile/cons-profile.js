
let profile;
function showProfilePage(profileId){
    if (profileId == loginUser.id) {
        console.log(1)
        profile = loginUser
        console.log("loginUser.status",profile.status)
        if (profile.status == 0) {
            profileEditSettingId = "profileEditSetting"
            showProfileSettingPage(profileEditSettingId);
        } else {
            showAboutPage()
        }
        return;
    }
    getProfileById(profileId)
}

function getProfileById(profileId){
    $.ajax({
        type: "Get",
        headers: {
            Authorization: "",
        },
        contentType: 'application/json; charset=utf-8',
        url: "http://localhost:8081/user/" + profileId,
        //xử lý khi thành công
        success:  function (data) {
            profile = data;
            console.log("pro moi ", profile)
            showAboutPage()
        },
        error: function (data) {
            console.log("base err", data)
        }
    });
}

function search(){

}

function addFriend(id){};

function follow(id){};