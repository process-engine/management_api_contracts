// tslint:disable:typedef
const params = {
  correlationId: ':correlation_id',
  processModelKey: ':process_model_key',
  startEventKey: ':start_event_key',
  userTaskId: ':user_task_id',
};

const paths = {
  processModels: `/process_models`,
  processModelById: `/process_models/${params.processModelKey}`,
  startProcessInstance: `/process_models/${params.processModelKey}/start_events/${params.startEventKey}/start`,
  processModelEvents: `/process_models/${params.processModelKey}/events`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelKey}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/process_models/${params.processModelKey}/correlations/${params.correlationId}/user_tasks/${params.userTaskId}/finish`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
