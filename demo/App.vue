<script setup lang="ts">
import { ref } from 'vue-demi'
const myIframe = ref()

function onLoad(frame: any) {
  myIframe.value = frame.contentWindow
}
</script>

<template>
  <div>
    My Components
    <div>
      <!-- <InteractiveButton>Hello World</InteractiveButton> -->
      <InteractiveIframe
        :src="'https://resource-ott.gviet.vn/sdk/v1.2.1/web-interactive.html'"
        allow="camera *; geolocation *; microphone *; autoplay *"
        frame-id="my-ifram"
        name="my-frame"
        width="150px"
        height="200px"
        @load="onLoad"
      />
    </div>
  </div>
</template>
