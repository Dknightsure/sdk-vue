<template>
  <div id="app">
    <div class="left-nav">
      <ul class="nav-ul">
        <li v-bind:class="['li-index', {'cur': currentPage.isIndex}]" v-on:click="changeContent('isIndex')"><router-link to="/Income" ><i></i>收入概况</router-link></li>
        <li v-bind:class="['li-addApp', {'cur': currentPage.isAddApp}]" v-on:click="changeContent('isAddApp')"><router-link to="/AddApp" ><i></i>添加应用</router-link></li>
        <li v-bind:class="['li-appList', {'cur': currentPage.isAppList}]" v-on:click="changeContent('isAppList')"><router-link to="/AppList" ><i></i>应用列表</router-link></li>
        <li v-bind:class="['li-info', {'cur': currentPage.isInfo}]" v-on:click="changeContent('isInfo')"><router-link to="/Info" ><i></i>应用详情</router-link></li>
        <li v-bind:class="['li-ad', {'cur': currentPage.isAd}]" v-on:click="changeContent('isAd')"><router-link to="/ad" ><i></i>广告屏蔽</router-link></li>
        <li v-bind:class="['li-download', {'cur': currentPage.isDownload}]" v-on:click="changeContent('isDownload')"><router-link to="/SDKDownload" ><i></i>SDK下载</router-link></li>
      </ul>
    </div>
    <UserHead></UserHead>
    <div class="right-content">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import LeftBar from './components/LeftBar'
import UserHead from './components/UserHead'
import AddApp from './components/AddApp'
import SDKDownload from './components/SDKDownload'
import Ad from './components/Ad'
import Income from './components/Income'
import Info from './components/Info'
import AppList from './components/AppList'

export default {
  components: {
    Hello,
    LeftBar,
    UserHead,
    AddApp,
    SDKDownload,
    Ad,
    Income,
    Info,
    AppList
  },

  data(){
    return {
      currentPage: { isIndex: true, isAddApp: false, isAppList: false, isInfo: false, isAd: false, isDownload: false }
    }
  },

  methods: {
    changeContent: function(message, event){
      var currentPage = this.currentPage;
      for(var i in currentPage){
        currentPage[i] = false;
      }
      currentPage[message] = true;
    }
  }
}
</script>

<style lang="scss">

html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,img,dl,dt,dd,ul,ol,li,nav,footer,header,
form,input,textarea,video,audio,iframe,button,pre,code,blockquote,q,
fieldset,legend,caption,object,article,aside,details,figcaption,figure,hgroup,menu,section {margin:0;padding:0;border:0;font-size:100%;}
body,button,input,select,textarea {font:14px/1.4286 "microsoft yahei",simsun,tahoma,arial,sans-serif;}
h1,h2,h3,h4,h5,h6 {font-size:100%;font-weight:500;}
a,ins {text-decoration:none;}
a {color: #000;}
audio,canvas,video {display:inline-block;*display:inline;*zoom:1;}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,iframe,main {display:block;}
abbr,acronym {border:0;font-variant:normal;}
del {text-decoration:line-through;}
caption,th {text-align:left;}
sub,sup {font-size:75%;line-height:0;position:relative;vertical-align:baseline;}
sup {top:-0.5em;}
sub {bottom:-0.25em;}
img {vertical-align:middle;}
ol,ul {list-style:none;}
table {border-collapse:collapse;border-spacing:0;}
table,tbody,tfoot,thead,tr,th,td {padding:0;}
address,caption,cite,code,dfn,th,var,em,i,time {font-style:normal;font-weight:500;}
blockquote,q {quotes:none;}
blockquote:before,blockquote:after,q:before,q:after {content:'';content:none;}
hr {display:block;height:1px;border:0;border-top:1px solid #ccc;margin:1em 0;padding:0;}
button,input,select,textarea,:focus {outline:none;}

.clearfix:after{
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
    font-size:0;
}

.clearfix{
    *zoom:1;
}

.fl{
    float: left;
}

.fr{
    float: right;
}

body{
  background-color: #f7f8fa;
}


.left-nav{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #333741;
  background-image: url(./assets/images/sdklogo.png);
  background-position: left top;
  background-repeat: no-repeat;
}

.nav-ul{
  width: 150px;
  margin-top: 150px;
  background-color: #333741;

  li{
    width: 147px;
    height: 50px;
    border-left: 3px solid #333741;
    border-bottom: 1px solid #383e4b;
    color: #8494b8;
    font-size: 14px;
    line-height: 50px;
    cursor: pointer;

    i{
      float: left;
      margin: 15px 8px 0 20px;
      background:url(./assets/images/icon-sprites.png) no-repeat; display:inline-block
    }

    a{
      display: block;
      width: 147px;
      height: 50px;
      color: #8494b8;
    }
    a:hover{
      color: #fefefe;
    }
  }

  li.cur{
    background-color: #393f4d;
    border-left: 3px solid #6cb9ff;
    color: #fefefe;

    a{
      color: #fefefe
    }
  }

  li.li-index i{
    background-position:0 -49px;width:20px;height:20px;
  }

  li.cur.li-index i{
    background-position:0 -219px;width:20px;height:20px;
  }

  li.li-addApp i{
    background-position:0 -315px;width:20px;height:20px;
  }

  li.cur.li-addApp i{
    background-position:0 -145px;width:20px;height:20px;
  }

  li.li-appList i{
    background-position:0 0px;width:20px;height:19px;
  }

  li.cur.li-appList i{
    background-position:0 -170px;width:20px;height:19px;
  }

  li.li-info i{
    background-position:0 -74px;width:20px;height:20px;
  }

  li.cur.li-info i{
    background-position:0 -244px;width:20px;height:20px;
  }

  li.li-ad i{
    background-position:0 -290px;width:20px;height:20px;
  }

  li.cur.li-ad i{
    background-position:0 -120px;width:20px;height:20px;
  }

  li.li-download i{
    background-position:0 -24px;width:20px;height:20px;
  }

  li.cur.li-download i{
    background-position:0 -194px;width:20px;height:20px;
  }



  li:hover{
    background-color: #393f4d;
    border-left: 3px solid #6cb9ff;
    color: #fefefe;
  }

  li.li-index:hover i{
    background-position:0 -219px;width:20px;height:20px;
  }

  li.li-addApp:hover i{
    background-position:0 -145px;width:20px;height:20px;
  }

  li.li-appList:hover i{
    background-position:0 -170px;width:20px;height:19px;
  }

  li.li-info:hover i{
    background-position:0 -244px;width:20px;height:20px;
  }

  li.li-ad:hover i{
    background-position:0 -120px;width:20px;height:20px;
  }

  li.li-download:hover i{
    background-position:0 -194px;width:20px;height:20px;
  }
}

.right-content{
  padding: 40px 0 0 150px;
  background-color: #f7f8fa;
  min-width: 1130px;
  overflow: auto;
  padding-bottom: 20px;
}

.content{
  padding: 15px 15px 0 15px;
  position: relative;
}


</style>
