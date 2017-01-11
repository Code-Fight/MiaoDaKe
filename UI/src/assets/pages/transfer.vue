<template>
    <div>

        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">
                    <div class="panel-heading">转换设置</div>
                    <div class="panel-body">
                         <el-row :span="24">
                            商 品 链 接：{{item_link}}<br>
                            优惠券链接：{{quan_link}}
                         </el-row>
                        <el-row :span="24">
                            <el-col :span="12">
                                <label style="height: 100%;vertical-align: top;margin-top: 10px;">转换模式</label>
<el-radio-group v-model="msg_send_mode">
    <el-radio-button label="普通模式"></el-radio-button>
    <el-radio-button label="智能二合一模式"></el-radio-button>
    <el-radio-button label="消息模板模式"></el-radio-button>
</el-radio-group>




</el-col>
<el-col :span="12">

    <div style="display: inline-block;margin-top: 10px" >
<el-checkbox v-model="send_wechat">缩短优惠券链接</el-checkbox>
<span style="margin-left: 50px">PID：</span>
</div>
<div style="float: right">
<el-select v-model="value" placeholder="请选择" style="float: left;width:140px">
<el-option v-for="item in options" :label="item.label" :value="item.value">
</el-option>
</el-select>
<el-button type="primary" style="float: right;margin-left: 10px">生成消息</el-button>
</div>





</div>
</el-col>

</el-row>

<el-row :gutter=20>
    <el-col :span="12">
        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">
                    <div class="panel-heading">计划详情</div>
                    <div class="panel-body" style="padding:0px;height:320px">
<el-table :data="tableData" border style="width: 100%;border:none">
<el-table-column align="left" prop="txt" label="计划名" width="150"></el-table-column>
<el-table-column align="left" prop="txt" label="类型" width="70"></el-table-column>
<el-table-column align="left" prop="txt" label="审核" width="70"></el-table-column>
<el-table-column align="left" prop="txt" label="佣金" width="70"></el-table-column>
<el-table-column align="left" prop="txt" label="状态" width="70"></el-table-column>
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
                <div class="panel-heading">消息预览</div>
                <div class="panel-body" style="height:320px">



</div>
</div>
</el-col>
</el-row>
</el-col>
</el-row>

</div>
</template>

<script>
    export default {
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: 'QQ群渠道'
                }, {
                    value: '选项2',
                    label: '微信渠道'
                }],
                value: '',
                item_link:'...',
                quan_link:'...',
                msg_send_mode: '',//消息发送模式
                send_wechat: false,//发送到微信
                send_qq: true//发送到QQ
            }
        }
    }
</script>