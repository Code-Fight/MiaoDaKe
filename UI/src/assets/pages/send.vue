<template>
    <div class="wrap" id="wrap">
        <ul class="tabClick">
            <li class="active">待发消息</li>
            <li>群发设置</li>
            <li>监控设置</li>
            <li>工作日志</li>
        </ul>
        <div class="lineBorder">
            <div class="lineDiv">
                <!--移动的div-->
            </div>
        </div>
        <div class="tabCon">
            <div class="tabBox">
                <div class="tabList">
                    <el-row>
                        <el-col :span="24">
                            <div class="panel panel-default">

                                <div class="panel-body" style="padding:0px;">
<el-table border style="width: 100%;border:none">
<el-table-column align="center" prop="txt" label="序号" width="70"></el-table-column>
<el-table-column align="center" prop="txt" label="来源" width="140"></el-table-column>
<el-table-column align="center" prop="txt" label="消息内容"></el-table-column>
</el-table>
</div>
</div>
</el-col>
</el-row>

</div>
<div class="tabList">
    <el-row>
        <el-col :span="24">
            <div class="panel panel-default">
                <div class="panel-heading">自动群发设置</div>
                <div class="panel-body">
                    <el-row :span="24">
                        <el-col :span="12">
                            <label style="height: 100%;vertical-align: top;margin-top: 10px;">消息发送模式</label>
<el-radio-group v-model="msg_send_mode">
    <el-radio-button label="普通模式"></el-radio-button>
    <el-radio-button label="智能二合一模式"></el-radio-button>
    <el-radio-button label="消息模板模式"></el-radio-button>
</el-radio-group>


</el-form>


</el-col>
<el-col :span="12">
    <label style="height: 100%;vertical-align: top;margin-top: 10px;">消息发送对象</label>
<div style="display: inline-block;margin-top: 10px" >
<el-checkbox v-model="send_wechat">微信群</el-checkbox>
<el-checkbox v-model="send_qq">QQ群</el-checkbox>
</div>



</el-form>


</el-col>

</el-row>
</div>
</div>
</el-col>
</el-row>

<el-row :gutter=20>
    <el-col :span="12">
        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">

                    <div class="panel-body" style="padding:0px;height:350px">
<el-table border style="width: 100%;border:none">
<el-table-column align="left" prop="txt" label="QQ群列表"></el-table-column>
</el-table>
</div>
</div>
</el-col>
</el-row>
</el-col>
<el-col :span="12">
    <el-row>
        <el-col :span="24">
            <div class="panel panel-default">

                <div class="panel-body" style="padding:0px;height:350px">
<el-table border style="width: 100%;border:none">
<el-table-column align="left" prop="txt" label="微信群列表"></el-table-column>
</el-table>
</div>
</div>
</el-col>
</el-row>
</el-col>
</el-row>

</div>
<div class="tabList">
    <el-row>
        <el-col :span="24">
            <div class="panel panel-default">
                <div class="panel-heading">监控设置</div>
                <div class="panel-body">

                </div>
            </div>
        </el-col>
    </el-row>

    <el-row :gutter=20>
        <el-col :span="12">
            <el-row>
                <el-col :span="24">
                    <div class="panel panel-default">
                        <div class="panel-heading">监控群列表</div>
                        <div class="panel-body" style="padding:0px;height:350px">
<el-table border style="width: 100%;border:none">
<el-table-column align="left" prop="txt" label="QQ群"></el-table-column>
</el-table>
</div>
</div>
</el-col>
</el-row>
</el-col>
<el-col :span="12">
    <el-row>
        <el-col :span="24">
            <div class="panel panel-default">
                <div class="panel-heading">监控日志</div>
                <div class="panel-body" style="height:350px">



</div>
</div>
</el-col>
</el-row>
</el-col>
</el-row>

</div>
<div class="tabList">
    4</div>
</div>
</div>
</div>
</template>
<style>
    *{ margin: 0; padding: 0}
    ul,li{ list-style: none;margin-bottom: 0px}
    .tabClick{ background: #f3f3f3; overflow: hidden}
    .tabClick li{ height:40px; line-height: 40px; width: 25%; float: left; text-align: center}
    .tabClick li.active{ color: #07a6f5; transition: 0.1s; font-weight: bold}
    .tabCon{ overflow: hidden}
    .tabBox{ position: relative}
    .otabList{word-break: break-all; width:100%; line-height:100px; text-align:center; color:#D3D3D3; font-size:36px; font-family: "Arial Black"}
    .lineBorder{ height: 2px; overflow: hidden; border-bottom:1px solid #07a6f5; background: #f3f3f3}
    .lineDiv{ background: #07a6f5; height: 2px; width: 25%;}
</style>
<script charset="utf-8">
    export default {
        data: function () {
            return {
                img_per: require('../images/person.png'),
                msg_send_mode: '',//消息发送模式
                send_wechat: false,//发送到微信
                send_qq: true//发送到QQ
            }
        },
        mounted: function () {
            _init();
        }
    }
    var _init = function () {
        var windowWidth = document.body.clientWidth - 79 - 40; //window 宽度;
        var wrap = document.getElementById('wrap');
        var tabClick = wrap.querySelectorAll('.tabClick')[0];
        var tabLi = tabClick.getElementsByTagName('li');

        var tabBox = wrap.querySelectorAll('.tabBox')[0];
        var tabList = tabBox.querySelectorAll('.tabList');

        var lineBorder = wrap.querySelectorAll('.lineBorder')[0];
        var lineDiv = lineBorder.querySelectorAll('.lineDiv')[0];

        var tar = 0;
        var endX = 0;
        var dist = 0;

        tabBox.style.overflow = 'hidden';
        tabBox.style.position = 'relative';
        tabBox.style.width = windowWidth * tabList.length + "px";

        for (var i = 0; i < tabLi.length; i++) {
            tabList[i].style.width = windowWidth + "px";
            tabList[i].style.float = 'left';
            tabList[i].style.float = 'left';
            tabList[i].style.padding = '0';
            tabList[i].style.margin = '0';
            tabList[i].style.verticalAlign = 'top';
            tabList[i].style.display = 'table-cell';
        }

        for (var i = 0; i < tabLi.length; i++) {
            tabLi[i].start = i;
            tabLi[i].onclick = function () {
                var star = this.start;
                for (var i = 0; i < tabLi.length; i++) {
                    tabLi[i].className = '';
                };
                tabLi[star].className = 'active';
                init.lineAnme(lineDiv, windowWidth / tabLi.length * star)
                init.translate(tabBox, windowWidth, star);
                endX = -star * windowWidth;
            }
        }

        function OnTab(star) {
            if (star < 0) {
                star = 0;
            } else if (star >= tabLi.length) {
                star = tabLi.length - 1
            }
            for (var i = 0; i < tabLi.length; i++) {
                tabLi[i].className = '';
            };

            tabLi[star].className = 'active';
            init.translate(tabBox, windowWidth, star);
            endX = -star * windowWidth;
        };

        tabBox.addEventListener('touchstart', chstart, false);
        tabBox.addEventListener('touchmove', chmove, false);
        tabBox.addEventListener('touchend', chend, false);
        //按下
        function chstart(ev) {
            ev.preventDefault;
            var touch = ev.touches[0];
            tar = touch.pageX;
            tabBox.style.webkitTransition = 'all 0s ease-in-out';
            tabBox.style.transition = 'all 0s ease-in-out';
        };
        //滑动
        function chmove(ev) {
            var stars = wrap.querySelector('.active').start;
            ev.preventDefault;
            var touch = ev.touches[0];
            var distance = touch.pageX - tar;
            dist = distance;
            init.touchs(tabBox, windowWidth, tar, distance, endX);
            init.lineAnme(lineDiv, -dist / tabLi.length - endX / 4);
        };
        //离开
        function chend(ev) {
            var str = tabBox.style.transform;
            var strs = JSON.stringify(str.split(",", 1));
            endX = Number(strs.substr(14, strs.length - 18));

            if (endX > 0) {
                init.back(tabBox, windowWidth, tar, 0, 0, 0.3);
                endX = 0
            } else if (endX < -windowWidth * tabList.length + windowWidth) {
                endX = -windowWidth * tabList.length + windowWidth
                init.back(tabBox, windowWidth, tar, 0, endX, 0.3);
            } else if (dist < -windowWidth / 3) {
                OnTab(tabClick.querySelector('.active').start + 1);
                init.back(tabBox, windowWidth, tar, 0, endX, 0.3);
            } else if (dist > windowWidth / 3) {
                OnTab(tabClick.querySelector('.active').start - 1);
            } else {
                OnTab(tabClick.querySelector('.active').start);
            }
            var stars = wrap.querySelector('.active').start;
            init.lineAnme(lineDiv, stars * windowWidth / 4);

        };
    };

    var init = {
        translate: function (obj, windowWidth, star) {
            obj.style.webkitTransform = 'translate3d(' + -star * windowWidth + 'px,0,0)';
            obj.style.transform = 'translate3d(' + -star * windowWidth + ',0,0)px';
            obj.style.webkitTransition = 'all 0.3s ease-in-out';
            obj.style.transition = 'all 0.3s ease-in-out';
        },
        touchs: function (obj, windowWidth, tar, distance, endX) {
            obj.style.webkitTransform = 'translate3d(' + (distance + endX) + 'px,0,0)';
            obj.style.transform = 'translate3d(' + (distance + endX) + ',0,0)px';
        },
        lineAnme: function (obj, stance) {
            obj.style.webkitTransform = 'translate3d(' + stance + 'px,0,0)';
            obj.style.transform = 'translate3d(' + stance + 'px,0,0)';
            obj.style.webkitTransition = 'all 0.1s ease-in-out';
            obj.style.transition = 'all 0.1s ease-in-out';
        },
        back: function (obj, windowWidth, tar, distance, endX, time) {
            obj.style.webkitTransform = 'translate3d(' + (distance + endX) + 'px,0,0)';
            obj.style.transform = 'translate3d(' + (distance + endX) + ',0,0)px';
            obj.style.webkitTransition = 'all ' + time + 's ease-in-out';
            obj.style.transition = 'all ' + time + 's ease-in-out';
        },
    }
    //document.getElementById("wrap").onload=_init;
</script>