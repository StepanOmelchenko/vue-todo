<template>
  <form class="form" @submit.prevent="onSubmit">
    <div class="form__control">
      <label class="form__label">
        <input placeholder="TITLE" v-model="title" required/>
      </label>
    </div>
    <div class="form__control">
      <label class="form__label">
        <textarea rows="4" placeholder="DESCRIPTION" v-model="text"/>
      </label>
    </div>
    <div class="form__control">
      <label class="form__label">
        <select v-model="today">
          <option :value="true">today</option>
          <option :value="false">tomorrow</option>
        </select>
      </label>
    </div>
    <div class="buttons">
      <button class="custom-button" type="submit">ADD</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITask } from '@/interfaces';

@Component
export default class FormComponent extends Vue {
  private title: null | string = null;
  private text: null | string = null;
  private today = true;

  private onSubmit(): void {
    this.$emit(this.today ? 'addToday' : 'addTomorrow', {
      title: this.title,
      text: this.text,
      completed: false,
    } as ITask);

    this.title = null;
    this.text = null;
    this.today = true;
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;

  &__control {
    margin-top: 16px;
  }

  &__control:first-child {
    margin-top: 0;
  }

  &__label {
    display: inline-block;
    width: 100%;

    & > * {
      width: 100%;
    }
  }
}
</style>
