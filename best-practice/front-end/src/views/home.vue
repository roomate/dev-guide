<template>
    <el-container style="height: 100%;">
        <el-header>
            <div class="logo">Dev-Guide</div>
            <div class="userInfo">
                <div class="avator">
                    <img :src="user.avatar" alt="">
                </div>
                <el-dropdown trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{user.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="userinfo">个人信息</el-dropdown-item>
                        <el-dropdown-item command="seting">系统设置</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </el-header>
        <el-container>
            <!--左侧导航-->
            <el-aside width="200px">
                <el-menu :router="true">
                    <template v-for="menu in menus">
                        <component :index="menu.id.toString()" :key="menu.id" :route="menu.url" v-bind:is="menu.children.length>0 ? 'el-submenu':'el-menu-item'">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span slot="title">{{menu.name}}</span>
                            </template>
                            <template v-if="menu.children.length>0" v-for="children in menu.children">
                                <component :index="children.id.toString()" :key="children.id" :route="children.url" v-bind:is="children.children.length>0 ? 'el-submenu':'el-menu-item'">
                                    <template slot="title">{{children.name}}</template>
                                    <template v-if="children.children.length>0" v-for="sub_children in children.children">
                                        <el-menu-item :index="sub_children.id.toString()" :key="sub_children.id" :route="sub_children.url">{{sub_children.name}}</el-menu-item>
                                    </template>
                                </component>
                            </template>
                        </component>
                    </template>
                </el-menu>
            </el-aside>
            <!--主内容区域-->
            <el-main>
                <div :style="{height:'30px'}">
                    <el-row>
                        <el-col :span="24">
                            <template v-for="(item,key) in routes">
                                <el-tag :key="key" size="small" :closable="item.closable">{{item.lable}}</el-tag>
                            </template>
                            <el-tag size="medium" closable>中等标签</el-tag>
                            <el-tag size="medium" closable>中等标签</el-tag>
                        </el-col>
                    </el-row>
                   
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <template v-for="(item,index) in reversedBreadcrumb">
                            <el-breadcrumb-item :key="index">{{item}}</el-breadcrumb-item>
                        </template> 
                    </el-breadcrumb>
                    <i class="el-icon-refresh" @click="reload = false">刷新1</i>
                    <i class="el-icon-refresh" @click="reload=true">刷新2</i>
                </div>
                <keep-alive>
                    <router-view v-if="reload" />
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "home",
        data() {
            return {
                reload:true,
                menus: null,
                user: this.$store.state.user,
                routes: [
                    {
                        lable:'首页',
                        route:'home',
                        closable:false
                    }
                ]
            }
        },
        created(){
            this.handleGetMenu().then((data)=>{
                this.menus = data;
                console.log(this.menus)
            }).catch((err)=>{
                console.log(err);
            })
        },
        computed: {
            // 由路由名计算面包屑导航
            reversedBreadcrumb: function () {
                let menu = this.menus;
                let route_name = this.$route.path;
                for (let x in menu){
                    let name = [];
                    name[0] = menu[x].name;
                    if (menu[x].url === route_name){
                        return name;
                    }
                    if (menu[x].children.length>0){
                        for (let y in menu[x].children) {
                            let _menu = menu[x].children[y];
                            name[1] = _menu.name;
                            if (_menu.url === route_name) {
                                return name;
                            }
                            if (_menu.children.length > 0) {
                                for (let z in _menu.children) {
                                    let __menu = _menu.children[z]
                                    name[2] = __menu.name;
                                    if (__menu.url === route_name) {
                                        return name;
                                    }
                                }
                            }
                        }
                    }
                }
                return [];
            }
        },
        methods:{
            ...mapActions([
                'handleLogOut',
                'handleGetMenu'
            ]),
            handleCommand(command){
                // 退出登录
                if(command == 'logout'){
                    this.handleLogOut().then(()=>{
                        this.$message.success('退出登录成功')
                        this.$router.push('/login')
                    });
                    
                }
            },
        }
    }

</script>

<style scoped>
    .el-header {
        background-color: #515a6e;
        color: #333;
        line-height: 60px;
    }
    .logo{
        width: 150px;
        float: left;
        color: #fff;
        font-size: 20px;
    }
    .userInfo{
        float: right;
    }
    .avator{
        float: left;
    }
    .avator img{
        box-sizing: border-box;
        padding: 10px;
        display: block;
        height: 60px;
        width: 60px;
        border-radius: 30px;
    }
    .el-icon-refresh{
        color: #409EFF;
        font-size: 14px;
        float: left;
        padding-left: 4px;
        cursor: pointer;
    }
    .el-breadcrumb{
        float: left;
    }

    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-aside {
        background-color: #fff;
        color: #333;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .el-tag+.el-tag {
        margin-left: 10px;
    }
</style>