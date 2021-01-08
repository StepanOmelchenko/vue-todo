import Vue from 'vue';
import Vuex from 'vuex';
import { ICompletedEvent, IState, ITask } from '@/interfaces';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    today: [],
    tomorrow: [],
  } as IState,
  mutations: {
    addToToday(state: IState, task: ITask) {
      state.today.push(task)
    },
    addToTomorrow(state: IState, task: ITask) {
      state.tomorrow.push(task)
    },
    setTodayCompleted(state: IState, body: ICompletedEvent) {
      state.today[body.id].completed = body.status;
    },
    setAllTodayCompleted(state: IState) {
      state.today.forEach((item) => item.completed = true);
    },
    setTomorrowCompleted(state: IState, body: ICompletedEvent) {
      state.tomorrow[body.id].completed = body.status;
    },
    removeFromToday(state: IState, index: number) {
      state.today.splice(index, 1);
    },
    removeFromTomorrow(state: IState, index: number) {
      state.tomorrow.splice(index, 1);
    },
  },
  getters: {
    getTodayTasks: (state: IState): ITask[] => state.today,
    getTomorrowTasks: (state: IState): ITask[] => state.tomorrow,
  },
});
