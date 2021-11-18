/**
* 系统管理  组织架构
*/
<template>
  <div>
    <el-container>
      <el-header>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>组织架构</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-container>
        <el-aside>
          <!--组织树-->
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-aside>
        <el-main>
          <!--搜索筛选-->
          <el-form :inline="true" :model="formInline" class="user-search">
            <el-form-item label="搜索：">
              <el-input size="small" v-model="formInline.roleName" placeholder="输入角色名称"></el-input>
            </el-form-item>
            <el-form-item label="">
              <el-input size="small" v-model="formInline.roleNo" placeholder="输入角色代码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
              <el-button size="small" type="primary" icon="el-icon-plus" @click="handleEdit()">添加</el-button>
            </el-form-item>
          </el-form>
          <!--成员列表-->
          <el-table size="small" :data="listData" highlight-current-row v-loading="loading" border
                    element-loading-text="拼命加载中" style="width: 100%;">
            <el-table-column align="center" type="selection" width="60">
            </el-table-column>
            <el-table-column sortable prop="deptName" label="部门名称" width="300">
            </el-table-column>
            <el-table-column sortable prop="deptNo" label="部门代码" width="300">
            </el-table-column>
            <el-table-column sortable prop="editTime" label="修改时间" width="300">
              <template slot-scope="scope">
                <div>{{ scope.row.editTime|timestampToTime }}</div>
              </template>
            </el-table-column>
            <el-table-column sortable prop="editUser" label="修改人" width="300">
            </el-table-column>
            <el-table-column align="center" label="操作" min-width="300">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'organization',
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      formInline: {
        page: 1,
        limit: 10,
        varLable: '',
        varName: '',
        token: localStorage.getItem('logintoken')
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
