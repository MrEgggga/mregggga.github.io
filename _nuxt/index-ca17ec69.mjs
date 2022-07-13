import{_ as f,o as h,m as c,x as t,y as p,F as m,z as w,A as b,n as l,v as a,B as _}from"./entry-b92b0dd8.mjs";const y=[[/-?[0-9]+(\.[0-9]+)?/g,"number"],[/([`"'])((\\([\\'"`\/bfnrt]|u[0-9A-Fa-f]{4}))|[^\\])*?\1/g,"string"],[/[a-zA-Z0-9_$]*:/g,"prop"],[/\/\/.*$/gm,"comment"]],x=[[/<\/?.*?\/?>/g,"tag"]],v=[[/--?[a-zA-Z]+ /g,"flag"],[/#.*$/gm,"comment"]],k={javascript:y,html:x,bash:v,none:[]},j={props:["filename","code","lang"],data:()=>({parsedCode:[]}),mounted(){let n=this.code;const d=k[this.lang||"none"];console.log(n);const r=[];for(const[o,e]of d){const u=n.matchAll(o);for(const g of u||[])r.push({start:g.index,end:g.index+g[0].length,c:e})}r.sort((o,e)=>o.start-e.start);let i=0;const s=[];for(const{start:o,end:e,c:u}of r)i>o||(i<o&&s.push({text:n.slice(i,o),c:"plain",key:i}),s.push({text:n.slice(o,e),c:u,key:o}),i=e);i<n.length&&s.push({text:n.slice(i),c:"plain",key:i}),this.parsedCode=s,console.log(s)}},$={class:"filename"},C={class:"code"};function N(n,d,r,i,s,o){return h(),c(m,null,[t("div",$,p(r.filename),1),t("div",C,[(h(!0),c(m,null,w(n.parsedCode,e=>(h(),c("span",{key:e.key,class:b(e.c)},p(e.text),3))),128))])],64)}var A=f(j,[["render",N],["__scopeId","data-v-6f483924"]]);const z={head:{title:"how did this happen?",meta:[{hid:"description",name:"description",content:"this website was made in nuxt.js using some cool sorcery.     this means i can do cool things with minimal pain.     all this took was a large amount of suffering and google. in case someone     else wants to do this for some reason, i'll explain how i did this here."}]},data:()=>({counter:0}),methods:{updateCounter(){++this.counter,requestAnimationFrame(this.updateCounter)}},mounted(){this.updateCounter()}},B=t("img",{src:"/img/how.gif",width:"100%",alt:"how did this happen? (from bill wurtz's 'history of the entire world, i guess')"},null,-1),F=t("h1",null,"nuxt.js 3 with github pages",-1),V=t("h2",null,"1. setting up a nuxt",-1),H=t("p",null,[a(" create a nuxt 3 project with whatever tool you want. i used "),t("code",null,"npx nuxi init"),a(", but there are probably better ways to go about this. set the site output to static as follows: ")],-1),M=t("h2",null,"2. git",-1),P=t("p",null,[a(" create a github repository titled "),t("code",null,"[username].github.io"),a(" and push your nuxt project to github. create an orphan branch named "),t("code",null,"gh-pages"),a(" and push it to github as follows: ")],-1),S=_("<p> we will push to this branch every time we want to deploy the site. go to the github page, go to Settings -&gt; Pages and choose the <code>gh-pages</code> branch. </p><p> by default, github pages will host sites with Jekyll, which we dont want as it will end up eating all our files. this can be solved by creating a <code>.nojekyll</code> file at the page&#39;s root. however, the tool we will use to build and deploy the site erases everything in the branch every commit, so we will have to make sure the file is generated every time. this can be done with the <code>/public</code> directory in Nuxt 3: it will put everything in it into the root directory of our site when generating. create a <code>/public/nojekyll</code> file and do some fancy git stuff to push it. (do this in main) </p><h2>3. deploy</h2><p> to build the site, we use the <code>npm run generate</code> command. this will create a static build of the site and put it in <code>/.output/public</code> to be deployed. all that is left to do is commit this folder to the <code>gh-pages</code> branch and push, which can be done with an NPM package named <code>push-dir</code>. run <code>npm install --save-dev push-dir</code> and add a new script in <code>package.json</code> for deployment: </p>",4),E=t("p",null," When you want to deploy your site, run the following commands: ",-1),I=t("p",null,[a(" if i missed a large section of how to set this up and none of this works at all, submit an issue on this site's "),t("a",{href:"https://github.com/MrEgggga/mregggga.github.io/"},"github repository"),a(". ")],-1);function L(n,d,r,i,s,o){const e=A;return h(),c(m,null,[B,F,t("p",null," this website was made in nuxt.js using some cool sorcery. this means i can do things like this "+p(n.counter)+" with minimal pain. all this took was a large amount of suffering and google. in case someone else wants to do this for some reason, i'll explain how i did this here. ",1),V,H,l(e,{filename:"nuxt.config.ts",lang:"javascript",code:`import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static'
})`}),M,P,l(e,{filename:"terminal",lang:"bash",code:`git checkout --orphan gh-pages # switch to orphan branch
git rm -rf . # burn it all
git push -u origin gh-pages # push to github
git checkout main # or master or whatever`}),S,l(e,{filename:"package.json",lang:"javascript",code:`"scripts": {
  "build": "nuxt build",
  "dev": "nuxt dev",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},`}),E,l(e,{filename:"terminal",lang:"bash",code:`npm run generate # generate static site
npm run deploy # deploy it`}),I],64)}var q=f(z,[["render",L]]);export{q as default};
