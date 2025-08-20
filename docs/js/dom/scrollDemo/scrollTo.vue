<script setup lang="ts">
import { NButton, NForm, NInputNumber, NFormItem, NSelect } from 'naive-ui'
import { type Ref, ref, useTemplateRef } from 'vue'

const scrollHeight: Ref<number> = ref(100)

const direction = ref('top')

const scrollRef = useTemplateRef('scrollRef')

function scrollTo() {
  scrollRef.value?.scrollTo({
    [direction.value]: scrollHeight.value,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div>
    <NForm :label-width="80" label-placement="left">
      <NFormItem label="滚动距离">
        <NInputNumber v-model:value="scrollHeight"/>
      </NFormItem>
      <NFormItem label="滚动方向">
        <NSelect
          v-model:value="direction"
          :options="[
            { label: '顶部', value: 'top' },
            { label: '底部', value: 'bottom' }
          ]"
        ></NSelect>
      </NFormItem>
      <NFormItem label=" ">
        <NButton @click="scrollTo">滚动</NButton>
      </NFormItem>
    </NForm>
    <div ref="scrollRef" class="scroll-container">
      <div class="scroll-content">
        <p v-for="i in 100" :key="i">内容 {{ i }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-container {
  height: 200px;
  overflow: auto;
}
</style>
