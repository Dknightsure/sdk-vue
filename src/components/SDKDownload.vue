<template>
  <div class="down-outer">
    <h1>4399积分墙SDK</h1>
    <div class="down-div clearfix">
      <ul class="down-head">
        <li>版本号</li>
        <li>支持系统</li>
        <li>更新时间</li>
        <li>更新内容</li>
      </ul>
      <ul class="down-content">
        <li>1.0</li>
        <li><i class="android-robot"></i>安卓系统</li>
        <li>2016年08月29日</li>
        <li>随便说一点什么更新内容都可以在这里。巴拉巴拉巴拉巴拉。最多可以显示很多行， 不是娇柔理夺奔跑见风使舵畦风激电飞中是大跃进蝶恋蜂狂晨。</li>
      </ul>
    </div>
    <button type="button" name="button" class="btn-down-mannual">下载《操作手册》</button>
    <button type="button" name="button" class="btn-sdk-demo">Demo版SDK</button>
    <button type="button" name="button" class="btn-sdk-release">正式版SDK</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello SDKDownload!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.down-outer{
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 4px #dde1eb;
  overflow: hidden;
  padding: 0 0 20px 20px;
}

h1{
  font-size: 18px;
  line-height: 58px;
  color: #000000;
}

.down-div{
  background-color: #f5f6f7;
  display: inline-block;
  margin: 0 20px 0 0px;
  height: 197px;
}

.down-head{
  width: 80px;
  font-size: 14px;
  color: #333333;
  margin-right: 20px;
  float: left;

  li{
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
}

.down-content{
  font-size: 14px;
  color: #999999;
  float: left;
  width: 560px;

  li{
    text-align: left;
    height: 40px;
    line-height: 40px;
  }

  li:last-child{
    padding-top: 8px;
    line-height: 24px;
    height: auto;
  }
}

.btn-down-mannual,
.btn-sdk-demo,
.btn-sdk-release{
  width: 120px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
}

.btn-down-mannual{
  margin-right: 30px;
}

.btn-sdk-demo,
.btn-sdk-release{
  margin-right: 10px;
}

.btn-down-mannual,
.btn-sdk-demo{
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  color: #666666;
}

.btn-down-mannual:hover,
.btn-sdk-demo:hover{
  border-color: #c2c2c2;
}

.btn-sdk-release{
  background-color: #6cb9ff;
  color: #ffffff;
}

.btn-sdk-release:hover{
  background-color: #84c4ff;
}

.android-robot{
  display: inline-block;
  width: 15px;
  height: 16px;
  background: url(../assets/images/android-robot.png) no-repeat center center;
  position: relative;
  top: 3px;
  margin-right: 5px;
}

</style>
