
let profile;
let relationship;
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
    getRelationship(profile.id);
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
            showAboutPage()
        },
        error: function (data) {
            console.log("base err", data)
        }
    });
}

function getRelationship(id){
    alert("get relation");
    let url = `http://localhost:8081/relationship/${loginUser.id}/${id}`;
    console.log(url)
    $.ajax({
        url: url,
        type: "post",
        headers: {
            Authorization: loginUser.token,
        },
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            console.log("get relation: ", data)
        }
    });
}

function search(){

}

function addFriend(id){
    let url = `http://localhost:8081/relationship/sentFriendRequest/${loginUser.id}/${id}`;
    console.log(url)
    $.ajax({
        url: url,
        type: "post",
        success: function (data) {
            console.log("add friend: " +data)
        }
    });
};
function cancelRequest(id){
    alert("cancel request");
};
function unFriend(id){
    alert("un friend");
};

function follow(id){
    alert("follow");
};