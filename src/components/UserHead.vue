<template>
  <div class="user-head">
      <div class="quit">
        <i class="icon-normal-quit"></i>退出
      </div>
      <div class="user-info">
        <div class="img-con">
          <img src=""/>
        </div>
        <p>
          漏鱼天下无敌
        </p>
      </div>
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

.user-head{
  position: fixed;
  left: 150px;
  top: 0;
  right: 0;
  height: 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px #dde1eb;
  z-index: 10;

  .quit,
  .user-info{
    float: right;
    margin-right: 20px;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    cursor: pointer;
  }

  .quit:hover{
    color: #fd894e;
    background-color: #f0f3fa;

    i{
      background-position:0 -269px;width:16px;height:16px;
    }
  }

  .quit{
    padding: 0 10px;
    i{
      float: left;
      margin: 12px 5px 0 0;
    }
  }

  .user-info{
    p{
      float: left;
    }
  }

  .user-info:hover{
    p{
      text-decoration: underline;
    }
  }

  .img-con{
    float: left;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    margin: 8px 5px 0 0;
    overflow: hidden;

    img{
      width: 24px;
      height: 24px;
      display: block;
    }
  }
}

.icon-normal-quit{
  background-position:0 -99px;
  background-image:url(../assets/images/icon-sprites.png);
  display:inline-block;
  width:16px;
  height:16px;
}

.icon-normal-quit:hover{
  background-position:0 -269px;
}

</style>
