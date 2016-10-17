<template>
  <div>
    <div class="select-container">
      <el-select
        v-model="selectData.selected"
        placeholder="4399积分墙">
        <el-option
          v-for="item in selectData.options"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="add-app marg-t">
      <form class="add-form clearfix">
        <ul class="f-head">
          <li>积分单位</li>
          <li>兑换比例</li>
          <li>SDK私钥</li>
          <li>回调地址私钥</li>
          <li>回调地址</li>
        </ul>
        <ul class="f-content f-info">
          <li>盒币</li>
          <li>60</li>
          <li class="secret-key">d3374fc28aa532a783f06e1d7a55d220</li>
          <li class="secret-key">d3374fc28aa532a783f06e1d7a55d220</li>
          <li>www.4399.com</li>
          <li>
            <button type="button" name="button" class="f-edit">编辑</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Info!',
      selectData: {
        selected: {label: '4399积分墙'},
        options: [{label: '4399积分墙'}, {label: '4399游戏盒'}, {label: '4399游戏吧'}]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.select-container{
  width: 200px;
}

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

.select{
  height:40px;
  width:200px;
  background-color: #ffffff;
  position:relative;
  box-shadow: 0 1px 4px #dde1eb;
  border-radius: 3px;
}

.select-title{
  font-size:14px;
  line-height:40px;
  width: 170px;
  height:40px;
  padding: 0 15px;
  float:right;
  cursor:pointer;
  color: #333333;
}

.select-title span{
  float:left;
}

.select-title b{
  float:right;
  width: 0;
  height: 0;
  line-height:0;
  font-size:0;
  vertical-align: top;
  border-top: 4px solid #acb2bf;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  margin-top:18px;
  display:inline;
  margin-left:5px;
  _border-color:#000 #fff #fff #fff;
  overflow:hidden; display:inline;
}

.select-active .select-title b{
  border-bottom: 4px solid #acb2bf;
  border-top:0;
  _border-color:#fff #fff #000 #fff;
  _border-width:5px;
  _border-style:solid;
  _margin-top:8px;
}

.select-list{
  position:absolute;
  width:100%; top:45px;
  display:none;
  background-color:#fff;
  box-shadow: 0 1px 4px #dde1eb;
  border-radius: 5px;
  z-index: 1;
}

.select-list-inner{
  border-radius:3px;
}

.select-list ul{
  padding:5px 0;
}

.select-list ul li.divider{
  background-color:#CCC;
  height:1px;
  overflow:hidden;
  margin:5px 0;
  line-height:0;
  font-size:0;
}

.select-list ul li{
  display:block;
  text-decoration:none;
  color:#333333;
  padding:0 15px;
  font-size:14px;
  height:40px;
  line-height:40px;
  cursor: pointer;
}

.select-list ul li:hover,
.select-list ul li.cur{
  background-color:#f5f5f5;
  text-decoration:none !important;
}

</style>
