<template>
  <div>
    <!--1.图片+详情.评价-->
    <div id="top">
     <!--图片--> 
      <div class="topImg">
        <div class="lefImg">  
        <img src="img/01.jpg"> 
        </div>
        <div class="rigImg">
         <div v-for="(img,i) of imgs" :key="i">
           <img :src="img.src">
         </div>
        </div>
      </div>
      <div class="Introduction">
        <nav>
          <span> <button>详情.</button> </span>
          <span><button>评价.</button></span>
          <span><button>可订日期.</button></span>
          <span><button>位置.</button></span>
          <span><button>须知.</button></span>
          <span><button>房东</button></span>
        </nav>
      </div>
    </div>
    <!--2.下面详情-->
    <div class="topButton">
    <div id="bottom">
      <!--2.1详情--> 
      <div class="detail">
         <hr>
        <div class="title1">
          <span>杭州市.整套公寓</span> 
        </div>
        <div class="title2">
          <h1>MOHUANG|对面就是太古里春熙路和地铁站<br> 下楼就吃小龙坎</h1></div>
        <hr>
        <div class="title3">
          <span>享受 8月1日 - 8月15日 期间的 8.8 折优惠</span>
          </div>
        <div class="title3">
          <span>在 9 小时内完成预订，锁定限时好价</span>
          </div>
        <hr>
        <div class="title4">
          <span>1间卧室</span>
          <span>1张床</span>
          <span>1间卫生间</span>
          <span>最多住2人</span>
        </div>
        <div class="title5">
          <span>4.8分 · 8条评论</span>
          <span>超赞房东</span>
          <span>可以做饭</span>
          <span>有洗衣机</span>
        </div>
        <hr>
        <div class="fangdong">
          <img src="../../public/img/fangdong.jpg">
          <div>
            <p>
              <span>房东：Shelly</span>  
              <span> <a>联系房东</a>  </span>
            </p>
            <p>
              <span>共收到234条评价</span>
              <span>已验证</span>
            </p>
          </div>
        </div> 
        <div class="mdetail">
          <span>近地铁5号线,通达全城｡</span>
          <br>
          <span>房子精心设计,风格时尚温馨｡</span>
          <br>
          <span>专业保洁清扫,五星级品质床品,让您住的安心｡</span>
          <br>
          <button class="mhouse">更多房源介绍</button>
        </div>
        <hr>
        <div class="bedroom">
          <span>卧室1</span>
          <div>
            <img src="img/床.png">
          </div>
          <span>1张小号双人床</span>
        </div> 
        <hr> 
        <div class="ensure">
          <img src="img/安全保障.png">
          <span>爱彼迎旅行保障</span>
          <span>|</span>
          <span>全方位保障 · 出行无忧</span>
        </div>  
        <hr>
        <div class="move">
          <div>
            <span>整套房子/公寓</span>
            <span>独享整个房源，无需与房东或他人共住</span>
          </div>
          <div>
            <span>入住/退房</span>
            <span>入住时间14:00后 退房时间12:00</span>
          </div>
        </div> 
        <hr>
        <!--更多设施-->
        <div class="facilites">
          <div>
            <img src="img/wifi.png"><br>
            <span>无线网络</span>
          </div>
          <div>
            <img src="img/cf.png"><br>
            <span>厨房</span>
          </div>
          <div>
            <img src="img/xfs.png"><br>
            <span>洗发水</span>
          </div>
          <div>
            <img src="img/cfj.png"><br>
            <span>吹风机</span>
          </div>
          <div>
            <img src="img/mj.png"><br>
            <span>生活必需品</span>
          </div>
          <div>
            <div><a>8+</a></div>
            <div><a>更多设施</a></div>
          </div>
        </div>         
        <hr>
        <!--评价--> 
        <div class="evaluate-top">
          <div>
            <p>评价</p>
            <p>1条评论</p>
          </div>
          <div>
            <img src="img/sous.png">
            <input type="text" placeholder="搜索评价">
          </div>
        </div>
        <hr>
        <div class="evaluate-buttom">
          <div>
            <img src="img/pl.jpg">
            <div>
              <span>惠心</span><br>
              <span>2019年8月</span>
            </div>
          </div>
          <div>
            <span>房东很好沟通的~就是期待做饭这一点没有实现有点小遗憾</span>
          </div>
        </div>
        <hr>
        <!--时间表--> 
        <div class="schedule">
          <span class="lncCor">可定日期</span>
          <div></div>
        </div>
         <!--位置-->
        <div>
          <span class="lncCor">位置</span>
          <div><span class="lncCorlast">成都市，四川省，中国</span></div>
          <div class="detailed">
            <span>【周边美食】 小区楼下有24小时便利店,步行450米到达文殊院正门,成都超火的宫廷糕点铺､ 洞子口张老二凉粉､王记锅盔､严太婆锅盔您更是不能错过､开启你的吃货之旅 ,累了就在文殊院旁的香 园·素斋､坐竹凳喝一碗正宗的成都三花茶 ｡</span><br><br>
            <span> 【银行】中国银行､中国建设银行､中国工商银行､中国农业银行､中国邮政储蓄银行等  </span><br><br>
            <span>【购物】 金牛万达､沃尔玛､人人乐 </span><br><br>
          </div>
          <router-link to="javascript:;" class="seeMore">查看更多</router-link>
          <div><span class="lncCorlast">出行信息</span></div>
          <div class="detailed">
            <span>交通便利,地铁出行七八分钟､楼下多条公交线路,到成都各大热门景点都很方便(如宽窄巷子､春  熙路､锦里武侯祠､熊猫基地)｡</span><br><br>
            <span>房源在地铁一号线文殊院站下车K出口然后步行六七分钟就到目的地｡</span><br><br>
            <span>东站到房源路线——从东站乘坐地铁2号线在天府广场下车,在转乘1号线在文殊院下车,全程大概需   要三十分钟｡</span><br><br>
          </div>
           <div><img src="img/dt.png"></div>
           <!--周边信息-->
           <div class="perimeter">
             <img src="img/zb.png">
             <span>周边热门：春熙路（约400米）、太古里（约600米）、大慈寺（约600米）</span>
           </div>
           <div class="perimeter">
             <img src="img/hc.png">
             <span>附近地铁站：春熙路（约200米）、市二医院（约1000米）</span>
           </div>
           <div class="perimeter">
             <img src="img/fj.png">
             <span>机场 / 火车站：双流国际机场（约15.6公里）、成都站（约4.7公里）、成都南站（约5.6公里）、成都东站（约6.4公里）</span>
           </div>
           <div class="perimeter">
             <img src="img/fy.png">
             <span>房源具体位置将在预订确认后提供</span>
           </div>
           <router-link to="javascript:;" class="seeMore">查看更多周边信息</router-link>
        </div>
        <!--须知-->
        <div class="nptice">
          <div>
           <span class="lncCor">须知</span>          
          </div>
          <div class="ask">
            <span>基本要求</span>
            <div>
            <span>不允许携带宠物</span><br>
            <span>不允许举办派对和活动</span><br>
            <router-link to="javascript:;" class="seeMore">房屋守则</router-link>
            </div>
          </div>
          <div class="ask">
            <span>取消政策</span>
            <div>
              <span>严格 · 预订确认后48小时之内可免费取消</span>
              <router-link to="javascript:;" class="seeMore">查看完整详情</router-link>
            </div>
          </div>
          <div class="ask">
            <span>安全须知</span>
            <div>
              <span>该房源未安装烟雾报警器或一氧化碳报警器</span>
            </div>
          </div>
          <div class="ask">
            <span>交易提示</span>
            <div>
              <span>为了保护您的账号隐私和付款安全，<br>请不要相信其它任何平台的折扣或礼金券代订，<br>并始终在爱彼迎站内转账和交流。</span>
            </div>
          </div>
        </div>
        <!--房东信息-->
        <div>
          <div><span class="lncCor">房东</span></div>
          <div class="LandlordInformation">
            <div>
              <div>
                <span>Shelly</span>
                <router-link to="javascript:;" class="seeMore">联系房东</router-link>
              </div>
              <div>
                <span>注册时间：2016年11月</span>
              </div>
              <div>
                <img src="img/pj.png">
                <span>条评价</span>
                <img src="img/yz.png">
                <span>已验证</span>            
              </div>
            </div>
            <div>
              <img src="img/fangdong.jpg">
            </div>
          </div>
        </div>
        <!--房东自我介绍-->
        <div class="selfIntroduction">
          <p class="lncCorlast">自我介绍</p>  
          <p>我来自成都</p> 
          <p class="lncCorlast">与房客的互动</p> 
          <p>如果有任何问题请联系我们,非必要性紧急性问题请在非休息  时间联系我喔｡如果有需要,我会提供一份自己制作的文字版美食攻  略,收集了住处步行十分钟内所有我觉得好吃的东西,可以减少踩  雷｡也可以自己制作一份攻略,我会提供一些建议,这样可以抛开需 要营销成功但口味一般的网红店｡</p> <br>
          <p>语言： 中文</p>
          <p>回复率：100% </p>
          <p>回复时间：1小时内</p>
          <p class="lncCorlast">合作房东</p> 
          <p>紫洁和Rex帮忙处理出租待客事宜。</p>
          <p>
          <img src="img/zijie.jpg">
          <img src="img/rex.jpg">
          </p>              
        </div> 
        <!--保障计划--> 
        <div>
          <p class="lncCorlast">爱彼迎旅行保障</p>
          <div class="TX safeguard">
            <div class="TX">
              <img src="img/house.png">
              <div>
              <span>安心房源保障</span><br>
              <span>人工审核中国房源</span>
              </div>
            </div>
            <div class="TX">
              <img src="img/phone.png">
              <div>
              <span>安心房源保障</span><br>
              <span>人工审核中国房源</span>
              </div>
            </div>
            <div class="TX">
              <img src="img/safe.png">
              <div>
              <span>安心房源保障</span><br>
              <span>人工审核中国房源</span>
              </div>
            </div>
          </div>
          <router-link to=":script:;" class="seeMore">查看全方位保障计划</router-link>
        </div> 
        
      </div>
    </div>
    <div class="reserve"></div>
    </div>
        
    <div class="expand">  
      <!--更多房源-->       
      <div>
          <p class="lncCor">更多适合您的房源</p>
      </div>   
          <!--城市附近其他选择-->  
      <div>
            <p class="lncCor">成都市附近的其他选择</p>
            <p>
            <span>更多成都市的房源：</span>
            <div class="MoreHouse">
              <div>
                <img src="../../public/img/timg3.gif">
                <p>整套公寓 · 重庆</p>
                <p>【24K HOME】现代公寓/解放碑洪崖洞地铁口/江景房/美食街</p>
                <p>￥248 每晚</p>
              </div>
              <div>
                <img src="../../public/img/timg4.gif">
                <p>整套公寓 · 重庆</p>
                <p>《野有蔓草·林雾》文艺森系浪漫/两面大落地窗/观音桥九街步行街轻轨步行5分钟/近邻洪崖洞</p>
                <p>￥278 每晚</p>
              </div>
              <div>
                <img src="../../public/img/timg5.gif">
                <p>整套公寓 · 重庆</p>
                <p>【小伴·布兰卡】解放碑超高层精奢公寓,全江景城景异域风情,地铁之上,毗邻洪崖洞,解放碑步行街,好吃街</p>
                <p>￥258 每晚</p>
              </div>
              
            </div>
            <div>
            <router-link to="javascript:;">Houses</router-link>
            <span> · </span>
            <router-link to="javascript:;">Bed and  breakfasts</router-link>
            <span> · </span>
            <router-link to="javascript:;">Lofts</router-link>
            <span> · </span>
            <router-link to="javascript:;">Villas</router-link>
            <span> · </span>
            <router-link to="javascript:; ">Condominiums</router-link>
            <!-- </p> -->
            </div>
            <div class="TX morech">
              <ul>
              <li><router-link to="script:;">Chengdu</router-link></li>
              <li><router-link to="script:;">Pandel de Berruga</router-link></li>
              <li><router-link to="script:;">Taos Pueblo</router-link></li>
              <li><router-link to="script:;">Havana</router-link></li>
              <li><router-link to="script:;">Braunschweig</router-link></li>
              <li><router-link to="script:;">Penycae</router-link></li>
              </ul>
              <ul>
              <li><router-link to="script:;">La Pobla de Claramunt</router-link></li>
              <li><router-link to="script:;">Milltown</router-link></li>
              <li><router-link to="script:;">Baraibar</router-link></li>
              <li><router-link to="script:;">La Granja</router-link></li>
              <li><router-link to="script:;">Brookfield</router-link></li>
              <li><router-link to="script:;">Quartiere Lagomare</router-link></li>
              </ul>
              <ul>
              <li><router-link to="script:;">Nadadouro</router-link></li>
              <li><router-link to="script:;">La Hoguette</router-link></li>
              <li><router-link to="script:;">Paint Rock</router-link></li>
              <li><router-link to="script:;">Halebeedu</router-link></li>
              <li><router-link to="script:;">Echzell</router-link></li>
              <li><router-link to="script:;">Velva</router-link></li>
              </ul>
            </div>
      </div> 
    </div>   
    <hr>      
  </div>

</template>
<script>
  export default {
    data(){
      return{
        imgs:[
            {
              src:"img/02.jpg",
              title:"222",
              to:"javascript:;"
              },
            {
              src:"img/03.jpg",
              title:"333",
              to:"javascript:;"
              },
            {
              src:"img/04.jpg",
              title:"444",
              to:"javascript:;"
              },
              {
              src:"img/05.jpg",
              title:"555",
              to:"javascript:;"
              }
          ]
      }
    }
  }
</script>
<style scoped>
  /*弹性*/ 
  .TX{
    display:flex;
  }

  .topImg{
    display:flex;
    height:300px;
    margin-top:100px;
  }
  .rigImg{
    display:flex;
    flex-wrap:wrap;
    height:300px;
  }
  .lefImg{
    overflow:hidden;
  }
  .rigImg div{
    width:50%;
    overflow:hidden;
  }
  .lefImg img{
    width:100%;
    height:300px;
  }
  .rigImg img{
    width:100%;
    height:150px;
  }
  .topImg img{
    transition:all 0.5s linear;
  }
  .topImg img:hover{
    transform:scale(1.05);
  }
  hr{
    margin:18px 0;
    color:rgb(235,235,235);
    opacity:0.3;
  }
  .Introduction{
    width:60%;
    margin:0 auto;
  }
  .Introduction span button{
    border:0;
    background:#fff;
    cursor:pointer;
  }
  .Introduction nav{
    margin-left:-17%;
     padding-top:16px;
  } 
  .topButton{
    display: flex;
    margin-left:10%
  }
  #bottom{
    width:60%;
    }
  .reserve{
    width:30%;
    height:400px;
    border:1px solid black;
  }
  .title1 span{
     color: rgb(165, 41, 3);
  }
  .title2 h1{
    word-wrap: break-word;
   
    font-size: 32px;
    font-weight: 800;
    line-height: 1.125em;
    color: rgb(72, 72, 72);
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .title3{
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28571em;
    color: rgb(72, 72, 72);
    padding:3px;
  }
  .title4 span{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375em;
    color: rgb(72, 72, 72);
  }
  .title5{
    margin-top:15px;
  }
  .title5 span{
    font-size: 12px;
    line-height: 1.33333em;
    font-weight: 800;
    margin-right:10px;
  }
  .title5 span:first-child{
    color: rgb(41, 110, 0);
  }
  .title5 span:nth-child(2){
    color: rgb(138, 36, 0);
  }
  .fangdong{
    display:flex;
  }
  .fangdong img{
    border-radius:50%;
  }
  .fangdong p{
    margin-top:10px;
  }
  .fangdong p span{
    margin-left:15px;
  }
  .fangdong div p:first-child span{
    font-size: 16px;
    font-weight: 800;
    line-height: 1.375em;
    color: rgb(72, 72, 72);
  }
  .fangdong div p:first-child a{
    color:rgb(0,132,137)
  }
  .fangdong div p:last-child span{
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28571em;
    color: rgb(72, 72, 72);
  }
  .mdetail{
    margin-top:50px;
    padding:30px 10px 20px 10px;
    background-color:#f1f1f1;
  }
  .mdetail span{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375em;
    color: rgb(72, 72, 72);
  }
  .mhouse{
    margin-top: 30px;
    font-size: 16px;
    cursor: pointer;
    text-align: left;
    border: 0px ;
    color:rgb(0,132,137);
    background-color:#f1f1f1;
  }
  .bedroom{
    width:100px;
    border: 1px solid rgb(235, 235, 235) ;
    border-radius: 4px;
    padding: 12px ;
  }
  .bedroom img{
    width:24px;
    height:24px;
  }
  .bedroom span{
    font-size: 12px;
    font-weight: 800;
    line-height: 1.33333em;
    color: rgb(72, 72, 72);
  }
  .ensure span{
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .ensure span:last-child{
     font-weight:400 !important;
  }
  .move span{
    margin-right:80px;
  }
  .move div:last-child span{
    margin-right:110px;
  }
  .move div span:first-child{
    font-size: 16px !important;
    font-weight: 600 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .facilites{
    display:flex;
  }
  .facilites div{
    padding-right:50px;
  }
  .facilites div:last-child a{
    color:#008489;
    font-size:16px;
    margin-top:20px;
  }
  .facilites div:last-child div{
    text-align:center;
    margin-top:10px;
  }
  .evaluate-top{
    display:flex;
  }
  .evaluate-top div p:first-child{
    font-size: 24px !important;
    font-weight: 800 !important;
    line-height: 1.25em !important;
    color: rgb(72, 72, 72) !important;
    margin:50px 0 30px 0;
  }
  .evaluate-top div p:last-child{
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .evaluate-top div:first-child{
    width:50%;
  }
  .evaluate-top div:last-child{
    border:1px solid rgb(235,235,235);
    border-radius: 4px;
    padding:5px;
    height:30px;
    background:#fff;
    margin-top:11%;
  }
  .evaluate-top div:last-child input{
    height:30px;
    border:none;
    /* background:; */
  }
  .evaluate-top div:last-child input:focus{
    outline:none;

  }
  .evaluate-top div:last-child:focus{
    border:1px solid red;
  }
  .evaluate-buttom div:first-child{
    display:flex;
  }
  .evaluate-buttom span{
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .evaluate-buttom div:first-child span:first-child{
    font-weight: 600 !important;
  }
  .evaluate-buttom div img{
    margin-right:15px;
    border-radius:50%;
  }
  .evaluate-buttom>div:last-child{
    margin-top:20px;
  }
  .lncCor{
    display:block;
    margin-top:80px;
    margin-bottom:30px;
    font-size: 24px !important;
    font-weight: 800 !important;
    line-height: 1.25em !important;
    color: rgb(72, 72, 72) !important;
  }
  .schedule div{
    width:100%;
    height:500px;
    background-color:pink;
  }
  .lncCorlast{
    display:block;
    margin-top:30px;
    margin-bottom:30px;
    font-size: 16px !important;
    font-weight: 800 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .detailed span{
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .seeMore{
    color:#008489;
    font-size: 16px !important;
    font-weight: 400 !important;
  }
  .perimeter{
    margin:15px 0;
  }
  .perimeter img{
    width:15px;
    height:15px;
  }
  .perimeter span{
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .ask{
    display:flex;
    margin-top:25px;
  }
  .ask span{
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.375em !important;
    color: rgb(72, 72, 72) !important;
  }
  .ask>span:first-child{
    font-weight: 600 !important;
  }
  .ask div{
    margin-left:30%;
  }
  .LandlordInformation{
    display:flex;
  }
  .LandlordInformation img{
    border-radius:50%;
  }
  .LandlordInformation>div>img{
    width:88px;
  }
  .LandlordInformation>div:first-child span{
    margin:0 10px;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1.28571em !important;
    color: rgb(72, 72, 72) !important;
  }
  .LandlordInformation>div:last-child{
    margin-left:50%;
  }
  .LandlordInformation>div>div:not(:last-child) span{
    font-size: 16px !important;
    font-weight: 800 !important;
    line-height: 1.375em !important;
  }
  .LandlordInformation>div>div{
    margin-top:20px;
  }
  .selfIntroduction img{
    border-radius:50%;
  }
  .safeguard{
    margin-bottom:20px;
  }
  .safeguard div{
    margin-right:10px;
  }
  .safeguard img{
    margin-right:15px;
  }
  .morech{
    margin-top:15px;
  }
  .morech ul{
    width:30%;
    margin-right:5%;
  }
  .morech a{
    color: rgb(118, 118, 118);
   }
  .expand{
    width:80%;
    margin-left:10%;
  }
  .MoreHouse{
    display:flex;
    margin:50px 0;
    width:70%;
    justify-content:space-between;
  }
  .MoreHouse>div{
    width:80%;
  }
  .MoreHouse>div>img{
  width:300px;
  height:200px;
  }
  .MoreHouse>div img+p{
    color: rgb(118, 118, 118) ;
  }
  .MoreHouse>div p:nth-child(3){
    font-weight: 800 ;
   }
   .MoreHouse>div p:nth-child(4){
    font-size: 14px !important;
    line-height: 1.28571em !important;
    font-weight: 400 !important;
   }
</style>