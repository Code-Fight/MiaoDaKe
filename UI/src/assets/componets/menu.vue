<template>
  <div>
    <i class='fa fa-align-justify icon-large' id='toggle'></i>
    <ul id='dock'>
      <li class='active launcher'>
        <i class="fa fa-desktop"></i>
        <router-link to="/index" >首页</router-link>
        <!--<a href="#">首页1</a>-->
      </li>
      <li class='launcher'>
        <i class="fa  fa-cloud"></i>
        <a href="#">云产品库</a>
      </li>
      <li class='launcher'>
        <i class="fa  fa-shopping-cart"></i>
        <a href="#">导购系统</a>
      </li>
      <li class='launcher'>
        <i class="fa fa-retweet"></i>
        <a href="#">消息转换</a>
      </li>
      <li class='launcher'>
        <i class="fa fa-comments"></i>
        <a href="#">群消息监控</a>
      </li>
      <li class='launcher'>
        <i class="fa fa-cubes"></i>
        <a href="#">实用工具</a>
      </li>
      <li class='launcher'>
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

 export default{
    data:function()
    {
        return{
          img_per:require('../images/person.png')
        }
    }
  }
</script>