// tslint:disable:typedef
const params = {
  correlationId: ':correlation_id',
  processModelId: ':process_model_id',
  startEventId: ':start_event_id',
  userTaskId: ':user_task_id',
  processDefinitionsName: ':process_definitions_name',
};

const queryParams = {
  endEventId: 'end_event_id',
};

const paths = {
  // Correlations
  activeCorrelations: `/correlations/active`,
  // Process Models
  processModels: `/process_models`,
  processModelById: `/process_models/${params.processModelId}`,
  updateProcessDefinitionsByName: `/process_models/${params.processDefinitionsName}/update`,
  startProcessInstance: `/process_models/${params.processModelId}/start_events/${params.startEventId}/start`,
  processModelEvents: `/process_models/${params.processModelId}/events`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks/${params.userTaskId}/finish`,
};

/**
 * Contains the endpoints and various rest parameters used by the ManagementAPI.
 */
export const restSettings = {
  /**
   * A collection of all URL parameters employed by the ManagementAPI.
   */
  params: params,
  /**
   * A collection of all query parameters employed by the ManagementAPI.
   */
  queryParams: queryParams,
  /**
   * A collection of all URLs employed by the ManagementAPI.
   */
  paths: paths,
};
