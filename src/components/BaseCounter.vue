<template>
  <section>
    <output>{{ state.context.count }}</output>
    <button @click="send('INCREMENT')">Count</button>
  </section>
</template>

<script lang="ts" setup>
import { useMachine } from "@xstate/vue";
import { counterMachine } from "../machines/machineCounter";

const { state, send } = useMachine(counterMachine, {
  devTools: true,
});
</script>
