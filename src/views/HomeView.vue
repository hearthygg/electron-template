<template>
  <img alt="logo" class="logo" src="@/assets/electron.svg" />
  <div class="creator">测试标题</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
  <div class="flex w-full justify-between">
    <div class="text-blue-500">{{ globalDataStore.count }}</div>
    <el-button type="primary" @click="globalDataStore.accumulate()">+</el-button>
  </div>
  <Versions />
</template>
<script setup>
import Versions from '@/components/Versions.vue'
import { useGlobalDataStore } from '@/store/modules/globalData'
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
const globalDataStore = useGlobalDataStore()
</script>
