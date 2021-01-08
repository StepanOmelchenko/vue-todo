<template>
  <div id="app" class="todo">
    <div class="todo__row">
      <div class="todo__col">
        <div class="todo__title">Add new one</div>
        <form-component @addToday="addToToday" @addTomorrow="addToTomorrow"/>
      </div>
      <div class="todo__col todo__col--active">
        <div class="todo__title">My today todo</div>
        <ul>
          <li class="todo__item" v-for="(item, index) of todayTasks" :key="index">
            <task-component :task="item" :id="index" @remove="removeFromToday" @setCompleted="setTodayCompleted"/>
          </li>
        </ul>
        <div class="buttons">
          <button @click="setAllTodayCompleted" class="custom-button" type="button">SET ALL COMPLETE</button>
        </div>
      </div>
      <div class="todo__col">
        <div class="todo__title">My tomorrow todo</div>
        <ul>
          <li class="todo__item" v-for="(item, index) of tomorrowTasks" :key="index">
            <task-component :task="item" :id="index" @remove="removeFromTomorrow" @setCompleted="setTomorrowCompleted"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormComponent from '@/components/Form.vue';
import TaskComponent from '@/components/Task.vue';
import { mapGetters, mapMutations } from 'vuex';

@Component({
  components: {
    FormComponent,
    TaskComponent,
  },
  computed: {
    ...mapGetters({
      todayTasks: 'getTodayTasks',
      tomorrowTasks: 'getTomorrowTasks',
    }),
  },
  methods: {
    ...mapMutations({
      addToToday: 'addToToday',
      addToTomorrow: 'addToTomorrow',
      removeFromToday: 'removeFromToday',
      removeFromTomorrow: 'removeFromTomorrow',
      setTodayCompleted: 'setTodayCompleted',
      setTomorrowCompleted: 'setTomorrowCompleted',
      setAllTodayCompleted: 'setAllTodayCompleted',
    }),
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
.todo {
  height: 100vh;

  &__row {
    display: flex;
    height: 100%;
  }

  &__col {
    width: 33.33%;
    padding: 24px;
    background-color: lightgray;
  }

  &__col--active {
    background-color: darkgrey;
  }

  &__title {
    font-size: 34px;
    color: green;
    padding: 24px 0;
    font-weight: bold;
  }

  &__item {
    margin-top: 16px;
  }

  &__item:first-child {
    margin-top: 0;
  }
}
</style>
