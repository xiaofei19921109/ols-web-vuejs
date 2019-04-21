<template>
  <header class="camp__header">
    <nav class="header__nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="nav__item-link">
            <img :src="logo"
                 class="thoughtworks-logo">
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="/account" class="nav__item-link">账户</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/camps" class="nav__item-link"
                       active-class="nav__item-link--active">训练营
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to="missions" class="nav__item-link">任务卡</router-link>
        </li>
      </ul>
    </nav>
    <section class="header__user">
      <img
        :src="avatar" alt="" class="avatar">
    </section>
  </header>
</template>
<script>
  import Logo from './img/thoughtworks-logo.png';
  import Avatar from './img/oval.png';

  export default {
    name: 'Header',
    data() {
      return {
        logo: Logo,
        avatar: Avatar
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/variable";
  @import "../../style/functions";

  .camp__header {
    height: 60px;
    box-shadow: 0 2px 4px 0 rgba(129, 129, 129, 0.5);
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__nav {
      height: 100%;

      .nav__list {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100%;
        display: flex;
      }

      .nav__item {
        margin: 0 rem(30);
        .nav__item-link {
          box-sizing: border-box;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: rem(18);
          color: #000;
          text-decoration: none;
        }

        .nav__item-link--active {
          color: $primary-color;
          border-bottom: 4px solid $primary-color;
        }
      }
    }

    .header__user {
      padding: 0 rem(60);
    }
  }
</style>
