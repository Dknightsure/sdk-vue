<template>
  <div>
    <ul class="t-con">
      <li>
        <p class="t-head">
          应用数
        </p>
        <p class="t-num">
          3
        </p>
      </li>
      <li>
        <p class="t-head">
          昨日收益
        </p>
        <p class="t-num">
          475.654
        </p>
      </li>
      <li>
        <p class="t-head">
          七日收益
        </p>
        <p class="t-num">
          475.654
        </p>
      </li>
      <li>
        <p class="t-head">
          总收益
        </p>
        <p class="t-num">
          74475.654
        </p>
      </li>
      <li>
        <p class="t-head">
          可提现金额
        </p>
        <p class="t-num money">
          875.654
        </p>
      </li>
    </ul>
    <div class="m-con">
      <div class="select-container">
        <el-select
          v-model="appSelect.value"
          placeholder="所有应用">
          <el-option
            v-for="item in appSelect.options"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="chart-container">
        <h2 class="page-index">收入趋势</h2>
        <div class="clearfix h-time-container">
          <ul class="c-length-pick">
            <li class="cur">总收入</li>
            <li>新增用户</li>
            <li>活跃用户</li>
          </ul>
          <div class="icon-help">
            <div class="i-help-tip">
              <ul class="i-help-head">
                <li>总收入<span>：</span></li>
                <li>新增用户<span>：</span></li>
                <li>活跃用户<span>：</span></li>
              </ul>
              <ul class="i-help-content">
                <li>激活任务收入+深度任务收入</li>
                <li>首次启动积分墙且获得奖励的用户</li>
                <li>启动过积分墙的用户（去重），启动过一次的
               用户即视为活动用户，包括新用户和老用户。</li>
              </ul>
              <div class="triangle-left"></div>
              <div class="triangle-left-top"></div>
            </div>
          </div>
          <div id="btn-custome-time" class="btn-c-time"></div>
          <div class="select-container timeSelect">
            <div class="select-container">
              <el-select
                v-model="timeSelect.value"
                placeholder="最近7天">
                <el-option
                  v-for="item in timeSelect.options"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
          </div>
        </div>
        <div id="datePicker"></div>
        <div class="chart" id="j-chart"></div>
      </div>
    </div>
    <div class="b-con">
      <h2 class="page-index fl">详细收入清单</h2>
      <div class="icon-help">
        <div class="i-help-tip">
          <ul class="i-help-head">
            <li>新增用户<span>：</span></li>
            <li>活跃用户<span>：</span></li>
            <li>激活收入<span>：</span></li>
            <li>深度任务收入<span>：</span></li>
            <li>总收入<span>：</span></li>
          </ul>
          <ul class="i-help-content">
            <li>首次启动积分墙且获得奖励的用户</li>
            <li>启动过积分墙的用户（去重），启动过一次的用户即视为活动用户，包括新用户和老用户</li>
            <li>用户完成首日任务获得的奖励总数</li>
            <li>深度任务被完成获得的收入总数</li>
            <li>激活任务收入+深度任务收入</li>
          </ul>
          <div class="triangle-left"></div>
          <div class="triangle-left-top"></div>
        </div>
      </div>
      <div class="input-con">
        <table class="input-table">
          <thead>
            <tr>
              <th>时间</th><th>新增用户 </th><th>活跃用户</th><th>激活收入</th><th>深度任务收入</th><th>总收入（元）</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd"><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr class="odd"><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr class="odd"><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr class="odd"><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr class="odd"><td>2016年08月21日</td><td>154</td><td>2154</td><td>154</td><td>54</td><td>6385.248</td></tr>
            <tr class="total"><td>总计</td><td>7843</td><td>57843</td><td>7843</td><td>843</td><td>25385.248</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appSelect:{
        value: '',
        options: [{label: '所有应用', value: 1}, {label: '4399游戏吧', value: 2}, {label: '4399游戏盒', value: 3}, {label: '4399手游', value: 4}]
      },
      timeSelect:{
        value: '',
        options: [{label: '最近7天', value: 1}, {label: '最近30天', value: 2}, {label: '最近60天', value: 3}, {label: '自定义时间', value: 4}]
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

.timeSelect{
  float: right;
  margin-right: 30px;
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

.t-con{
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 4px #dde1eb;

  li{
    float: left;
    background-color: #ffffff;
    box-shadow: 0 1px 4px #dde1eb;
    width: 20%;
    height: 120px;
    text-align: center;
    overflow: hidden;
  }

  .t-head{
    font-size: 14px;
    color: #808080;
    padding-top: 30px;
  }

  .t-num{
    font-size: 24px;
    color: #333333;
    padding-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .t-num.money{
    color: #f58f15;
  }
}

.m-con{
  margin-top: 30px;
}

.chart-container{
  width: 100%;
  height: 392px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 15px;
  box-shadow: 0 1px 4px #dde1eb;

  .icon-help{
    margin: 14px 0 0 10px;
    position: relative;
    z-index: 9;
  }
}

h2.page-index{
  color: #333333;
  font-size: 18px;
  line-height: 55px;
  padding-left: 20px;
}

.c-length-pick{
  overflow: hidden;
  border-radius: 3px;
  font-size: 14px;
  color: #999999;
  line-height: 40px;
  overflow: hidden;
  margin-left: 20px;
  border-top: 1px solid #d3dbeb;
  border-bottom: 1px solid #d3dbeb;
  border-right: 1px solid #d3dbeb;
  width: 273px;
  float: left;

  li{
    float: left;
    width: 90px;
    height: 40px;
    border-left: 1px solid #d3dbeb;
    cursor: pointer;
    text-align: center;
  }

  li:hover{
    background-color: #d3dbeb;
    color: #485166;
  }

  li.cur{
    background-color: #d3dbeb;
    color: #485166;
  }
}

.c-date-pick{
  float: right;
  margin-right: 25px;
  width: 200px;
  height: 40px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  color: #333333;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  padding-left: 10px;
}

.chart{
  width: auto;
  height: 275px;
  padding: 0 20px;
  margin-top: 10px;
  // background-color: #e6e6e6;
}

.b-con{
  margin-top: 15px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px #dde1eb;
  padding-bottom: 20px;

  .icon-help{
    margin: 20.5px 0 0 10px;
  }
}

.input-con{
  width: auto;
  padding: 0 20px;
}

.input-table{
  width: 100%;
  table-layout: fixed;

  tr{
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    text-align: center;

    td{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  tr.total{
    background-color: #ffffff;
    color: #3aa1ff;
  }

  thead{
    background-color: #d0d4db;
    color: #ffffff;
    th{
      text-align: center;
      border-right: 1px solid #dfe3eb;
    }
  }

  tbody{
    color: #666666;

    tr.odd{
      background-color: #f5f6f7;
    }
  }
}

.s-time-picker{
  float: right;
  margin-right: 20px;
  width: 270px !important;
  position: relative;
  border: 1px solid #e6e6e6;

  &.select{
    box-shadow: none;
  }

  &.select-list{
    box-shadow: none;
    border: 1px solid #e6e6e6;
  }

  .select-title{
    width: 240px !important;
  }
}

.icon-help{
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url(../assets/images/help.png) no-repeat center center;
  cursor: pointer;
  position: relative;
}

.icon-help:hover{
  background: url(../assets/images/help-hover.png) no-repeat center center;
}

.i-help-tip{
  display: none;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 4px #dde1eb;
  border-radius: 3px;
  position: absolute;
  left: 25px;
  top: -10px;
  font-size: 12px;

  .i-help-head{
    color: #f58f15;
    position: absolute;
    left: 10px;
    top: 10px;
    text-align: right;

    span{
      color: #666666;
    }
  }

  .i-help-content{
    width: 250px;
    color: #666666;
    padding-left: 62px;
  }
}

.b-con .i-help-tip .i-help-content{
  padding-left: 86px;
}

.triangle-left{
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid #f0f0f0;
  border-bottom: 5px solid transparent;
  position: absolute;
  left: -5px;
  top: 12px;
}

.triangle-left-top{
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 5px solid #ffffff;
  border-bottom: 5px solid transparent;
  position: absolute;
  left: -4px;
  top: 12px;
}

.btn-c-time{
  position: absolute;
  top: 0;
  right: 50px;
}

.h-time-container{
  position: relative;
}

</style>
