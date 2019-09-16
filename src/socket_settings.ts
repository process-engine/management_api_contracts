const pathParams = {
  processModelId: 'process_model_id',
  userId: 'user_id',
};

const paths = {
  boundaryEventTriggered: 'boundary_event_triggered',
  intermediateThrowEventTriggered: 'intermediate_throw_event_triggered',
  intermediateCatchEventReached: 'intermediate_catch_event_reacbed',
  intermediateCatchEventFinished: 'intermediate_catch_event_finished',
  activityReached: 'activity_reached',
  activityFinished: 'activity_finished',
  callActivityWaiting: 'call_activity_waiting', // Deprecated, will be removed in future versions. Use activityReached instead.
  callActivityFinished: 'call_activity_finished', // Deprecated, will be removed in future versions. Use activityFinishbed instead.
  emptyActivityWaiting: 'empty_activity_waiting',
  emptyActivityForIdentityWaiting: `empty_activity_waiting/user_id/${pathParams.userId}`,
  emptyActivityFinished: 'empty_activity_finished',
  emptyActivityForIdentityFinished: `empty_activity_finished/user_id/${pathParams.userId}`,
  userTaskWaiting: 'user_task_waiting',
  userTaskForIdentityWaiting: `user_task_waiting/user_id/${pathParams.userId}`,
  userTaskFinished: 'user_task_finished',
  userTaskForIdentityFinished: `user_task_finished/user_id/${pathParams.userId}`,
  manualTaskWaiting: 'manual_task_waiting',
  manualTaskForIdentityWaiting: `manual_task_waiting/user_id/${pathParams.userId}`,
  manualTaskFinished: 'manual_task_finished',
  manualTaskForIdentityFinished: `manual_task_finished/user_id/${pathParams.userId}`,
  processEnded: 'process_ended',
  processStarted: 'process_started',
  processError: 'process_error',
  processTerminated: 'process_terminated',
  processInstanceStarted: `/process_instance_started/${pathParams.processModelId}`,
  cronjobExecuted: 'cronjob_executed',
  cronjobStopped: 'cronjob_stopped',
  cronjobUpdated: 'cronjob_updated',
  cronjobCreated: 'cronjob_created',
  cronjobRemoved: 'cronjob_removed',
};

const namespace = 'management_api';

export const socketSettings = {
  namespace: namespace,
  paths: paths,
  pathParams: pathParams,
};
