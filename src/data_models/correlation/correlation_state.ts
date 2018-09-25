/**
 * Lists the various states that a Correlation can be in.
 */
export enum CorrelationState {
  running = 'running',
  suspended = 'suspended',
  finished = 'finished',
  terminated = 'terminated',
  error = 'error',
}
