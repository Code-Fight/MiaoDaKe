<template>
<!-- Navbar -->
  <div id='wrapper' >
    <!-- Sidebar -->
    <section id='sidebar'>
      <i class='fa fa-align-justify icon-large' id='toggle'></i>
      <ul id='dock'>
        <li class='active launcher'>
          <i class="fa fa-desktop"></i>
          <a href="#">首页1</a>
        </li>
        <li class='launcher' >
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
    </section>
    <!-- Tools -->
    <section id="tools" style="-webkit-app-region:drag">

      <ul class="breadcrumb" id="breadcrumb" style="    text-align: center;">
        <span class="m_title" >喵大客淘客助手</span>

      </ul>
      <div id="toolbar" class="__web-inspector-hide-shortcut__">
        <ul id="dock-top">
          <li class='launcher'>
            <i class="fa fa-cog"></i>
          </li>
          <li class='launcher'>
            <i class="fa fa-minus"></i>
          </li>
          <li class='launcher'>
            <i class="fa fa-window-maximize"></i>
          </li>
          <li class='launcher'>
            <i class="fa fa-times"></i>
          </li>
        </ul>

      </div>
    </section>
    <!-- Content -->
    <div id='content'>
      <div id="app"></div>
    </div>
  </div>

</template>
<script>

  module.exports={
    data:function()
    {
        return{
          img_per:require('../images/person.png')
        }
    }
  }
</script>

<style>
  
  .m_title{
    background: transparent;
    font-size: 18px;
    cursor:Default;
    -webkit-user-select:none;
  }
</style>