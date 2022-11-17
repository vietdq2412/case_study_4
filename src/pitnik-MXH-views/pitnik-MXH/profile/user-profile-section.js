

let user_profile_content =
    `<div class="user-profile">
	<figure>
		<div class="edit-pp">
			<label class="fileContainer">
				<i class="fa fa-camera"></i>
				<input type="file">
			</label>
		</div>
		<img src="images/resources/profile-image.jpg" alt=""><!--back ground img-->

		<ul class="profile-controls">
			<li><a href="#" title="Add friend" data-toggle="tooltip"><i class="fa fa-user-plus"></i></a></li>
			<li><a href="#" title="Follow" data-toggle="tooltip"><i class="fa fa-star"></i></a></li>
			<li><a class="send-mesg" href="#" title="Send Message" data-toggle="tooltip"><i class="fa fa-comment"></i></a></li>
			<li>
				<div class="edit-seting" title="Edit Profile image"><i class="fa fa-sliders"></i>
					<ul class="more-dropdown">
						<li><a href="setting.html" title="">Update Profile Photo</a></li>
						<li><a href="setting.html" title="">Update Header Photo</a></li>
						<li><a href="setting.html" title="">Account Settings</a></li>
						<li><a href="support-and-help.html" title="">Find Support</a></li>
						<li><a class="bad-report" href="#" title="">Report Profile</a></li>
						<li><a href="#" title="">Block Profile</a></li>
					</ul>
				</div>
			</li>
		</ul>
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
						<img alt="author" src="${imgPath}${loginUser.image}" style="width: 160px; height: 160px">
<!--						<img alt="author" src="images/resources/author.jpg" width="160" height="160">-->
						<div class="edit-dp">
							<label class="fileContainer">
								<i class="fa fa-camera"></i>
								<input type="file">
							</label>
						</div>
					</div>

					<div class="author-content">
						<a class="h4 author-name" onclick="showAboutPage(); return false">${loginUser.displayName}</a>
						<div class="country">${loginUser.address}</div>
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
					<li>
						<div class="more">
							<i class="fa fa-ellipsis-h"></i>
							<ul class="more-dropdown">
								<li>
									<a href="timeline-groups.html">Profile Groups</a>
								</li>
								<li>
									<a id="profile-menu-setting" onclick="showProfileSettingPage()">Setting</a>
								</li>
							</ul>
						</div>
					</li>
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