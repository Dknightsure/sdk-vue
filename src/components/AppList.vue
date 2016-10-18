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
          <tr v-for="item in appList">
            <td>
              <a href="#">{{ item.name }}</a>
            </td>
            <td>{{ item.unit }}</td>
            <td>{{ item.percent }}</td>
            <td>{{ item.callbackKey }}</td>
            <td>{{ item.sdkKey }}</td>
            <td>{{ item.callbackAddress }}</td>
            <td>
              <el-switch
                v-model="item.isOn"
                on-color="#8fd362"
                off-color="#c2c6cc">
              </el-switch>
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
      appList: [
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: true
        },
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: false
        },
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: false
        },
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: true
        },
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: false
        },
        {
          name: '4399游戏盒',
          unit: '盒币',
          percent: 50,
          callbackKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          sdkKey: 'd3374fc28aa532a783f06e1d7a55qjwe',
          callbackAddress: 'www.4399.com',
          isOn: true
        }
      ]
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

      tr:nth-child(odd){
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
</style>
