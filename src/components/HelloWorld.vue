<template>
   <div id="main">
      <textarea id="txt" ref="txtArea"></textarea>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Sentence as CSentence } from './Sentence';

interface ISegmentsInfo {
  curpos: number;
  segments: any;
  sels: any;
}

@Component
export default class Sentence extends Vue {

  $refs!: {
    txtArea: HTMLTextAreaElement;
  };

  sentence?: CSentence;

  @Prop() private msg!: string;

  public mounted() {
   document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        const $target = this.$refs.txtArea;
        $target.focus();
        this.sentence = new CSentence($target, '#main');
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
}
</style>
