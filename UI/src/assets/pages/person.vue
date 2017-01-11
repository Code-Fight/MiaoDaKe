<template>
    <el-row>
        <el-col :span="10" :offset="6">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>

                <el-form-item label="到期时间">
                    <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
</el-col>
<el-col class="line" :span="2">
    </el-form-item>
  
  
    <el-form-item label="点击数">
        <el-lable v-model="form.desc"></el-lable>
    </el-form-item>
    <el-form-item label="付款笔数">
        <el-lable v-model="form.desc"></el-lable>
    </el-form-item>
    <el-form-item label="效果预估">
        <el-lable v-model="form.desc"></el-lable>
    </el-form-item>
    <el-form-item label="预估收入">
        <el-lable v-model="form.desc"></el-lable>
    </el-form-item>
   
    </el-form>
</el-col>
</el-row>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>