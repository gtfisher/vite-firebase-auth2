import { reactive } from 'vue'

export const store = reactive({
  countA: 0,
  countB: 0,
  user: {},
  incrementA() {
    this.countA++
  },
  incrementB() {
    this.countB++
  }
})
