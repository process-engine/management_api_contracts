// tslint:disable:typedef
const params = {
  correlationId: ':correlation_id',
  eventName: ':event_name',
  flowNodeId: ':flow_node_id',
  processDefinitionsName: ':process_definitions_name',
  processModelId: ':process_model_id',
  processInstanceId: ':process_instance_id',
  startEventId: ':start_event_id',
  userTaskInstanceId: ':user_task_instance_id',
  manualTaskInstanceId: ':manual_task_instance_id',
  manualTaskId: ':manual_task_id',
};

const queryParams = {
  correlationId: 'correlation_id',
  endEventId: 'end_event_id',
};

const paths = {
  // Correlations
  getActiveCorrelations: `/correlations/active`,
  getAllCorrelations: `/correlations/all`,
  getCorrelationsByProcessModelId: `/correlations/process_model/${params.processModelId}`,
  getCorrelationByProcessInstanceId: `/correlations/process_instance/${params.processInstanceId}`,
  getCorrelationById: `/correlations/${params.correlationId}`,
  // Process Models
  processModels: `/process_models`,
  processModelById: `/process_models/${params.processModelId}`,
  updateProcessDefinitionsByName: `/process_models/${params.processDefinitionsName}/update`,
  deleteProcessDefinitionsByProcessModelId: `/process_models/${params.processModelId}/delete`,
  startProcessInstance: `/process_models/${params.processModelId}/start_events/${params.startEventId}/start`,
  processModelStartEvents: `/process_models/${params.processModelId}/start_events`,
  // Events
  waitingProcessModelEvents: `/process_models/${params.processModelId}/events/waiting`,
  waitingCorrelationEvents: `/correlations/${params.correlationId}/events/waiting`,
  waitingProcessModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events/waiting`,
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,
  // ManualTask
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/manual_tasks/${params.manualTaskInstanceId}/finish`,
  // Heatmap
  getRuntimeInformationForProcessModel: `/process_model/${params.processModelId}/runtime_information`,
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  getRuntimeInformationForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/runtime_information`,
  getActiveTokensForFlowNode: `/token/flow_node/${params.flowNodeId}/active_tokens`,
  getProcessModelLog: `/process_model/${params.processModelId}/logs`,
  getTokensForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/token_history`,
};

/**
 * Contains the endpoints and various rest parameters used by the
 * ManagementAPI.
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
