<template>
  <div>
    <div class="sidebar-top">
      <div>后台管理系统</div>
      <div>退出</div>
    </div>
    <div class="sidebar-cont">
      <el-menu>
        <div v-for="(item,index) in menu" :key="index">
          <el-menu-item v-if="item.Subclass.length == 0" :index="item.id">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{item.title}}</span>
          </el-menu-item>
          <el-sub-menu v-if="item.Subclass.length > 0" :index="item.id">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{item.title}}</span>
            </template>
            <div v-for="(two,index_two) in item.Subclass" :key="index_two">
              <el-menu-item :index="two.id">{{ two.title }}</el-menu-item>
            </div>
          </el-sub-menu>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
import {Histogram,UserFilled} from '@element-plus/icons-vue'
import {shallowRef} from 'vue'
export default {
  components:{Histogram,UserFilled},
  setup(){
    const Array = [
      {
        id: '1',
        icon: Histogram,
        title: '数据分析',
        router: '',
        Subclass: []
      },
      {
        id: '2',
        icon: UserFilled,
        title: '用户列表',
        router: '',
        Subclass: [
          {
            id: '2-1',
            title: '用户详情',
            router: '',
          },
          {
            id: "2-2",
            title: '用户权限',
            router: '',
          }
        ]
      }
    ]

    const menu = shallowRef(Array)

    return{menu}
  }
}
</script>

<style scoped>

</style>