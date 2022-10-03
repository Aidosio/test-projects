<template>
    <pContainer>
      <Sidebar />
      <pLayout>
        <router-view />
      </pLayout>
    </pContainer>
</template>

<script>
import Sidebar from "@/components/vSidebar";
import pContainer from "@/components/vContainer";
import pLayout from "@/components/vLayout";
export default {
  components: {
    Sidebar,
    pLayout,
    pContainer
  }
}
</script>

<style lang="scss">
#app {
  display: block !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
