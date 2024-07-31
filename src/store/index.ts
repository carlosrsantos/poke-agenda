import { defineStore } from 'pinia';

export interface State {
  search: string;
}

const useSearchStore = defineStore('search', {
  state: (): State => ({
    search: ''
  }),
  actions: {
    inputValue(value: string) {
      this.search = value
    }
  },
  getters: {
    getSearch(): string {
      return this.search
    }
  }
})
export default useSearchStore;
