<template>
  <div class="app-list">
    <h1>应用列表</h1>
    <button type="button" name="button" class="btn-add-app">添加应用</button>
    <div class="app-container">
      <table>
        <thead>
          <tr>
            <th class="col-1">应用名称</th><th class="col-2">兑换单位</th><th class="col-3">兑换比率</th><th class="col-4">回调地址私钥</th><th class="col-5">SDK私钥</th><th class="col-6">回调地址</th><th class="col-7">积分墙操作</th>
          </tr>
        </thead>
        <tbody>
          <tr class="odd">
            <td><a href="#">4399游戏盒</a></td><td>盒币</td><td>50</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>www.4399.com</td>
            <td>
              <div class="Switch Switch_FlatCircular On">
                <div class="SwitchLine"></div>
                <span class="SwitchButton"></span>
              </div>
              <div class="icon-edit">
                <div class="edit-tip">
                  编辑
                  <div class="triangle-down"></div>
                  <div class="triangle-down-top"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><a href="#">4399游戏盒</a></td><td>盒币</td><td>50</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>www.4399.com</td>
            <td>
              <div class="Switch Switch_FlatCircular Off">
                <div class="SwitchLine"></div>
                <span class="SwitchButton"></span>
              </div>
              <div class="icon-edit">
                <div class="edit-tip">
                  编辑
                  <div class="triangle-down"></div>
                  <div class="triangle-down-top"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="odd">
            <td><a href="#">4399游戏盒</a></td><td>盒币</td><td>50</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>www.4399.com</td>
            <td>
              <div class="Switch Switch_FlatCircular On">
                <div class="SwitchLine"></div>
                <span class="SwitchButton"></span>
              </div>
              <div class="icon-edit">
                <div class="edit-tip">
                  编辑
                  <div class="triangle-down"></div>
                  <div class="triangle-down-top"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td><a href="#">4399游戏盒</a></td><td>盒币</td><td>50</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>d3374fc28aa532a783f06e1d7a55qjwe</td><td>www.4399.com</td>
            <td>
              <div class="Switch Switch_FlatCircular On">
                <div class="SwitchLine"></div>
                <span class="SwitchButton"></span>
              </div>
              <div class="icon-edit">
                <div class="edit-tip">
                  编辑
                  <div class="triangle-down"></div>
                  <div class="triangle-down-top"></div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello AppList!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.app-list{
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 4px #dde1eb;
  overflow: hidden;
  padding: 0 0 20px 0;
}

h1{
  font-size: 18px;
  line-height: 58px;
  float: left;
  margin-left: 20px;
}

.app-container{
  padding: 0 20px 0 20px;

  table{
    width: 100%;
    text-align: center;
    table-layout: fixed;

    .col-1{
      width: 9.43%;
    }

    .col-2,
    .col-3{
      width: 7.16%;
    }

    .col-4,
    .col-5{
      width: 22.9%;
    }

    .col-6,
    .col-7{
      width: 15.47%;
    }

    thead{
      background-color: #d0d4db;
      width: 100%;
      height: 40px;
      color: #ffffff;
      font-size: 14px;
      line-height: 40px;

      th{
        border-right: 1px solid #dfe3eb;
        text-align: center;
      }
    }

    tbody{
      font-size: 12px;
      color: #333333;

      tr{
        height: 60px;
      }

      a{
        color: #40a4ff;
        text-decoration: underline;
      }

      tr.odd{
        background-color: #f5f6f7;
      }

      td{
        word-wrap: break-word;
        padding: 20px;
      }
    }
  }
}

.btn-add-app{
  width: 72px;
  height: 32px;
  padding-left: 11px;
  border-radius: 3px;
  background-color: #6cb9ff;
  color: #ffffff;
  font-size: 12px;
  line-height: 32px;
  cursor: pointer;
  background-image: url(../assets/images/add.png);
  background-repeat: no-repeat;
  background-position: 5px 11px;
  float: right;
  margin: 13px 20px 0 0;
}

.btn-add-app:hover{
  background-color: #84c4ff;
}

.icon-edit{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: url(../assets/images/edit.png) no-repeat center center;
  cursor: pointer;
  position: relative;
  top: 6px;

  .edit-tip{
    display: none;
    font-size: 12px;
    color: #666666;
    position: absolute;
    width: 34px;
    height: 25px;
    background-color: #ffffff;
    top: -33px;
    left: 6px;
    line-height: 25px;

    .triangle-down,
    .triangle-down-top{
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid #ffffff;
      position: absolute;
      left: 5px;
      bottom: -4px;
    }

    .triangle-down-top{
      bottom: -3px;
      border-top: 5px solid transparent;
    }
  }
}

.icon-edit:hover{
  background: url(../assets/images/edit-hover.png) no-repeat center center;

  .edit-tip{
    display: block;
  }
}

/* FlatCircular */
.Switch_FlatCircular {
    position: relative;
    width: 58px;
    height: 18px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    background-color: #c2c6cc;
    border-radius: 9px;
}

.Switch_FlatCircular .SwitchLine:after{
  visibility: visible;
}

.Switch_FlatCircular .SwitchLine:before{
  visibility: hidden;
}

.Switch_FlatCircular.On .SwitchLine:before{
  visibility: visible;
}

.Switch_FlatCircular.On .SwitchLine:after{
  visibility: hidden;
}

.Switch_FlatCircular .SwitchLine:before {
    position: absolute;
    content: "已开启";
    color: #fff;
    font-size: 12px;
    left: 4px;
    top: 0;
}

.Switch_FlatCircular .SwitchLine:after {
    position: absolute;
    content: "已隐藏";
    color: #fff;
    font-size: 12px;
    right: 4px;
    top: 0;
}

.Switch_FlatCircular .SwitchButton {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 2px;
    top: 1px;
    z-index: 2;
    background-color: #fff;
    border-radius: 8px;
}

.Switch, .Switch * {
    -webkit-transition-property: all;
    -moz-transition-property: all;
    -o-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.2s;
    -moz-transition-duration: 0.2s;
    -o-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transition-delay: 0s;
    -moz-transition-delay: 0s;
    -o-transition-delay: 0s;
    transition-delay: 0s;
    box-sizing: border-box !important;
}

.Switch_FlatCircular.On {
    background-color: #8fd362;
}

.Switch_FlatCircular.On .SwitchLine {
}

.Switch_FlatCircular.On .SwitchButton {
    border: 1px solid #a7cce9;
    left: 41px;
}

.Switch_FlatCircular.On .SwitchButton:after, .Switch_FlatCircular.On .SwitchButton:before {
    background-color: #a7cce9;
}

.Switch_FlatCircular.Disabled {
    opacity: 0.3;
}

.Switch_FlatCircular.Disabled .SwitchButton {
    /*opacity:0.5;*/
}

.Switch_FlatCircular.On.Disabled .SwitchLine {
    /*opacity:0.5;*/
}

</style>
