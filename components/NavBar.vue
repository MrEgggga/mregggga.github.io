<template>
  <div id="nav-bar">
    <a id="home" href="/">jimbo's github page</a>
    <ul id="links">
      <li><a href="/lipu-lili">lipu lili</a></li>
    </ul>
  </div>
</template>

<style scoped>
  #nav-bar {
    display: flex;
    font-family: 'Fira Code';
    background-color: white;
    border-bottom: 1px solid black;
    padding: 5px;
    position: sticky;
    top: 0px;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black !important;
  }

  a:hover {
    color: rgb(64, 64, 64);
  }

  #home {
    display: inline;
    font-size: 1.5em;
    font-weight: 300;
    margin: 0px;
    padding: 0px;
  }

  #links {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    width: 2fr;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 8px;
  }

  #links>li {
    display: inline;
    color: black;
    padding: 8px;
  }
</style>