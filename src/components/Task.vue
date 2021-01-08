<template>
  <div class="task">
    <div class="task__header">
      <div class="task__title">{{ task.title }}</div>
      <div class="task__actions">
        <label class="task__label">
          <input class="task__checkbox" type="checkbox" v-model="completed"/>
          <span class="task__emulator"></span>
        </label>
        <a class="task__remove" @click.prevent="remove"></a>
      </div>
    </div>
    <div class="task__body">
      <p>{{ task.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ICompletedEvent, ITask } from '@/interfaces';

@Component
export default class TaskComponent extends Vue {
  @Prop({ required: true }) private task!: ITask;
  @Prop({ required: true }) private id!: number;

  private get completed(): boolean {
    return this.task?.completed;
  }

  private set completed(status: boolean) {
    this.$emit('setCompleted', { id: this.id, status } as ICompletedEvent);
  }

  private remove(): void {
    this.$emit('remove', this.id);
  }
}
</script>

<style scoped lang="scss">
.task {
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
  }

  &__body {
    overflow: hidden;

    & > p {
      overflow-wrap: break-word;
    }
  }

  &__label {
    margin-right: 4px;
  }

  &__checkbox {
    display: none;

    &:checked + .task__emulator {
      background-color: green;
    }
  }

  &__emulator {
    display: inline-block;
    position: relative;
    width: 16px;
    height: 16px;
    transition: background-color .2s;
    background-color: lightgray;
    border-radius: 4px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -75%) rotate(-45deg);
      width: 8px;
      height: 4px;
      border-left: 3px solid white;
      border-bottom: 3px solid white;
    }
  }

  &__remove {
    width: 16px;
    height: 16px;
    display: block;
    position: relative;
    background-color: red;
    border-radius: 4px;
    cursor: pointer;

    &:before, &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 100%;
      height: 2px;
      background-color: white;
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__actions {
    display: flex;
  }
}
</style>
