<template>
    <div>

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
                                <el-table :data="tableData" border style="width: 100%;border:none">
                                    <el-table-column align="left" prop="txt" label="QQ群"  ></el-table-column>
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
                            <div class="panel-body"  style="height:350px">
                                
                                   
                                
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

    </div>
</template>