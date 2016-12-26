<template>
    <div>

        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">
                    <div class="panel-heading">转换设置</div>
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
                            <div class="panel-heading">计划详情</div>
                            <div class="panel-body" style="padding:0px;height:350px">
                                <el-table :data="tableData" border style="width: 100%;border:none">
                                    <el-table-column align="left" prop="txt" label="计划名"  width="150"></el-table-column>
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
                            <div class="panel-body"  style="height:350px">
                                
                                   
                                
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

    </div>
</template>