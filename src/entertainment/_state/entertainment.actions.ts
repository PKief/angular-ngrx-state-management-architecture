import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const entertainmentActions = createActionGroup({
  source: 'ENTERTAINMENT',
  events: {
    loadRandomJoke: emptyProps(),
  },
});
