<template>
  <nav>
    <section>
      <img src="../assets/menu.svg" alt="burger menu" @click="visible = !visible">
      <p>Function</p>
    </section>
    <menu v-if="visible">
      <router-link to="/">
        <div>
          <img src="../assets/search.svg" alt="search">
          <p>func 1</p>
        </div>
      </router-link>
      <router-link to="/func">
        <div>
          <img src="../assets/folder.svg" alt="folder">
          <p>func 2</p>
        </div>
      </router-link>
    </menu>
  </nav>
</template>

<script>
export default{
  name: "vSidebar",
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
$primary-color: #2380ce;
nav {
  width: 100%;

  section {
    display: flex;
    height: 50px;
    background: $primary-color;
    color: white;

    padding: 15px;

    img {
      width: 18px;
      margin-right: 20px;
      cursor: pointer;
    }

    p {
      margin: 0;
    }
  }

  menu {
    margin: 10px 0px 0px 0px;
    padding: 0;
    a {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #3a3a3a;
      &:hover {
        background: #ececec;
      }
    }

    .router-link-active:after {
      content: "";
      width: 3px;
      height: 50.67px;
      background: $primary-color;
    }

    div {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: 18px;
        margin: 0px 20px;
      }
    }
  }
}
</style>