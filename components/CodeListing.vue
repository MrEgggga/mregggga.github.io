<script>
const jsHighlighting = [
  [/-?[0-9]+(\.[0-9]+)?/g, 'number'],
  [/([`"'])((\\([\\'"`\/bfnrt]|u[0-9A-Fa-f]{4}))|[^\\])*?\1/g, 'string'],
  [/[a-zA-Z0-9_$]*:/g, 'prop'],
  [/\/\/.*$/gm, 'comment'],
];

const htmlHighlighting = [
  [/<\/?.*?\/?>/g, 'tag'],
]

const bashHighlighting = [
  [/--?[a-zA-Z]+ /g, 'flag'],
  [/#.*$/gm, 'comment'],
]

const langs = {
  javascript: jsHighlighting,
  html: htmlHighlighting,
  bash: bashHighlighting,
  none: [],
}

export default {
  props: ['filename', 'code', 'lang'],
  data: () => ({
    parsedCode: [],
  }),

  mounted() {
    let code = this.code;
    const highlighting = langs[this.lang || 'none'];
    console.log(code);
    const allMatches = [];
    for(const [regex, c] of highlighting) {
      const match = code.matchAll(regex);
      for(const m of match || []) {
        allMatches.push({
          start: m.index,
          end: m.index + m[0].length,
          c,
        });
      }
    }
    allMatches.sort((a, b) => a.start - b.start);
    let currentIdx = 0;
    const currentParsed = [];
    for(const { start, end, c } of allMatches) {
      if(currentIdx > start) continue;
      if(currentIdx < start) currentParsed.push({ text: code.slice(currentIdx, start), c: 'plain', key: currentIdx });
      currentParsed.push({ text: code.slice(start, end), c, key: start });
      currentIdx = end;
    }
    if(currentIdx < code.length) currentParsed.push({ text: code.slice(currentIdx), c: 'plain', key: currentIdx });
    this.parsedCode = currentParsed;
    console.log(currentParsed);
  }
}
</script>

<template>
  <div class="filename">{{ filename }}</div>
  <div class="code">
    <span 
      v-for="it of parsedCode"
      :key="it.key"
      :class="it.c"
    >
      {{ it.text }}
    </span>
  </div>
</template>

<style scoped>
  .filename {
    font-size: 0.7em;
    border-bottom: 1px solid gray;
  }

  .code {
    font-family: 'Fira Code';
    font-weight: 300;
    white-space: pre-wrap;
  }

  .number {
    color: rgb(32, 32, 32);
  }

  .string {
    color: rgb(128, 128, 128);
  }

  .prop {
    color: rgb(64, 64, 64);
  }

  .comment {
    color: rgb(192, 192, 192);
  }

  .tag {
    color: rgb(96, 96, 96);
  }

  .flag {
    color: rgb(96, 96, 96);
  }
</style>
