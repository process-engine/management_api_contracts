// tslint:disable:typedef
// tslint:disable:max-line-length
export const routeParams = {
  correlationId: ':correlation_id',
  endEventId: ':end_event_id',
  flowNodeInstanceId: ':flow_node_instance_id',
  userTaskId: ':user_task_id',
  manualTaskId: ':manual_task_id',
  messageReference: ':message_ref',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  signalReference: ':signal_ref',
};

export const messagePaths = {
  // Generic messages
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  manualTaskReached: 'manual_task_reached',
  manualTaskFinished: 'manual_task_finished',
  processTerminated: 'process_terminated',
  processStarted: 'process_started',
  processEnded: 'process_ended',
  // Instance specific messages
  finishUserTask:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finish`,
  userTaskWithInstanceIdFinished:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finished`,
  finishManualTask:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/manualtask/${routeParams.flowNodeInstanceId}/finish`,
  manualTaskWithInstanceIdFinished:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/manualtask/${routeParams.flowNodeInstanceId}/finished`,
  endEventReached: `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/ended`,
  messageEventReached: `/processengine/process/message/${routeParams.messageReference}`,
  signalEventReached: `/processengine/process/signal/${routeParams.signalReference}`,
  terminateEndEventReached: `/processengine/process/${routeParams.processInstanceId}/terminated`,
  processInstanceStarted: `/processengine/process_started/${routeParams.processModelId}`,
  processInstanceEnded: `/processengine/process/${routeParams.processInstanceId}/ended`,
};
