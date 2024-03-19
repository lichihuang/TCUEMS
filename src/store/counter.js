import { ref, computed } from 'vue';
import { defineStore } from "pinia";

export const SemesterWarningCountStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        students: [
            { name: 'John', warningRecord: 'Some warning record 1' },
            { name: 'Alice', warningRecord: 'Some warning record 2' },
        ],
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
    getters: {
        doubleCount() {
            return this.count * 2;
        },
    },
});