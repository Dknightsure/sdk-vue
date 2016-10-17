<template>
  <div class="left-nav">
    <ul class="nav-ul">
      <li class="cur li-index"><i></i>收入概况</li>
      <li class="li-addApp"><i></i>添加应用</li>
      <li class="li-appList"><i></i>应用列表</li>
      <li class="li-info"><i></i>应用详情</li>
      <li class="li-ad"><i></i>广告屏蔽</li>
      <li class="li-download"><i></i>SDK下载</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.left-nav{
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #333741;
  background-image: url(../assets/images/sdklogo.png);
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
      background:url(../assets/images/icon-sprites.png) no-repeat; display:inline-block
    }
  }

  li.cur{
    background-color: #393f4d;
    border-left: 3px solid #6cb9ff;
    color: #fefefe;
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


</style>
