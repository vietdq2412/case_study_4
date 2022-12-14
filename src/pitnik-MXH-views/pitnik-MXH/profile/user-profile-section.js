function getUserProfileSectionContent(relationship) {
    let profile_controls = "";
    let settingContent = `
                    <li>
						<div class="more">
							<i class="fa fa-ellipsis-h"></i>
							<ul class="more-dropdown">
								<li>
									<a href="timeline-groups.html">Profile Groups</a>
								</li>
								<li>
									<a id="profile-menu-setting" onclick="showProfileSettingPage('generalSetting')">Setting</a>
								</li>
							</ul>
						</div>
					</li>`;
    if (profile.id !== loginUser.id) {
        settingContent = "";
        let addFriendIcon = `<li>
                            <a onclick="addFriend(${profile.id})" 
                            href="#" title="Add friend" data-toggle="tooltip">
                            <i class="fa fa-user-plus"></i>
                            </a>
                        </li>`
        let friendRequestedIcon = `<li>
                            <a onclick="cancelRequest(${profile.id})" 
                            style="background-color: greenyellow" 
                            href="#" title="Cancel request" data-toggle="tooltip">
                            <i class="fa fa-spinner" style="color:white"></i>
                            </a>
                           </li>`
        let friendIcon = `<li>
                            <a onclick="unFriend(${profile.id})" 
                            style="background-color: #03960e" 
                            href="#" title="Friend" data-toggle="tooltip">
                            <i class='fa fa-check'></i>
                            </a>
                           </li>`
        let relationStatus = addFriendIcon;
        switch (relationship) {
            case 1:
                relationStatus = addFriendIcon;
                break;
            case 2:
                relationStatus = friendRequestedIcon;
                break;
            case 3:
                relationStatus = friendIcon;
                break;
        }
        profile_controls =
            `<ul class="profile-controls">
            ${relationStatus}
			<li><a onclick="follow(${profile.id})"href="#" title="Follow" data-toggle="tooltip"><i class="fa fa-star"></i></a></li>
			<li><a class="send-mesg" href="#" title="Send Message" data-toggle="tooltip"><i class="fa fa-comment"></i></a></li>
			<li>
				<div class="edit-seting" title="Edit Profile image"><i class="fa fa-sliders"></i>
					<ul class="more-dropdown">
						<li><a href="support-and-help.html" title="">Find Support</a></li>
						<li><a class="bad-report" href="#" title="">Report Profile</a></li>
						<li><a href="#" title="">Block Profile</a></li>
					</ul>
				</div>
			</li>
		</ul>`;
    }
    return `<div class="user-profile">
	<figure>
		<div class="edit-pp">
			<label class="fileContainer">
				<i class="fa fa-camera"></i>
				<input type="file">
			</label>
		</div>
		<img src="images/resources/profile-image.jpg" alt=""><!--back ground img-->

		${profile_controls}
		<ol class="pit-rate">
			<li class="rated"><i class="fa fa-star"></i></li>
			<li class="rated"><i class="fa fa-star"></i></li>
			<li class="rated"><i class="fa fa-star"></i></li>
			<li class="rated"><i class="fa fa-star"></i></li>
			<li class=""><i class="fa fa-star"></i></li>
			<li>4.7/5</li>
		</ol>
	</figure>

	<div class="profile-section">
		<div class="row">
			<div class="col-lg-2 col-md-3">
				<div class="profile-author">
					<div class="profile-author-thumb" style="width: 160px; height: 160px">
						<img alt="author" src="${imgPath}${profile.image}" style="width: 160px; height: 160px">
<!--						<img alt="author" src="images/resources/author.jpg" width="160" height="160">-->
						<div class="edit-dp">
							<label class="fileContainer">
								<i class="fa fa-camera"></i>
								<input type="file">
							</label>
						</div>
					</div>

					<div class="author-content">
						<a class="h4 author-name" onclick="showAboutPage(); return false">${profile.displayName}</a>
						<div class="country">${profile.address}</div>
					</div>
				</div>
			</div>
			<div class="col-lg-10 col-md-9">
				<ul class="profile-menu">
					<li>
						<a class=""  id="profile-menu-timeline" onclick="showTimeLine()">Timeline</a>
					</li>
					<li>
						<a class=""  id="profile-menu-about" onclick="showAboutPage()">About</a>
					</li>
					<li>
						<a class=""  id="profile-menu-friend" onclick="showTimeLineFriend()">Friends</a>
					</li>
					<li>
						<a class id="profile-menu-photo" onclick="showTimeLinePhotos()">Photos</a>
					</li>
					<li>
						<a class=""  id="profile-menu-video" onclick="showTimeLineVideo()">Videos</a>
					</li>
					${settingContent}
				</ul>
				<ol class="folw-detail">
					<li><span>Posts</span><ins>101</ins></li>
					<li><span>Followers</span><ins>1.3K</ins></li>
					<li><span>Following</span><ins>22</ins></li>
				</ol>
			</div>
		</div>
	</div>
</div><!-- user profile banner  -->`
}

