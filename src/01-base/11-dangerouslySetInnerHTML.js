import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  
  state = {
    myhtml: `<div id="screening" class="s" data-dstat-areaid="70" data-dstat-mode="click,expose">
              <div class="screening-hd">
                      <div class="ui-slide-control">
                          <span class="prev-btn"><a class="btn-prev" href="javascript:void(0)"></a></span>
                          <span class="next-btn"><a class="btn-next" href="javascript:void(0)"></a></span>
                      </div>
                      <div class="slide-tip"><span class="ui-slide-index">1</span> / <span class="ui-slide-max">3</span></div>
                  <h2>正在热映<span><a onclick="moreurl(this, {from:'mv_l_a'})" href="/cinema/nowplaying/">全部正在热映»</a></span><span><a onclick="moreurl(this, {from:'mv_l_w'})" href="./later/">即将上映»</a></span></h2>
              </div>
              <div class="screening-bd">
                  <ul class="ui-slide-content" data-slide-index="1" data-index-max="3" style="left: -700px;"><li class="ui-slide-item s" data-dstat-areaid="70_3" data-dstat-mode="click,expose" data-dstat-watch=".ui-slide-content" data-dstat-viewport=".screening-bd" data-title="想见你 想見你" data-release="2022" data-rate="6.3" data-star="35" data-trailer="https://movie.douban.com/subject/35208467/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35208467" data-duration="107分钟" data-region="中国大陆" data-director="黄天仁" data-actors="柯佳嬿 / 许光汉 / 施柏宇" data-intro="" data-enough="true" data-rater="130780">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35208467/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885427348.jpg" alt="想见你" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35208467/?from=showing" class="">想见你</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">6.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35208467" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="橡树餐厅" data-release="2022" data-rate="" data-star="00" data-trailer="https://movie.douban.com/subject/36178635/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=36178635" data-duration="91分钟" data-region="中国大陆" data-director="李金保" data-actors="王雪沁 / 周宗禹 / 吴凡" data-intro="" data-enough="false" data-rater="34">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/36178635/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884801458.jpg" alt="橡树餐厅" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/36178635/?from=showing" class="">橡树餐厅</a>
                                  </li>
                                  <li class="rating">
                                          

                                              <span class="text-tip">暂无评分</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=36178635" target="_blank">选座购票</a></span></li>
                              </ul>
                          </li><li class="ui-slide-item">
                          </li><li class="ui-slide-item">
                          </li><li class="ui-slide-item">
                  </li>
                              
                              
                          <li class="ui-slide-item s" data-dstat-areaid="70_1" data-dstat-mode="click,expose" data-dstat-watch=".ui-slide-content" data-dstat-viewport=".screening-bd" data-title="黑豹2 Black Panther: Wakanda Forever" data-release="2022" data-rate="5.7" data-star="30" data-trailer="https://movie.douban.com/subject/30167997/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=30167997" data-duration="161分钟" data-region="美国" data-director="瑞恩·库格勒" data-actors="利蒂希娅·赖特 / 露皮塔·尼永奥 / 安吉拉·贝塞特" data-intro="" data-enough="true" data-rater="47057">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/30167997/?from=showing">
                                          <img src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2886589774.jpg" alt="黑豹2" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/30167997/?from=showing" class="">黑豹2</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar30"></span><span class="subject-rate">5.7</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=30167997" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="流浪地球2" data-release="2023" data-rate="8.2" data-star="45" data-trailer="https://movie.douban.com/subject/35267208/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35267208" data-duration="173分钟" data-region="中国大陆" data-director="郭帆" data-actors="吴京 / 刘德华 / 李雪健" data-intro="" data-enough="true" data-rater="898583">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35267208/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885944827.jpg" alt="流浪地球2" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35267208/?from=showing" class="">流浪地球2</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar45"></span><span class="subject-rate">8.2</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35267208" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="满江红" data-release="2023" data-rate="7.3" data-star="40" data-trailer="https://movie.douban.com/subject/35766491/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35766491" data-duration="159分钟" data-region="中国大陆" data-director="张艺谋" data-actors="沈腾 / 易烊千玺 / 张译" data-intro="" data-enough="true" data-rater="753633">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35766491/?from=showing">
                                          <img src="https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2887555071.jpg" alt="满江红" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35766491/?from=showing" class="">满江红</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">7.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35766491" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="风再起时 風再起時" data-release="2022" data-rate="6.4" data-star="35" data-trailer="https://movie.douban.com/subject/26995475/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=26995475" data-duration="143分钟(中国大陆)" data-region="中国香港" data-director="翁子光" data-actors="郭富城 / 梁朝伟 / 杜鹃" data-intro="" data-enough="true" data-rater="21280">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/26995475/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2887517387.jpg" alt="风再起时" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/26995475/?from=showing" class="">风再起时</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">6.4</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=26995475" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="深海" data-release="2023" data-rate="7.3" data-star="40" data-trailer="https://movie.douban.com/subject/26649682/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=26649682" data-duration="112分钟" data-region="中国大陆" data-director="田晓鹏" data-actors="苏鑫 / 王亭文 / 滕奎兴" data-intro="" data-enough="true" data-rater="238417">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/26649682/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885941329.jpg" alt="深海" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/26649682/?from=showing" class="">深海</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">7.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=26649682" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item s" data-dstat-areaid="70_2" data-dstat-mode="click,expose" data-dstat-watch=".ui-slide-content" data-dstat-viewport=".screening-bd" data-title="无名" data-release="2023" data-rate="6.7" data-star="35" data-trailer="https://movie.douban.com/subject/35372742/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35372742" data-duration="128分钟" data-region="中国大陆" data-director="程耳" data-actors="梁朝伟 / 王一博 / 周迅" data-intro="" data-enough="true" data-rater="534235">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35372742/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2886187418.jpg" alt="无名" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35372742/?from=showing" class="">无名</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">6.7</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35372742" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="熊出没·伴我“熊芯”" data-release="2023" data-rate="7.0" data-star="35" data-trailer="https://movie.douban.com/subject/36123159/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=36123159" data-duration="96分钟" data-region="中国大陆" data-director="林永长" data-actors="张秉君 / 谭笑 / 张伟" data-intro="" data-enough="true" data-rater="40775">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/36123159/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2886535219.jpg" alt="熊出没·伴我“熊芯”" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/36123159/?from=showing" class="">熊出没·伴我...</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">7.0</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=36123159" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="交换人生" data-release="2023" data-rate="5.6" data-star="30" data-trailer="https://movie.douban.com/subject/35513968/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35513968" data-duration="110分钟" data-region="中国大陆" data-director="苏伦" data-actors="雷佳音 / 张小斐 / 张宥浩" data-intro="" data-enough="true" data-rater="48616">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35513968/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2886396440.jpg" alt="交换人生" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35513968/?from=showing" class="">交换人生</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar30"></span><span class="subject-rate">5.6</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35513968" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="阿凡达：水之道 Avatar: The Way of Water" data-release="2022" data-rate="8.0" data-star="40" data-trailer="https://movie.douban.com/subject/4811774/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=4811774" data-duration="193分钟" data-region="美国" data-director="詹姆斯·卡梅隆" data-actors="萨姆·沃辛顿 / 佐伊·索尔达娜 / 西格妮·韦弗" data-intro="" data-enough="true" data-rater="455703">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/4811774/?from=showing">
                                          <img src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2884182275.jpg" alt="阿凡达：水之道" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/4811774/?from=showing" class="">阿凡达：水之...</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">8.0</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=4811774" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="穿靴子的猫2 Puss in Boots: The Last Wish" data-release="2022" data-rate="8.1" data-star="40" data-trailer="https://movie.douban.com/subject/25868125/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=25868125" data-duration="102分钟" data-region="美国" data-director="乔尔·克劳福德" data-actors="安东尼奥·班德拉斯 / 萨尔玛·海耶克 / 哈维·吉兰" data-intro="" data-enough="true" data-rater="63731">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/25868125/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885032978.jpg" alt="穿靴子的猫2" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/25868125/?from=showing" class="">穿靴子的猫2...</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">8.1</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=25868125" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item s" data-dstat-areaid="70_3" data-dstat-mode="click,expose" data-dstat-watch=".ui-slide-content" data-dstat-viewport=".screening-bd" data-title="想见你 想見你" data-release="2022" data-rate="6.3" data-star="35" data-trailer="https://movie.douban.com/subject/35208467/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35208467" data-duration="107分钟" data-region="中国大陆" data-director="黄天仁" data-actors="柯佳嬿 / 许光汉 / 施柏宇" data-intro="" data-enough="true" data-rater="130780">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35208467/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885427348.jpg" alt="想见你" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35208467/?from=showing" class="">想见你</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">6.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35208467" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="橡树餐厅" data-release="2022" data-rate="" data-star="00" data-trailer="https://movie.douban.com/subject/36178635/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=36178635" data-duration="91分钟" data-region="中国大陆" data-director="李金保" data-actors="王雪沁 / 周宗禹 / 吴凡" data-intro="" data-enough="false" data-rater="34">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/36178635/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2884801458.jpg" alt="橡树餐厅" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/36178635/?from=showing" class="">橡树餐厅</a>
                                  </li>
                                  <li class="rating">
                                          

                                              <span class="text-tip">暂无评分</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=36178635" target="_blank">选座购票</a></span></li>
                              </ul>
                          </li><li class="ui-slide-item">
                          </li><li class="ui-slide-item">
                          </li><li class="ui-slide-item">
                  </li><li class="ui-slide-item s" data-dstat-areaid="70_1" data-dstat-mode="click,expose" data-dstat-watch=".ui-slide-content" data-dstat-viewport=".screening-bd" data-title="黑豹2 Black Panther: Wakanda Forever" data-release="2022" data-rate="5.7" data-star="30" data-trailer="https://movie.douban.com/subject/30167997/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=30167997" data-duration="161分钟" data-region="美国" data-director="瑞恩·库格勒" data-actors="利蒂希娅·赖特 / 露皮塔·尼永奥 / 安吉拉·贝塞特" data-intro="" data-enough="true" data-rater="47057">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/30167997/?from=showing">
                                          <img src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2886589774.jpg" alt="黑豹2" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/30167997/?from=showing" class="">黑豹2</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar30"></span><span class="subject-rate">5.7</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=30167997" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="流浪地球2" data-release="2023" data-rate="8.2" data-star="45" data-trailer="https://movie.douban.com/subject/35267208/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35267208" data-duration="173分钟" data-region="中国大陆" data-director="郭帆" data-actors="吴京 / 刘德华 / 李雪健" data-intro="" data-enough="true" data-rater="898583">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35267208/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885944827.jpg" alt="流浪地球2" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35267208/?from=showing" class="">流浪地球2</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar45"></span><span class="subject-rate">8.2</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35267208" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="满江红" data-release="2023" data-rate="7.3" data-star="40" data-trailer="https://movie.douban.com/subject/35766491/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=35766491" data-duration="159分钟" data-region="中国大陆" data-director="张艺谋" data-actors="沈腾 / 易烊千玺 / 张译" data-intro="" data-enough="true" data-rater="753633">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/35766491/?from=showing">
                                          <img src="https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2887555071.jpg" alt="满江红" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/35766491/?from=showing" class="">满江红</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">7.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=35766491" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="风再起时 風再起時" data-release="2022" data-rate="6.4" data-star="35" data-trailer="https://movie.douban.com/subject/26995475/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=26995475" data-duration="143分钟(中国大陆)" data-region="中国香港" data-director="翁子光" data-actors="郭富城 / 梁朝伟 / 杜鹃" data-intro="" data-enough="true" data-rater="21280">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/26995475/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2887517387.jpg" alt="风再起时" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/26995475/?from=showing" class="">风再起时</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar35"></span><span class="subject-rate">6.4</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=26995475" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li><li class="ui-slide-item" data-title="深海" data-release="2023" data-rate="7.3" data-star="40" data-trailer="https://movie.douban.com/subject/26649682/trailer" data-ticket="https://movie.douban.com/ticket/redirect/?movie_id=26649682" data-duration="112分钟" data-region="中国大陆" data-director="田晓鹏" data-actors="苏鑫 / 王亭文 / 滕奎兴" data-intro="" data-enough="true" data-rater="238417">
                              <ul class="">
                                  <li class="poster">
                                      <a onclick="moreurl(this, {from:'mv_a_pst'})" href="https://movie.douban.com/subject/26649682/?from=showing">
                                          <img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2885941329.jpg" alt="深海" rel="nofollow" class="">
                                      </a>
                                  </li>
                                  <li class="title">
                                      <a onclick="moreurl(this, {from:'mv_a_tl'})" href="https://movie.douban.com/subject/26649682/?from=showing" class="">深海</a>
                                  </li>
                                  <li class="rating">
                                              <span class="rating-star allstar40"></span><span class="subject-rate">7.3</span>
                                  </li>
                                      <li class="ticket_btn"><span><a onclick="moreurl(this, {from:'mv_b_tc'})" href="https://movie.douban.com/ticket/redirect/?movie_id=26649682" target="_blank">选座购票</a></span></li>
                              </ul>
                              
                              
                          </li></ul>
              </div>
          </div>`
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={
              {
                __html:this.state.myhtml
              }
          }>

          {/* {this.state.myhtml} */}
        </div>
      </div>
    )
  }
}
