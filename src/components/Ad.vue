<template>
  <div>
    <div class="select">
        <div class="select-title"><span>4399游戏盒</span><b></b></div>
        <div class="select-list">
            <div class="select-list-inner">
                <ul>
                    <li>4399游戏盒</li>
                    <li>4399游戏吧</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="blockAd-con">
      <h1>屏蔽广告 <span>( 请选择需要屏蔽的广告 )</span></h1>
      <div class="b-t-con">
        <ul class="c-app-pick">
          <li class="cur">全部</li>
          <li>已屏蔽应用</li>
          <li>未屏蔽应用</li>
        </ul>
        <button type="button" class="btn-instant-work normal">立即生效</button>
      </div>
      <div class="block-list">
        <table>
          <thead>
            <tr>
              <th class="col-1">选择</th>
              <th class="col-2">图标</th>
              <th class="col-3">广告名称</th>
              <th class="col-4">价格</th>
              <th class="col-5">广告语</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd">
              <td>
                <div class="checkbox-right">
                  <input type="checkbox" id="ad-1" checked>
                  <label for="ad-1"></label>
                </div>
              </td>
              <td>
                <img src="../assets/images/test.png"/>
              </td>
              <td>
                水果直播
              </td>
              <td>
                <div class="b-price">
                  0.4元
                  <ul class="price-of-day">
                    <li>第1天：<span>0.9393939393</span>元</li>
                    <li>第2天：<span>0.93</span>元</li>
                    <li>第3天：<span>0.93</span>元</li>
                    <li>第4天：<span>0.93</span>元</li>
                    <li>第5天：<span>0.93</span>元</li>
                    <li>第6天：<span>0.93</span>元</li>
                    <div class="triangle-left"></div>
                    <div class="triangle-left-top"></div>
                  </ul>
                </div>
              </td>
              <td>
                 萌妹子、网红美女应有尽有
              </td>
            </tr>
            <tr>
              <td>
                <div class="checkbox-right">
                  <input type="checkbox" id="ad-2" checked>
                  <label for="ad-2"></label>
                </div>
              </td>
              <td>
                <img src="../assets/images/test.png" />
              </td>
              <td>
                水果直播
              </td>
              <td>
                0.4元
              </td>
              <td>
                 萌妹子、网红美女应有尽有
              </td>
            </tr>
            <tr class="odd">
              <td>
                <div class="checkbox-right">
                  <input type="checkbox" id="ad-3">
                  <label for="ad-3"></label>
                </div>
              </td>
              <td>
                <img src="../assets/images/test.png" />
              </td>
              <td>
                水果直播
              </td>
              <td>
                0.4元
              </td>
              <td>
                 萌妹子、网红美女应有尽有
              </td>
            </tr>
            <tr>
              <td>
                <div class="checkbox-right">
                  <input type="checkbox" id="ad-4" checked>
                  <label for="ad-4"></label>
                </div>
              </td>
              <td>
                <img src="../assets/images/test.png" />
              </td>
              <td>
                水果直播
              </td>
              <td>
                0.4元
              </td>
              <td>
                 萌妹子、网红美女应有尽有
              </td>
            </tr>
            <tr class="odd">
              <td>
                <div class="checkbox-right">
                  <input type="checkbox" id="ad-5" checked>
                  <label for="ad-5"></label>
                </div>
              </td>
              <td>
                <img src="../assets/images/test.png" />
              </td>
              <td>
                水果直播
              </td>
              <td>
                0.4元
              </td>
              <td>
                 萌妹子、网红美女应有尽有
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="toast-success">
        <i class="success-icon"></i>
        <p>
          应用编辑成功
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Ad!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

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

.blockAd-con{
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 1px 4px #dde1eb;
  margin-top: 20px;
  padding-bottom: 20px;
  position: relative;
}

h1{
  font-size: 18px;
  line-height: 58px;
  float: left;
  margin-left: 20px;

  span{
    font-size: 14px;
    color: #40a4ff;
  }
}

.b-t-con{
  overflow: hidden;
  clear: both;
}

.c-app-pick{
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
  float: left;

  li{
    float: left;
    width: 110px;
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

.btn-instant-work{
  width: 120px;
  height: 40px;
  border-radius: 3px;
  font-size: 14px;
  color: #ffffff;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  float: right;
  margin-right: 20px;
}

.btn-instant-work.normal{
  background-color: #6cb9ff;
}

.btn-instant-work.normal:hover{
  background-color: #84c4ff;
}

.btn-instant-work.disabled{
  background-color: #d0d4db;
  cursor: none;
}

.block-list{
  margin-top: 20px;
  padding: 0 20px;
}

table{
  width: 100%;
  text-align: center;
  table-layout: fixed;

  .col-1{
    width: 7.54%;
  }

  .col-2{
    width: 11.32%;
  }

  .col-3{
    width: 18.20%;
  }

  .col-4{
    width: 16.22%;
  }

  .col-5{
    width: 46.50%;
  }

  thead{
    background-color: #d0d4db;
    width: 100%;
    height: 32px;
    color: #ffffff;
    font-size: 14px;
    line-height: 32px;

    th{
      border-right: 1px solid #dfe3eb;
      text-align: center;
    }
  }

  tbody{
    font-size: 14px;
    color: #666666;

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
      position: relative;

      img{
        display: block;
        margin: 0 auto;
        width: 40px;
        height: 40px;
        border-radius: 3px;
        overflow: hidden;
      }
    }
  }
}

input[type=checkbox]{
  display: none;
}

.checkbox-right{
  width: 16px;
  height: 16px;
  margin: 0 auto;
  position: relative;
  border-radius: 3px;
  overflow: hidden;

  label{
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(../assets/images/icon-right.png);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #e6e6e6;
    cursor: pointer;
  }

  label.cur{
    background-color: #8fd362;
  }
}

.b-price{
  display: inline-block;
  position: relative;
}

.price-of-day{
  position: absolute;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0 1px 4px #dde1eb;
  padding: 10px;
  top: -25%;
  left: 130%;
  min-width: 80px;
  z-index: 10;

  li{
    height: 16px;
    white-space: nowrap;
    text-align: left;
  }

  span{
    color: #f58f15;
  }
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

.toast-success{
  display: none;
  width: 120px;
  height: 120px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.6);
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);
  position: absolute;
  top: 140px;
  left: 50%;
  margin-left: -60px;

  i.success-icon{
    display: block;
    width: 50px;
    height: 50px;
    background: url(../assets/images/success.png) no-repeat center center;
    margin: 15px auto 0 auto;
  }

  p{
    color: #ffffff;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    margin-top: 7px;
  }
}

</style>
