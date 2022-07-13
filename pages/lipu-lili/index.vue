<template>
  <h1>lipu lili</h1>

  <p>
    󱤪󱤨󱤧󱤪󱥮・󱥆󱤧󱤓󱤉󱥡󱦓󱥬󱥔・󱥄󱤙󱤂󱥆󱥩󱤖󱥡󱦓󱥬󱥔・󱥨󱥞󱥡󱤉󱥬󱥔󱤡󱥞󱤘󱤙󱥆󱥩󱥁：󱥞󱤃󱤉󱥂󱤇󱤿󱥬・<br>
    lipu lili is a pair of reference books for toki pona. they are not intended 
    for learning toki pona (although i won't stop you), but rather for referring to 
    if you forget something.
  </p>
  <p>
    󱤴󱥉󱤉󱤪󱥮󱥁󱤙󱤎󱦐󱤙󱦒・󱦒󱥪󱦒・󱦒󱤙󱦒・󱦒󱦑 (󱤎󱦐XeTeX󱦑) 󱤙󱤎󱦐8up-zine󱦑󱥧󱤑󱦐polychora-org󱦑 (<a href="https://github.com/polychora-org/8up-zine">󱥁</a>)・<br>
    these books were made with XeTeX and <a href="https://github.com/polychora-org/8up-zine">8up-zine by polychora-org</a>.
  </p>

  <h2>󱤿󱥠󱤉󱤪󱥁 (how to print these books)</h2>
  <p>
    each of these books can be printed on a single sheet of paper and then cut and folded into a book. simply follow these instructions:
  </p>
  <img src="/lipu-lili/print.png" width="100%">
  <p>
    note that some PDF viewers' (such as Firefox's) print dialogs will automatically add a margin that can't be removed. Google Chrome 
    seems to work, as well as Preview (on Mac) and GIMP. image versions are provided in case your PDF viewer doesn't work.
  </p>

  <div class="columns">
    <div class="column">
      <h2>󱤪󱤨󱦓󱥂󱤄 (words)</h2>
      <a href="/lipu-lili/nimi/zine.pdf">pdf</a>
      <p>image version (300 dpi):</p>
      <img src="/lipu-lili/nimi/zine.png" width="100%" alt="image version">
    </div>
    <div class="column">
      <h2>󱤪󱤨󱦓󱤿󱥬 (grammar)</h2>
      <a href="/lipu-lili/nasin/zine.pdf">pdf</a>
      <p>image version (300 dpi):</p>
      <img src="/lipu-lili/nasin/zine.png" width="100%" alt="image version">
    </div>
  </div>
</template>

<style scoped>
  .columns {
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .column {
    margin: 5px;
    flex: 50%;
  }
</style>