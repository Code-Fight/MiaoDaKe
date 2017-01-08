<template>
  <div>
    <i class='fa fa-align-justify icon-large' id='toggle'></i>
    <ul id='dock'>
      <li class='active launcher' @click="menuclick">
        <i class="fa fa-desktop"></i>
        <router-link to="/index">首页</router-link>
        <!--<a href="#">首页1</a>-->
      </li>
      <li class='launcher' @click="menuclick">
        <i class="fa  fa-cloud"></i>
        <router-link to="/could">云产品库</router-link>
      </li>
      <li class='launcher' @click="menuclick">
        <i class="fa fa-retweet"></i>
        <router-link to="/transfer">消息转换</router-link>
      </li>

      <li class='launcher' @click="menuclick">
        <i class="fa fa-comments"></i>
        <router-link to="/monitor">群消息监控</router-link>
      </li>

      <li class='launcher' @click="menuclick">
        <i class="fa fa-comments"></i>
        <router-link to="/send">群消息监控</router-link>
      </li>

      <li class='launcher' @click="menuclick">
        <i class="fa fa-cubes"></i>
        <a href="#">实用工具</a>
      </li>
      <li class='launcher' @click="menuclick">
        <i class="fa fa-building-o"></i>
        <a href="#">订单查询</a>
      </li>


    </ul>
    <div id='beaker'>
      <img :src="img_per" />
    </div>
  </div>
</template>
<script>
  // require("./javascripts/jquery.js")
  // jQuery(function(){ 
  //      $("#dock>li").each(function(index,ele){$(ele).on("click",menuclick)});
  // })





  export default {
    data: function () {
      return {
        img_per: require('../images/person.png')
      }
    },
    mounted: function () {
      // var _lis = document.querySelectorAll("#dock li");
      // //console.log(_lis.length)
      // for (var x=0;x< _lis.length;x++) {
      //   console.log(x)
      //   _lis[x].click += menuclick;
      // }
    },
    methods: {
      menuclick: function (obj) {
        var _lis = document.querySelectorAll("#dock li");
        //console.log(_lis.length)
        for (var x = 0; x < _lis.length; x++) {
          console.log(x)
          _lis[x].className = "launcher";
        }
        console.log(obj)
        console.log(obj.target.parentElement)
        obj.target.parentElement.className = "active launcher";
      }
    }
  }
</script>