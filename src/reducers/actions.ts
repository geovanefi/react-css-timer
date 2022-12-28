import { Cycle } from './cycles'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE ',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_FINISHED_CYCLE = 'MARK_FINISHED_CYCLE ',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleFinishedAction() {
  return {
    type: ActionTypes.MARK_FINISHED_CYCLE,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
