<template>
  <img src="/img/how.gif" width="100%" 
    alt="how did this happen? (from bill wurtz's 'history of the entire world, i guess')">
  <h1>nuxt.js 3 with github pages</h1>
  <p>
    this website was made in nuxt.js using some cool sorcery. 
    this means i can do things like this {{ counter }} with 
    minimal pain. all this took was a large amount of suffering 
    and google. in case someone else wants to do this for some 
    reason, i'll explain how i did this here.
  </p>
  <h2>1. setting up a nuxt</h2>
  <p>
    create a nuxt 3 project with whatever tool you want. i used
    <code>npx nuxi init</code>, but there are probably better
    ways to go about this. set the site output to static as follows:
  </p>
  <CodeListing filename="nuxt.config.ts" lang="javascript" code=
"import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static'
})" />
  <h2>2. git</h2>
  <p>
    create a github repository titled <code>[username].github.io</code>
    and push your nuxt project to github. create an orphan branch 
    named <code>gh-pages</code> and push it to github as follows:
  </p>
  <CodeListing filename="terminal" lang="bash" code=
"git checkout --orphan gh-pages # switch to orphan branch
git rm -rf . # burn it all
git push -u origin gh-pages # push to github
git checkout main # or master or whatever" />
  <p>
    we will push to this branch every time we want to deploy the 
    site. go to the github page, go to Settings -> Pages and choose 
    the <code>gh-pages</code> branch.
  </p>
  <p>
    by default, github pages will host sites with Jekyll, which we 
    dont want as it will end up eating all our files. this can 
    be solved by creating a <code>.nojekyll</code> file at the 
    page's root. however, the tool we will use to build and deploy 
    the site erases everything in the branch every commit, so we 
    will have to make sure the file is generated every time. this 
    can be done with the <code>/public</code> directory in Nuxt 3: 
    it will put everything in it into the root directory of our 
    site when generating. create a <code>/public/nojekyll</code> 
    file and do some fancy git stuff to push it. (do this in main)
  </p>
  <h2>3. deploy</h2>
  <p>
    to build the site, we use the <code>npm run generate</code> 
    command. this will create a static build of the site and put 
    it in <code>/.output/public</code> to be deployed. all that is 
    left to do is commit this folder to the <code>gh-pages</code> 
    branch and push, which can be done with an NPM package named 
    <code>push-dir</code>. run <code>npm install --save-dev push-dir</code>
    and add a new script in <code>package.json</code> for 
    deployment:
  </p>
  <CodeListing filename="package.json" lang="javascript" code=
'"scripts": {
  "build": "nuxt build",
  "dev": "nuxt dev",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},' />
  <p>
    When you want to deploy your site, run the following commands:
  </p>
  <CodeListing filename="terminal" lang="bash" code=
"npm run generate # generate static site
npm run deploy # deploy it" />
  <p>
    if i missed a large section of how to set this up and none 
    of this works at all, submit an issue on this site's 
    <a href="https://github.com/MrEgggga/mregggga.github.io/">github 
    repository</a>.
  </p>
</template>

<script>
export default {
  head: {
    title: 'how did this happen?',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `this website was made in nuxt.js using some cool sorcery. \
    this means i can do cool things with minimal pain. \
    all this took was a large amount of suffering and google. in case someone \
    else wants to do this for some reason, i'll explain how i did this here.`
      }
    ]
  },
  data: () => ({
    counter: 0,
  }),
  methods: {
    updateCounter() {
      ++this.counter;
      requestAnimationFrame(this.updateCounter);
    }
  },
  mounted() {
    this.updateCounter();
  }
}
</script>