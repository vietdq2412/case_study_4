function getProfileTimeLineContent() {
    let weatherBGImg = "images/resources/weather.jpg";
    let banner_widgetbg = "images/resources/baner-widgetbg.jpg";
    let createPostBox =`
    <div class="central-meta postbox">
        <span class="create-post">Create post</span>
        <div class="new-postbox">
            <figure>
                <img src="images/resources/admin.jpg" alt="">
            </figure>
            <div class="newpst-input">
                <form method="post">
                    <textarea rows="2" placeholder="Share some what you are thinking?"></textarea>
                </form>
            </div>
            <div class="attachments">
                <ul>
                    <li>
                        <i class="fa fa-music"></i>
                        <label class="fileContainer">
                            <input type="file">
                        </label>
                    </li>
                    <li>
                        <i class="fa fa-image"></i>
                        <label class="fileContainer">
                            <input type="file">
                        </label>
                    </li>
                    <li>
                        <i class="fa fa-video-camera"></i>
                        <label class="fileContainer">
                            <input type="file">
                        </label>
                    </li>
                    <li>
                        <i class="fa fa-camera"></i>
                        <label class="fileContainer">
                            <input type="file">
                        </label>
                    </li>
                    <li class="preview-btn">
                        <button class="post-btn-preview" type="submit" data-ripple="">Preview</button>
                    </li>
                </ul>
                <button class="post-btn" type="submit" data-ripple="">Post</button>
            </div>
            <div class="add-location-post">
                <span>Drag map point to selected area</span>
                <div class="row">
    
                    <div class="col-lg-6">
                        <label class="control-label">Lat :</label>
                        <input type="text" class="" id="us3-lat"/>
                    </div>
                    <div class="col-lg-6">
                        <label>Long :</label>
                        <input type="text" class="" id="us3-lon"/>
                    </div>
                </div>
                <!-- map -->
                <div id="us3"></div>
            </div>
        </div>
    </div>`;
    if (profile.id != loginUser.id) {
        createPostBox = "";
    }
    return getUserProfileSectionContent() +
        `<div class="col-lg-3">
    <aside class="sidebar static left">
        <div class="widget">
            <h4 class="widget-title">User Badges <a class="see-all" href="#" title="">See All</a></h4>
            <ul class="badgez-widget">
                <li>
                    <a href="#" title="Male User" data-toggle="tooltip"><img src="images/badges/badge2.png" alt=""></a>
                </li>
                <li>
                    <a href="#" title="10 Years old User" data-toggle="tooltip"><img src="images/badges/year10.png"
                                                                                     alt=""></a>
                </li>
                <li>
                    <a href="#" title="Page Admin" data-toggle="tooltip"><img src="images/badges/badge1.png" alt=""></a>
                </li>
                <li>
                    <a href="#" title="100+ Refferal" data-toggle="tooltip"><img src="images/badges/badge8.png" alt=""></a>
                </li>
                <li>
                    <a href="#" title="Tranding Posts" data-toggle="tooltip"><img src="images/badges/badge21.png"
                                                                                  alt=""></a>
                </li>
                <li>
                    <a href="#" title="1000+ Subscribers" data-toggle="tooltip"><img src="images/badges/badge3.png"
                                                                                     alt=""></a>
                </li>
                <li>
                    <a href="#" title="Pitnik Shirt winner" data-toggle="tooltip"><img src="images/badges/badge20.png"
                                                                                       alt=""></a>
                </li>
                <li>
                    <a href="#" title="500+ Followers" data-toggle="tooltip"><img src="images/badges/badge10.png"
                                                                                  alt=""></a>
                </li>
            </ul>
        </div>
        <!-- badges -->
        <div class="widget">
            <div class="weather-widget low-opacity bluesh">
                <div class="bg-image" style="background-image: url(${weatherBGImg})"></div>
                <span class="refresh-content"><i class="fa fa-refresh"></i></span>
                <div class="weather-week">
                    <div class="icon sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                    </div>
                </div>
                <div class="weather-infos">
                    <span class="weather-tem">25</span>
                    <h3>Cloudy Skyes<i>Sicklervilte, New Jersey</i></h3>
                    <div class="weather-date skyblue-bg">
                        <span>MAY<strong>21</strong></span>
                    </div>
                </div>
                <div class="monthly-weather">
                    <ul>
                        <li>
                            <span>Sun</span>
                            <a href="#" title=""><i class="wi wi-day-sunny"></i></a>
                            <em>40°</em>
                        </li>
                        <li>
                            <span>Mon</span>
                            <a href="#" title=""><i class="wi wi-day-cloudy"></i></a>
                            <em>10°</em>
                        </li>
                        <li>
                            <span>Tue</span>
                            <a href="#" title=""><i class="wi wi-day-hail"></i></a>
                            <em>20°</em>
                        </li>
                        <li>
                            <span>Wed</span>
                            <a href="#" title=""><i class="wi wi-day-lightning"></i></a>
                            <em>34°</em>
                        </li>
                        <li>
                            <span>Thu</span>
                            <a href="#" title=""><i class="wi wi-day-showers"></i></a>
                            <em>22°</em>
                        </li>
                        <li>
                            <span>Fri</span>
                            <a href="#" title=""><i class="wi wi-day-windy"></i></a>
                            <em>26°</em>
                        </li>
                        <li>
                            <span>Sat</span>
                            <a href="#" title=""><i class="wi wi-day-sunny-overcast"></i></a>
                            <em>30°</em>
                        </li>
                    </ul>
                </div>

            </div>
            <!-- Weather Widget -->
        </div>
        <!-- twitter feed-->
        <div class="widget">
            <h4 class="widget-title">Twitter feed</h4>
            <ul class="twiter-feed">
                <li>
                    <i class="fa fa-twitter"></i>
                    <span>
													<i>jhon william</i>
													@jhonwilliam
												</span>
                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a
                        href="#" title="">#daydream5k</a></p>
                    <em>2 hours ago</em>
                </li>
                <li>
                    <i class="fa fa-twitter"></i>
                    <span>
													<i>Kelly watson</i>
													@kelly
												</span>
                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a
                        href="#" title="">#daydream5k</a></p>
                    <em>2 hours ago</em>
                </li>
                <li>
                    <i class="fa fa-twitter"></i>
                    <span>
													<i>Jony bravo</i>
													@jonibravo
												</span>
                    <p>tomorrow with the company we were working and 5 child run away from the working place. <a
                        href="#" title="">#daydream5k</a></p>
                    <em>2 hours ago</em>
                </li>
            </ul>
        </div>
        <!-- twitter feed-->
        <div class="advertisment-box">
            <h4 class="">advertisment</h4>
            <figure>
                <a href="#" title="Advertisment"><img src="images/resources/ad-widget.gif" alt=""></a>
            </figure>
        </div>
        <div class="widget">
            <h4 class="widget-title">Shortcuts</h4>
            <ul class="naves">
                <li>
                    <i class="ti-clipboard"></i>
                    <a href="newsfeed.html" title="">News feed</a>
                </li>
                <li>
                    <i class="ti-mouse-alt"></i>
                    <a href="inbox.html" title="">Inbox</a>
                </li>
                <li>
                    <i class="ti-files"></i>
                    <a href="fav-page.html" title="">My pages</a>
                </li>
                <li>
                    <i class="ti-user"></i>
                    <a href="timeline-friends.html" title="">friends</a>
                </li>
                <li>
                    <i class="ti-image"></i>
                    <a href="timeline-photos.html" title="">images</a>
                </li>
                <li>
                    <i class="ti-video-camera"></i>
                    <a href="timeline-videos.html" title="">videos</a>
                </li>
                <li>
                    <i class="ti-comments-smiley"></i>
                    <a href="messages.html" title="">Messages</a>
                </li>
                <li>
                    <i class="ti-bell"></i>
                    <a href="notifications.html" title="">Notifications</a>
                </li>
                <li>
                    <i class="ti-share"></i>
                    <a href="people-nearby.html" title="">People Nearby</a>
                </li>
                <li>
                    <i class="fa fa-bar-chart-o"></i>
                    <a href="insights.html" title="">insights</a>
                </li>
                <li>
                    <i class="ti-power-off"></i>
                    <a href="landing.html" title="">Logout</a>
                </li>
            </ul>
        </div>
        <!-- Shortcuts -->
        <div class="widget">
            <h4 class="widget-title">Recent Activity</h4>
            <ul class="activitiez">
                <li>
                    <div class="activity-meta">
                        <i>10 hours Ago</i>
                        <span><a href="#" title="">Commented on Video posted </a></span>
                        <h6>by <a href="time-line.html">black demon.</a></h6>
                    </div>
                </li>
                <li>
                    <div class="activity-meta">
                        <i>30 Days Ago</i>
                        <span><a href="#" title="">Posted your status. “Hello guys, how are you?”</a></span>
                    </div>
                </li>
                <li>
                    <div class="activity-meta">
                        <i>2 Years Ago</i>
                        <span><a href="#" title="">Share a video on her timeline.</a></span>
                        <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                    </div>
                </li>
            </ul>
        </div>
        <!-- recent activites -->
        <div class="widget stick-widget">
            <h4 class="widget-title">Who's follownig</h4>
            <ul class="followers">
                <li>
                    <figure><img src="images/resources/friend-avatar2.jpg" alt=""></figure>
                    <div class="friend-meta">
                        <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                        <a href="#" title="" class="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar4.jpg" alt=""></figure>
                    <div class="friend-meta">
                        <h4><a href="time-line.html" title="">Issabel</a></h4>
                        <a href="#" title="" class="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar6.jpg" alt=""></figure>
                    <div class="friend-meta">
                        <h4><a href="time-line.html" title="">Andrew</a></h4>
                        <a href="#" title="" class="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar8.jpg" alt=""></figure>
                    <div class="friend-meta">
                        <h4><a href="time-line.html" title="">Sophia</a></h4>
                        <a href="#" title="" class="underline">Add Friend</a>
                    </div>
                </li>
                <li>
                    <figure><img src="images/resources/friend-avatar3.jpg" alt=""></figure>
                    <div class="friend-meta">
                        <h4><a href="time-line.html" title="">Allen</a></h4>
                        <a href="#" title="" class="underline">Add Friend</a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- who's following -->
    </aside>
</div><!-- sidebar -->
<div class="col-lg-6">
    ${createPostBox}
    <!-- add post new box -->
    <div class="central-meta">
        <span class="create-post">Suggested Friend's <a href="#" title="">See All</a></span>
        <ul class="suggested-frnd-caro">
            <li>
                <img src="images/resources/recent1.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Olivia</a>
                    <span>1 mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="images/resources/recent2.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Emma watson</a>
                    <span>2 mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="images/resources/recent3.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Isabella</a>
                    <span><a href="#" title="">Emmy</a> is mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="images/resources/recent4.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Amelia</a>
                    <span>5 mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="images/resources/recent5.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Sophia</a>
                    <span>1 mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
            <li>
                <img src="images/resources/recent6.jpg" alt="">
                <div class="sugtd-frnd-meta">
                    <a href="#" title="">Amelia</a>
                    <span>3 mutual friend</span>
                    <ul class="add-remove-frnd">
                        <li class="add-tofrndlist"><a href="#" title="Add friend"><i
                                class="fa fa-user-plus"></i></a></li>
                        <li class="remove-frnd"><a href="#" title="remove friend"><i
                                class="fa fa-user-times"></i></a></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <!-- suggested friends -->
    <div class="loadMore posts">
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img src="images/resources/nearly1.jpg" alt="">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title="">Jack Carter</a> share <a href="#" title="">link</a></ins>
                        <span><i class="fa fa-globe"></i> published: january,5 2010 19:PM </span>
                    </div>
                    <div class="post-meta">
                        <figure>
                            <a href="https://www.youtube.com/watch?v=fF382gwEnG8" title="" data-strip-group="mygroup"
                               class="strip vdeo-link"
                               data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }">
                                <img src="images/resources/user-post.jpg" alt="">
                                    <i>
                                        <svg version="1.1" class="play" xmlns="http://www.w3.org/2000/svg"
                                             xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="55px"
                                             width="55px"
                                             viewBox="0 0 100 100" enable-background="new 0 0 100 100"
                                             xml:space="preserve">
															  <path class="stroke-solid" fill="none" stroke="" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
																C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                            <path class="icon" fill=""
                                                  d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"/>
																</svg>
                                    </i>
                                    <h2>Canada tourist spots you must visit in 2020</h2>
                            </a>
                            <ul class="like-dislike">
                                <li><a class="bg-purple" href="#" title="Save to Pin Post"><i
                                    class="fa fa-thumb-tack"></i></a></li>
                                <li><a class="bg-blue" href="#" title="Like Post"><i
                                    class="ti-thumb-up"></i></a></li>
                                <li><a class="bg-red" href="#" title="dislike Post"><i
                                    class="ti-thumb-down"></i></a></li>
                            </ul>

                        </figure>
                        <div class="description">
                            <p>
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.
                            </p>
                        </div>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.
                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img src="images/resources/recent2.jpg" alt="">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title="">Digital Market</a></ins>
                        <span>sponsored <i class="fa fa-globe"></i></span>

                    </div>
                    <div class="post-meta">
                        <figure>
                            <img src="images/sponsors.gif" alt="">
                                <ul class="like-dislike">
                                    <li><a class="bg-purple" href="#" title="Save to Pin Post"><i
                                        class="fa fa-thumb-tack"></i></a></li>
                                    <li><a class="bg-blue" href="#" title="Like Post"><i
                                        class="ti-thumb-up"></i></a></li>
                                    <li><a class="bg-red" href="#" title="dislike Post"><i
                                        class="ti-thumb-down"></i></a></li>
                                </ul>
                        </figure>
                        <div class="description">
                            <a href="#" class="learnmore" data-ripple="">Learn More</a>
                            <p>
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                                semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.

                            </p>
                        </div>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="display: block;">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.
                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- digital sponsors -->
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img src="images/resources/friend-avatar10.jpg" alt="">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title="">Mathilda Brinker</a></ins>
                        <span>published: june,2 2020 19:PM</span>
                    </div>
                    <div class="post-meta">
                        <div class="description">
                            <p>
                                World's most beautiful car in Curabitur <a href="#" title="">#test drive booking
                                !</a> the most beatuiful car available in america and the saudia arabia, you can book
                                your test drive by our official website
                            </p>
                        </div>

                        <ul class="like-dislike">
                            <li><a href="#" title="Save to Pin Post"><i class="fa fa-thumb-tack"></i></a></li>
                            <li><a href="#" title="Like Post"><i class="ti-thumb-up"></i></a></li>
                            <li><a href="#" title="dislike Post"><i class="ti-thumb-down"></i></a></li>
                        </ul>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.

                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img alt="" src="images/resources/friend-avatar10.jpg">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a title="" href="time-line.html">Janice Griffith</a></ins>
                        <span>published: june,2 2010 19:PM</span>
                    </div>
                    <div class="description">
                        <p>
                            Curabitur World's most beautiful car in <a title="" href="#">#test drive booking !</a> the
                            most beatuiful car available in america and the saudia arabia, you can book your test drive
                            by our official website
                        </p>
                    </div>
                    <div class="post-meta">
                        <div class="linked-image align-left">
                            <a title="" href="#"><img alt="" src="images/resources/page1.jpg"></a>
                        </div>
                        <div class="detail">
                            <span>Love Maid - HighChill</span>
                            <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua... </p>
                            <a title="" href="#">www.sample.com</a>
                        </div>

                        <ul class="like-dislike">
                            <li><a class="bg-purple" href="#" title="Save to Pin Post"><i
                                class="fa fa-thumb-tack"></i></a></li>
                            <li><a class="bg-blue" href="#" title="Like Post"><i class="ti-thumb-up"></i></a>
                            </li>
                            <li><a class="bg-red" href="#" title="dislike Post"><i
                                class="ti-thumb-down"></i></a></li>
                        </ul>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.
                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img src="images/resources/nearly6.jpg" alt="">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title="">Sophia</a> shared location</ins>
                        <span><i class="fa fa-globe"></i> published: january,5 2010 19:PM</span>
                    </div>
                    <div class="post-meta">
                        <div class="post-map">
                            <div class="nearby-map">
                                <div id="map-canvas"></div>
                            </div>
                            <ul class="like-dislike">
                                <li><a class="bg-purple" href="#" title="Save to Pin Post"><i
                                    class="fa fa-thumb-tack"></i></a></li>
                                <li><a class="bg-blue" href="#" title="Like Post"><i
                                    class="ti-thumb-up"></i></a></li>
                                <li><a class="bg-red" href="#" title="dislike Post"><i
                                    class="ti-thumb-down"></i></a></li>
                            </ul>
                        </div>
                        <!-- near by map -->

                        <div class="description">
                            <p>
                                Curabitur Lonely Cat Enjoying in Summer <a href="#" title="">#mypage</a> ullamcorper
                                ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                                rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                            </p>
                        </div>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.
                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="central-meta item">
            <div class="user-post">
                <div class="friend-info">
                    <figure>
                        <img src="images/resources/nearly1.jpg" alt="">
                    </figure>
                    <div class="friend-name">
                        <div class="more">
                            <div class="more-post-optns"><i class="ti-more-alt"></i>
                                <ul>
                                    <li><i class="fa fa-pencil-square-o"></i>Edit Post</li>
                                    <li><i class="fa fa-trash-o"></i>Delete Post</li>
                                    <li class="bad-report"><i class="fa fa-flag"></i>Report Post</li>
                                    <li><i class="fa fa-address-card-o"></i>Boost This Post</li>
                                    <li><i class="fa fa-clock-o"></i>Schedule Post</li>
                                    <li><i class="fa fa-wpexplorer"></i>Select as featured</li>
                                    <li><i class="fa fa-bell-slash-o"></i>Turn off Notifications</li>
                                </ul>
                            </div>
                        </div>
                        <ins><a href="time-line.html" title="">Jack Carter</a> Post Album</ins>
                        <span><i class="fa fa-globe"></i> published: September,15 2020 19:PM </span>
                    </div>
                    <div class="post-meta">
                        <p>
                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                            semper libero.
                        </p>
                        <figure>
                            <div class="img-bunch">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <figure>
                                            <a class="strip" href="images/resources/album1.jpg" title=""
                                               data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                <img src="images/resources/album1.jpg" alt="">
                                            </a>
                                        </figure>
                                        <figure>
                                            <a class="strip" href="images/resources/album2.jpg" title=""
                                               data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                <img src="images/resources/album2.jpg" alt="">
                                            </a>
                                        </figure>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <figure>
                                            <a class="strip" href="images/resources/album6.jpg" title=""
                                               data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                <img src="images/resources/album6.jpg" alt="">
                                            </a>
                                        </figure>
                                        <figure>
                                            <a class="strip" href="images/resources/album5.jpg" title=""
                                               data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                <img src="images/resources/album5.jpg" alt="">
                                            </a>
                                        </figure>
                                        <figure>
                                            <a class="strip" href="images/resources/album4.jpg" title=""
                                               data-strip-group="mygroup" data-strip-group-options="loop: false">
                                                <img src="images/resources/album4.jpg" alt="">
                                            </a>
                                            <div class="more-photos">
                                                <span>+15</span>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <ul class="like-dislike">
                                <li><a class="bg-purple" href="#" title="Save to Pin Post"><i
                                    class="fa fa-thumb-tack"></i></a></li>
                                <li><a class="bg-blue" href="#" title="Like Post"><i
                                    class="ti-thumb-up"></i></a></li>
                                <li><a class="bg-red" href="#" title="dislike Post"><i
                                    class="ti-thumb-down"></i></a></li>
                            </ul>
                        </figure>
                        <div class="we-video-info">
                            <ul>
                                <li>
																<span class="views" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
                                </li>
                                <li>
                                    <div class="likes heart" title="Like/Dislike">❤ <span>2K</span></div>
                                </li>
                                <li>
																<span class="comment" title="Comments">
																	<i class="fa fa-commenting"></i>
																	<ins>52</ins>
																</span>
                                </li>

                                <li>
																<span>
																	<a class="share-pst" href="#" title="Share">
																		<i class="fa fa-share-alt"></i>
																	</a>
																	<ins>20</ins>
																</span>
                                </li>
                            </ul>
                            <div class="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                    <img alt="" src="images/resources/userlist-1.jpg">
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                    <img alt="" src="images/resources/userlist-2.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                    <img alt="" src="images/resources/userlist-3.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                    <img alt="" src="images/resources/userlist-4.jpg">
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                    <img alt="" src="images/resources/userlist-5.jpg">
                                </a>
                                <span><strong>You</strong>, <b>Sarah</b> and <a href="#"
                                                                                title="">24+ more</a> liked</span>
                            </div>
                        </div>
                    </div>
                    <div class="coment-area" style="">
                        <ul class="we-comet">
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly3.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Jason borne</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster. please vote this video and like our channel</p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>

                            </li>
                            <li>
                                <div class="comet-avatar">
                                    <img src="images/resources/comet-4.jpg" alt="">
                                </div>
                                <div class="we-comment">
                                    <h5><a href="time-line.html" title="">Sophia</a></h5>
                                    <p>we are working for the dance and sing songs. this video is very awesome for the
                                        youngster.
                                        <i class="em em-smiley"></i>
                                    </p>
                                    <div class="inline-itms">
                                        <span>1 year ago</span>
                                        <a class="we-reply" href="#" title="Reply"><i
                                            class="fa fa-reply"></i></a>
                                        <a href="#" title=""><i class="fa fa-heart"></i><span>20</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" title="" class="showmore underline">more comments+</a>
                            </li>
                            <li class="post-comment">
                                <div class="comet-avatar">
                                    <img src="images/resources/nearly1.jpg" alt="">
                                </div>
                                <div class="post-comt-box">
                                    <form method="post">
                                        <textarea placeholder="Post your comment"></textarea>
                                        <div class="add-smiles">
                                            <div class="uploadimage">
                                                <i class="fa fa-image"></i>
                                                <label class="fileContainer">
                                                    <input type="file">
                                                </label>
                                            </div>
                                            <span class="em em-expressionless" title="add icon"></span>
                                            <div class="smiles-bunch">
                                                <i class="em em---1"></i>
                                                <i class="em em-smiley"></i>
                                                <i class="em em-anguished"></i>
                                                <i class="em em-laughing"></i>
                                                <i class="em em-angry"></i>
                                                <i class="em em-astonished"></i>
                                                <i class="em em-blush"></i>
                                                <i class="em em-disappointed"></i>
                                                <i class="em em-worried"></i>
                                                <i class="em em-kissing_heart"></i>
                                                <i class="em em-rage"></i>
                                                <i class="em em-stuck_out_tongue"></i>
                                            </div>
                                        </div>

                                        <button type="submit"></button>
                                    </form>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div><!-- centerl meta -->
<div class="col-lg-3">
    <aside class="sidebar static right">
        <div class="widget">
            <h4 class="widget-title">Your page</h4>
            <div class="your-page">
                <figure>
                    <a href="#" title=""><img src="images/resources/friend-avatar9.jpg" alt=""></a>
                </figure>
                <div class="page-meta">
                    <a href="#" title="" class="underline">My Creative Page</a>
                    <span><i class="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                    <span><i class="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                </div>
                <ul class="page-publishes">
                    <li>
                        <span><i class="ti-pencil-alt"></i>Publish</span>
                    </li>
                    <li>
                        <span><i class="ti-camera"></i>Photo</span>
                    </li>
                    <li>
                        <span><i class="ti-video-camera"></i>Live</span>
                    </li>
                    <li>
                        <span><i class="fa fa-user-plus"></i>Invite</span>
                    </li>
                </ul>
                <div class="page-likes">
                    <ul class="nav nav-tabs likes-btn">
                        <li class="nav-item"><a class="active" href="#link1" data-toggle="tab"
                                                    data-ripple="">likes</a></li>
                        <li class="nav-item"><a class="" href="#link2" data-toggle="tab"
                                                    data-ripple="">views</a></li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active fade show " id="link1">
                            <span><i class="ti-heart"></i>884</span>
                            <a href="#" title="weekly-likes">35 new likes this week</a>
                            <div class="users-thumb-list">
                                <a href="#" title="Anderw" data-toggle="tooltip">
                                    <img src="images/resources/userlist-1.jpg" alt="">
                                </a>
                                <a href="#" title="frank" data-toggle="tooltip">
                                    <img src="images/resources/userlist-2.jpg" alt="">
                                </a>
                                <a href="#" title="Sara" data-toggle="tooltip">
                                    <img src="images/resources/userlist-3.jpg" alt="">
                                </a>
                                <a href="#" title="Amy" data-toggle="tooltip">
                                    <img src="images/resources/userlist-4.jpg" alt="">
                                </a>
                                <a href="#" title="Ema" data-toggle="tooltip">
                                    <img src="images/resources/userlist-5.jpg" alt="">
                                </a>
                                <a href="#" title="Sophie" data-toggle="tooltip">
                                    <img src="images/resources/userlist-6.jpg" alt="">
                                </a>
                                <a href="#" title="Maria" data-toggle="tooltip">
                                    <img src="images/resources/userlist-7.jpg" alt="">
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="link2">
                            <span><i class="fa fa-eye"></i>440</span>
                            <a href="#" title="weekly-likes">440 new views this week</a>
                            <div class="users-thumb-list">
                                <a href="#" title="Anderw" data-toggle="tooltip">
                                    <img src="images/resources/userlist-1.jpg" alt="">
                                </a>
                                <a href="#" title="frank" data-toggle="tooltip">
                                    <img src="images/resources/userlist-2.jpg" alt="">
                                </a>
                                <a href="#" title="Sara" data-toggle="tooltip">
                                    <img src="images/resources/userlist-3.jpg" alt="">
                                </a>
                                <a href="#" title="Amy" data-toggle="tooltip">
                                    <img src="images/resources/userlist-4.jpg" alt="">
                                </a>
                                <a href="#" title="Ema" data-toggle="tooltip">
                                    <img src="images/resources/userlist-5.jpg" alt="">
                                </a>
                                <a href="#" title="Sophie" data-toggle="tooltip">
                                    <img src="images/resources/userlist-6.jpg" alt="">
                                </a>
                                <a href="#" title="Maria" data-toggle="tooltip">
                                    <img src="images/resources/userlist-7.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- page like widget -->
        <div class="widget">
            <h4 class="widget-title">Profile intro</h4>
            <ul class="short-profile">
                <li>
                    <span>about</span>
                    <p>Hi, i am jhon kates, i am 32 years old and worked as a web developer in microsoft </p>
                </li>
                <li>
                    <span>fav tv show</span>
                    <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                </li>
                <li>
                    <span>favourit music</span>
                    <p>Justin Biber, Shakira, Nati Natasah</p>
                </li>
            </ul>
        </div>
        <div class="widget">
            <div class="banner medium-opacity purple">
                <div class="bg-image" style="background-image: url(${banner_widgetbg})"></div>
                <div class="baner-top">
                    <span><img alt="" src="images/book-icon.png"></span>
                    <i class="fa fa-ellipsis-h"></i>
                </div>
                <div class="banermeta">
                    <p>
                        create your own favourit page.
                    </p>
                    <span>like them all</span>
                    <a data-ripple="" title="" href="#">start now!</a>
                </div>
            </div>
        </div>
        <div class="widget pitnik-links stick-widget">
            <ul>
                <li><a href="#" title="">about</a></li>
                <li><a href="#" title="">career</a></li>
                <li><a href="#" title="">advertise</a></li>
                <li><a href="#" title="">Pitnik Apps</a></li>
                <li><a href="#" title="">Pitnik Blog</a></li>
                <li><a href="#" title="">Help</a></li>
                <li><a href="#" title="">Pitnik Gifts</a></li>
                <li><a href="#" title="">contetn policy</a></li>
                <li><a href="#" title="">User Policy</a></li>
            </ul>
            <p>© Pitnik 2020. All Rights Reserved.</p>
        </div>
        <!-- little links -->
    </aside>
</div><!-- sidebar -->`
}







