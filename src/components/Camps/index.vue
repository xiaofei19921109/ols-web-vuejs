<template>
  <div class="camps__wrap">
    <div class="camps__search-bar">
      <input type="text" class="search__input" autocomplete="off"
             v-model="keyword">
      <button class="search__btn">搜索</button>
    </div>
    <div class="camps__list">
      <add-camp-card
        @click="onAddCampClick"
      ></add-camp-card>
      <camp-info-card
        v-for="(camp, index) of camps"
        v-bind:key="index"
        v-bind="camp"
        @click="onCampInfoClick"
        @close="onCampInfoClose"
      ></camp-info-card>
    </div>

    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <span>是否要删除该训练营？</span>
      <span slot="footer" class="dialog-footer">
    <el-button class="dialog__cancel" @click="dialogVisible = false">取 消</el-button>
    <el-button class="dialog__ok" @click="handleClose">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import api from '@/api'
  import AddCampCard from './AddCampCard';
  import CampInfoCard from './CampInfoCard';

  export default {
    data() {
      return {
        keyword: '',
        dialogVisible: false,
        willDeleteCampId: null,
        camps: []
      }
    },
    created() {
      api.getCamps().then(data => {
        this.camps = data;
      })
    },
    methods: {
      onAddCampClick() {
        this.$router.push('/camps/create');
      },
      onCampInfoClick(id) {
        this.$router.push('/camps/' + id);
      },
      onCampInfoClose(id) {
        this.dialogVisible = true;
        this.willDeleteCampId = id;
      },
      handleClose() {
        this.dialogVisible = false;
        api.deleteCamp(this.willDeleteCampId).then(() => {
          const index = this.camps.findIndex(({ id }) => id === this.willDeleteCampId);
          this.camps.splice(index, 1);
          this.willDeleteCampId = null;
        })
      },
      search(formName) {
        console.log(this.keyword)
      }
    },
    components: {
      'add-camp-card': AddCampCard,
      'camp-info-card': CampInfoCard
    }
  }
</script>

<style lang="scss">
  @import "../../style/variable";
  @import "../../style/functions";

  .camps__wrap {
    max-width: 1100px;
    margin: 0 auto;

    * {
      box-sizing: border-box;
    }

    .camps__search-bar {
      margin: rem(30) 0 rem(15);
      display: flex;
      justify-items: center;

      .search__input {
        width: rem(438);
        height: rem(40);
        padding: 0 1em;
        border-radius: 4px;
        border: solid 1px #979797;
        font-size: rem(14);
        outline: none;
      }

      .search__btn {
        margin-left: rem(17);
        padding: 0 1.9em;
        height: rem(40);
        border-radius: 5px;
        font-size: rem(14);
        color: #ffffff;
        background-color: $primary-color;
        outline: none;
        cursor: pointer;
      }
    }


    .camps__list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -20px;

      .camp-card {
        width: rem(340);
        height: rem(200);
      }
    }

    .dialog__ok {
      background-color: $primary-color;
      color: #ffffff;
    }

    .dialog__cancel:hover {
      border-color: #dcdfe6;
      color: #686868;
      background-color: #fff;
    }
  }
</style>

