<template>
   <div id="main">
      <textarea id="txt" ref="txtArea"></textarea>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Sentence } from './Sentence';

interface ISegmentsInfo {
  curpos: number;
  segments: any;
  sels: any;
}

@Component
export default class Keyboard extends Vue {

  $refs!: {
    txtArea: HTMLTextAreaElement;
  };

  sentence?: Sentence;

  @Prop() private msg!: string;

  public mounted() {
   document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const $target = this.$refs.txtArea;
        $target.focus();
        this.sentence = new Sentence($target, '#main');
    }
   };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#txt {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 400px;
    ime-mode: disabled;
    border: 1px rgba(0, 0, 0, 0.5) solid;
    overflow: auto;
    outline: none;
    border-radius: .2em;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .5);
}
</style>
<style>
.context-menu-list {
  box-shadow: 0 1px 1px rgba(0, 0, 0, .5) !important;
}
.context-menu-item
{
  padding-left: 0.4em !important;
  padding-right: 0.4em !important;
  padding-top: 0.15em !important;
  padding-bottom: 0.15em !important;
}
</style>
