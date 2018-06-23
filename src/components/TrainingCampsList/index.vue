<template>
  <div class="training_camps_list">
    <el-table
      :data="campsList"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        fixed
        width="40">
      </el-table-column>
      <el-table-column
        prop="name"
        fixed
        label="名称">
      </el-table-column>
      <el-table-column
        prop="summary"
        label="简介">
      </el-table-column>
      <el-table-column
        prop="endDate"
        label="报名截止日期">
      </el-table-column>
      <el-table-column
        prop="currentPeopleNum"
        label="人数">
      </el-table-column>
      <el-table-column
        prop="totalPeopleNum"
        label="总人数">
      </el-table-column>
      <el-table-column
        prop="status"
        label="申请状态">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      class="pagi">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      campsList: [
        {
          id: 1,
          name: 'NHO 31',
          summary: 'Some desc',
          endDate: 10001,
          totalPeopleNum: 30,
          currentPeopleNum: 10,
          status: 0
        }
      ]
    }
  }
}
</script>

<style>
.training_camps_list {
  width: 1000px;
  padding: 20px 15px;
  margin: 0 auto;
}

.training_camps_list .pagi {
  margin: 20px 0;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .training_camps_list {
    width: 100%;
    margin: 0;
  }
}
</style>
