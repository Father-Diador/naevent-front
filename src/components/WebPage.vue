<template>
    <TopNav />
    <div>
      <div>
        <div>
          <Page>
            <router-view></router-view>
          </Page>
        </div>
      </div>

    </div>
      <PageFooter />
</template>

<script>

import TopNav from "./nav/TopNav";
import Page from "./content/Page";
import PageFooter from "./nav/PageFooter";

export default {
    components: {
        TopNav,
        Page,
        PageFooter,
    },
}
</script>


<style>


body::-webkit-scrollbar{
  background: transparent;
  width: 10px;
}

body::-webkit-scrollbar-button{
  background: transparent;
}

body::-webkit-scrollbar-track{
  background: transparent;
}

body::-webkit-scrollbar-thumb{
  background: #7A7074;
  border-radius: 10px;
}


</style>
