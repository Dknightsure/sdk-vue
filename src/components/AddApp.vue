<template>
  <div class="add-app">
    <form class="add-form clearfix">
      <ul class="f-head">
        <li>应用列表</li>
        <li>积分单位</li>
        <li>兑换比例</li>
        <li>回调地址</li>
      </ul>
      <ul class="f-content">
        <li><input type="text" value=""><i class="f-warning">应用名称不能为空</i></li>
        <li><input type="text" value=""></li>
        <li>
          分给用户<input type="text" class="f-fen" value="">积分/元
          <div class="f-help">
            <div class="f-help-content">
              完成任务后，每1元人民币，用户将获得的积分数量。例如，100积分=1元，若兑换比率为50，用户完成了2元（200积分）的任务，则用户将获得100积分。
              <div class="triangle-left">

              </div>
              <div class="triangle-left-top">

              </div>
            </div>
          </div>
        </li>
        <li>
          <input type="text" value=""><i class="f-tip">该回调地址，用于给应用方反馈信息</i>
        </li>
        <li>
          <button type="button" name="button" class="f-close">关闭</button>
          <button type="button" name="button" class="f-add">添加</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello AddApp!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.add-app{
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 1px 4px #dde1eb;
  overflow: hidden;
  border-radius: 6px;
  padding-bottom: 40px;
}

.add-app.marg-t{
  margin-top: 20px;
}

.f-head{
  float: left;
  color: #333333;
  font-size: 14px;

  li{
    margin-top: 20px;
    width: 105px;
    height: 40px;
    text-align: right;
    line-height: 40px;
  }
}

.f-close,
.f-add,
.f-save,
.f-edit{
  width: 120px;
  height: 40px;
  border-radius: 3px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  float: left;
}

.f-close{
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
  color: #666666;
}

.f-add{
  background-color: #6cb9ff;
  color: #ffffff;
}

.f-save{
  background-color: #8fd362;
  color: #ffffff;
}

.f-edit{
  background-color: #6cb9ff;
  color: #ffffff;
}

.f-close:hover{
  border-color: #c2c2c2;
}

.f-add:hover{
  background-color: #84c4ff;
}

.f-save:hover{
  background-color: #9fe86f;
}

.f-edit:hover{
  background-color: #84c4ff;
}

.f-content.f-info{
  font-size: 14px;
  color: #999999;
  line-height: 40px;
}

.f-content{
  float: left;
  color: #333333;
  font-size: 14px;
  margin-left: 20px;

  li{
    margin-top: 20px;
    height: 40px;
    line-height: 40px;

    input{
      padding-left: 5px;
      width: 335px;
      height: 38px;
      border-radius: 3px;
      border: 1px solid #e6e6e6;
      line-height: 38px;
      margin-right: 10px;
    }

    input.f-fen{
      width: 180px;
      margin: 0 10px 0 10px;
    }

    button{
      margin: 20px 20px 0 0;
    }
  }

  li.secret-key{
    line-height: 40px;
    font-size: 14px;
    color: #999999;
  }
}

.f-warning{
  display: inline-block;
  padding-left: 15px;
  background: url(../assets/images/warning.png) no-repeat left center;
  color: #fd894e;
  font-size: 12px;
  line-height: 40px;
}

.f-help{
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(../assets/images/help.png) no-repeat center center;
  position: relative;
  top: 2px;
  cursor: pointer;
  position: relative;
}

.f-help:hover{
  background: url(../assets/images/help-hover.png) no-repeat center center;
}

.f-help-content{
  display: none;
  color: #999999;
  font-size: 12px;
  width: 287px;
  padding: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  line-height: 18px;
  position: absolute;
  left: 32px;
  top: -34px;

  .triangle-left{
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 5px solid #f0f0f0;
    border-bottom: 5px solid transparent;
    position: absolute;
    left: -5px;
    top: 36px;
  }

  .triangle-left-top{
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 5px solid #ffffff;
    border-bottom: 5px solid transparent;
    position: absolute;
    left: -4px;
    top: 36px;
  }
}

.f-tip{
  display: inline-block;
  padding-left: 15px;
  background: url(../assets/images/tip.png) no-repeat left center;
  color: #999999;
  font-size: 12px;
  line-height: 40px;
}

</style>
