<template>
    <div>
        <el-row :gutter="20" style="height:400px">
            <el-col :span="8">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="left" prop="txt" label="软件教程" style="width:99.9%">
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="8">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="left" prop="txt" label="相关软件" style="width:99.9%">
                    </el-table-column>
                </el-table>
            </el-col>
            <el-col :span="8">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="left" prop="txt" label="联盟咨询" style="width:99.9%">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">
                    <div class="panel-heading">软件说明</div>
                    <div class="panel-body">
                        <div class="col-sm-6">
                            <p>更多教程还在制作中，如果有不懂的问题，可以留言</p>
                            <p>对软件有好的建议与功能添加，也可以给我留言</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .panel-default {
        border-color: #ddd
    }
    
    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05)
    }
    
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px
    }
    
    .panel-heading>.dropdown .dropdown-toggle {
        color: inherit
    }
    
    .panel-body {
        padding: 15px
    }
</style>
<script>
    export default {
      data() {
        return {
          tableData: [{
            txt: '这是是测试数据，1，2，3，4......'            
          }, {
            txt: '这是是测试数据，1，2，3，4......'
          }, {
            txt: '这是是测试数据，1，2，3，4......'
          }, {
            txt: '这是是测试数据，1，2，3，4......'
          }]
        }
      }
    }
  </script>