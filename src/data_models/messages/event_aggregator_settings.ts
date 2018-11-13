// tslint:disable:typedef
export const messagePaths = {
  userTaskReached: 'user_task_reached',
  userTaskFinished: 'user_task_finished',
  processTerminated: 'process_terminated',
  processEnded: 'process_ended',
};

export const routeParams = {
  correlationId: ':correlation_id',
  endEventId: ':end_event_id',
  flowNodeInstanceId: ':flow_node_instance_id',
  messageReference: ':message_ref',
  processInstanceId: ':process_instance_id',
  processModelId: ':process_model_id',
  signalReference: ':signal_ref',
  userTaskId: ':user_task_id',
};

// tslint:disable:max-line-length
export const routePaths = {
  finishUserTask:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finish`,
  userTaskFinished:
    `/processengine/correlation/${routeParams.correlationId}/processinstance/${routeParams.processInstanceId}/usertask/${routeParams.flowNodeInstanceId}/finished`,
  processEnded: `/processengine/process/${routeParams.processInstanceId}/ended`,
  endEventReached: `/processengine/correlation/${routeParams.correlationId}/processmodel/${routeParams.processModelId}/ended`,
  messageEventReached: `/processengine/process/message/${routeParams.messageReference}`,
  signalEventReached: `/processengine/process/signal/${routeParams.signalReference}`,
  terminateEndEventReached: `/processengine/process/${routeParams.processInstanceId}/terminated`,
};
