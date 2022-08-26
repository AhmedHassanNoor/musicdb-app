import { ActionType, StateType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').default>;

  export type RootState = StateType<typeof import('./root-reducer').default>;

  export type RootAction = ActionType<typeof import('./root-action').default>;

  export interface Types {
    RootAction: RootAction;
  }
}
