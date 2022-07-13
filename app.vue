<script>
export default {
  head: () => ({
    htmlAttrs: {
      lang: 'en'
    },
    title: 'jimbo\'s github page',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'jimbo\'s janky github page. why does this exist?'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  }),
};
</script>

<template>
  <div id="main">
    <NavBar />
    <div id="page">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style src="/assets/css/global.css"></style>
<style scoped>
  #main {
    margin: auto;
    width: calc(max(50%, 500px));
  }
</style>