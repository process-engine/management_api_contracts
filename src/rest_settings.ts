const params = {
  correlationId: ':correlation_id',
  crontab: ':crontab',
  emptyActivityInstanceId: ':empty_activity_instance_id',
  eventName: ':event_name',
  flowNodeId: ':flow_node_id',
  processDefinitionsName: ':process_definitions_name',
  processModelId: ':process_model_id',
  processInstanceId: ':process_instance_id',
  processInstanceState: ':process_instance_state',
  startEventId: ':start_event_id',
  userTaskInstanceId: ':user_task_instance_id',
  manualTaskInstanceId: ':manual_task_instance_id',
  manualTaskId: ':manual_task_id',
};

const queryParams = {
  correlationId: 'correlation_id',
  startEventId: 'start_event_id',
  endEventId: 'end_event_id',
};

const paths = {
  // Correlations
  getAllCorrelations: '/correlations/all',
  getActiveCorrelations: '/correlations/active',
  getCorrelationById: `/correlations/${params.correlationId}`,
  getCorrelationsByProcessModelId: `/correlations/process_model/${params.processModelId}`,
  getProcessInstanceById: `/process_instances/${params.processInstanceId}`,
  getProcessInstancesForCorrelation: `/process_instances/by_correlation/${params.correlationId}`,
  getProcessInstancesForProcessModel: `/process_instances/by_process_model/${params.processModelId}`,
  getProcessInstancesByState: `/process_instances/by_state/${params.processInstanceState}`,
  // Cronjobs
  getActiveCronjobs: '/cronjobs/active',
  getCronjobExecutionHistoryForProcessModel: '/cronjobs/history/process_model/:process_model_id',
  getCronjobExecutionHistoryForCrontab: '/cronjobs/history/crontab/:crontab',
  // Process Models
  processModels: '/process_models',
  processModelById: `/process_models/${params.processModelId}`,
  processModelByProcessInstanceId: `/process_instance/${params.processInstanceId}/process_model/`,
  updateProcessDefinitionsByName: `/process_models/${params.processDefinitionsName}/update`,
  deleteProcessDefinitionsByProcessModelId: `/process_models/${params.processModelId}/delete`,
  startProcessInstance: `/process_models/${params.processModelId}/start`,
  processModelStartEvents: `/process_models/${params.processModelId}/start_events`,
  // Events
  waitingProcessModelEvents: `/process_models/${params.processModelId}/events/waiting`,
  waitingCorrelationEvents: `/correlations/${params.correlationId}/events/waiting`,
  waitingProcessModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events/waiting`,
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,
  // EmptyActivities
  processModelEmptyActivities: `/process_models/${params.processModelId}/empty_activities`,
  processInstanceEmptyActivities: `/process_instances/${params.processInstanceId}/empty_activities`,
  correlationEmptyActivities: `/correlations/${params.correlationId}/empty_activities`,
  processModelCorrelationEmptyActivities: `/process_models/${params.processModelId}/correlations/${params.correlationId}/empty_activities`,
  getOwnEmptyActivities: '/empty_activities/own',
  finishEmptyActivity:
    `/processes/${params.processInstanceId}/correlations/${params.correlationId}/empty_activities/${params.emptyActivityInstanceId}/finish`,
  // Flow Node Instances
  getFlowNodeInstancesForProcessInstance: `/process_instances/${params.processInstanceId}/flow_node_instances`,
  // UserTasks
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  processInstanceUserTasks: `/process_instances/${params.processInstanceId}/user_tasks`,
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,
  // ManualTask
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  processInstanceManualTasks: `/process_instances/${params.processInstanceId}/manual_tasks`,
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/manual_tasks/${params.manualTaskInstanceId}/finish`,
  // Task
  allSuspendedTasks: '/suspended_tasks',
  suspendedProcessModelTasks: `/process_models/${params.processModelId}/tasks`,
  suspendedProcessInstanceTasks: `/process_instances/${params.processInstanceId}/tasks`,
  suspendedCorrelationTasks: `/correlations/${params.correlationId}/tasks`,
  suspendedProcessModelCorrelationTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/tasks`,
  // Heatmap
  getRuntimeInformationForProcessModel: `/process_model/${params.processModelId}/runtime_information`,
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  getActiveTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/active_tokens`,
  getActiveTokensForProcessInstance: `/process_instance/${params.processInstanceId}/active_tokens`,
  getRuntimeInformationForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/runtime_information`,
  getActiveTokensForFlowNode: `/token/flow_node/${params.flowNodeId}/active_tokens`,
  getProcessModelLog: `/process_model/${params.processModelId}/logs`,
  getProcessInstanceLog: `/process_model/${params.processModelId}/process_instance/${params.processInstanceId}/logs`,
  getTokensForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/token_history`,
  getTokensForFlowNodeByProcessInstanceId: `/process_instance/${params.processInstanceId}/flow_node/${params.flowNodeId}/token_history`,
  getTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/token_history`,
  getTokensForProcessInstance: `/process_instance/${params.processInstanceId}/token_history`,

  terminateProcessInstance: `/process_instance/${params.processInstanceId}/terminate`,
};

export const restSettings = {
  params: params,
  queryParams: queryParams,
  paths: paths,
};
