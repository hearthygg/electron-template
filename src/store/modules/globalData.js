import { defineStore } from 'pinia'

export const useGlobalDataStore = defineStore('globalData', {
  state: () => ({
    /**数字 */
    count: 1
  }),
  actions: {
    accumulate() {
      this.count++
    }
  }
})
