import { AnyAction } from 'redux';

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;

}

// With typescript
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// With typescript, but without payload
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
};