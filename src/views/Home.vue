<template>
  <div>
    Japanese Input Method (Keyboard)
    <Keyboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Keyboard from '@/components/Keyboard.vue'; // @ is an alias to /src

@Component({
  components: {
    Keyboard,
  },
})
export default class Home extends Vue {}
</script>
