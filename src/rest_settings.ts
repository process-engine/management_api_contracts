const params = {
  // Id of a correlation.
  correlationId: ':correlation_id',
  // A crontab.
  crontab: ':crontab',
  // Instance Id of an EmptyActivity.
  emptyActivityInstanceId: ':empty_activity_instance_id',
  // Name of an Event.
  eventName: ':event_name',
  // Id of a FlowNode.
  flowNodeId: ':flow_node_id',
  // Name of a ProcessDefinition.
  processDefinitionsName: ':process_definitions_name',
  // Id of a ProcessModel.
  processModelId: ':process_model_id',
  // Instance Id of a Process.
  processInstanceId: ':process_instance_id',
  // State of a ProcessInstance.
  processInstanceState: ':process_instance_state',
  // Id of a StartEvent.
  startEventId: ':start_event_id',
  // Id of an UserTaskInstance.
  userTaskInstanceId: ':user_task_instance_id',
  // InstanceId of a ManualTaskInstance.
  manualTaskInstanceId: ':manual_task_instance_id',
  // Id of a ManualTask.
  manualTaskId: ':manual_task_id',
};

const queryParams = {
  correlationId: 'correlation_id',
  startEventId: 'start_event_id',
  endEventId: 'end_event_id',
};

const paths = {
  // Correlations

  // Gets all Correlations.
  getAllCorrelations: '/correlations/all',
  // Gets all active Correlations.
  getActiveCorrelations: '/correlations/active',
  // Gets a Correlation by its id.
  getCorrelationById: `/correlations/${params.correlationId}`,
  // Gets all Correlations by a specific ProcessModel.
  getCorrelationsByProcessModelId: `/correlations/process_model/${params.processModelId}`,

  // ProcessInstances

  // Gets a ProcessInstance by its id.
  getProcessInstanceById: `/process_instances/${params.processInstanceId}`,
  // Gets all ProcessInstance by a specific Correlation.
  getProcessInstancesForCorrelation: `/process_instances/by_correlation/${params.correlationId}`,
  // Gets all ProcessInstance by a specific ProcessModel.
  getProcessInstancesForProcessModel: `/process_instances/by_process_model/${params.processModelId}`,
  // Gets all ProcessInstance by a specific State.
  getProcessInstancesByState: `/process_instances/by_state/${params.processInstanceState}`,

  // Cronjobs

  // Gets all Cronjobs
  getActiveCronjobs: '/cronjobs/active',
  // Gets the CronjobExecutionHistory for a specific ProcessModel.
  getCronjobExecutionHistoryForProcessModel: '/cronjobs/history/process_model/:process_model_id',
  // Gets the CronjobExecutionHistory for a specific Crontab.
  getCronjobExecutionHistoryForCrontab: '/cronjobs/history/crontab/:crontab',

  // Process Models

  // Gets all ProcessModels.
  processModels: '/process_models',
  // Gets a ProcessModel by its id.
  processModelById: `/process_models/${params.processModelId}`,
  // Gets a ProcessModel by a ProcessInstance.
  processModelByProcessInstanceId: `/process_instance/${params.processInstanceId}/process_model/`,
  // Updates a ProcessDefinition by its name.
  updateProcessDefinitionsByName: `/process_models/${params.processDefinitionsName}/update`,
  // Removes a ProcessDefinition by its name.
  deleteProcessDefinitionsByProcessModelId: `/process_models/${params.processModelId}/delete`,
  // Starts a ProcessDefinition by its name.
  startProcessInstance: `/process_models/${params.processModelId}/start`,
  // Gets all StartEvents for a specific ProcessModel.
  processModelStartEvents: `/process_models/${params.processModelId}/start_events`,

  // Events

  // Gets all waiting Events for a specific ProcessModel.
  waitingProcessModelEvents: `/process_models/${params.processModelId}/events/waiting`,
  // Gets all waiting Events for a specific Correlation.
  waitingCorrelationEvents: `/correlations/${params.correlationId}/events/waiting`,
  // Gets all waiting Events for a specific ProcessModel and Correlation.
  waitingProcessModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events/waiting`,
  // Triggers a MessageEvent by its name.
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  // Triggers a SignalEvent by its name.
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,

  // EmptyActivities

  // Gets all EmptyActivities for a specific ProcessModel.
  processModelEmptyActivities: `/process_models/${params.processModelId}/empty_activities`,
  // Gets all EmptyActivities for a specific ProcessInstance.
  processInstanceEmptyActivities: `/process_instances/${params.processInstanceId}/empty_activities`,
  // Gets all EmptyActivities for a specific Correlation.
  correlationEmptyActivities: `/correlations/${params.correlationId}/empty_activities`,
  // Gets all EmptyActivities for a specific ProcessModel and Correlation.
  processModelCorrelationEmptyActivities: `/process_models/${params.processModelId}/correlations/${params.correlationId}/empty_activities`,
  // Gets all EmptyActivities for the logged in user.
  getOwnEmptyActivities: '/empty_activities/own',
  // Finishs a specific EmptyActivity by its ProcessInstanceId, CorrelationId and its EmptyActivityInstanceId.
  finishEmptyActivity:
    `/processes/${params.processInstanceId}/correlations/${params.correlationId}/empty_activities/${params.emptyActivityInstanceId}/finish`,

  // Flow Node Instances

  // Gets all FlowNodeInstances by a specific ProcessInstanceId
  getFlowNodeInstancesForProcessInstance: `/process_instances/${params.processInstanceId}/flow_node_instances`,

  // UserTasks

  // Gets all UserTasks for a specific ProcessModel.
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  // Gets all UserTasks for a specific ProcessInstance.
  processInstanceUserTasks: `/process_instances/${params.processInstanceId}/user_tasks`,
  // Gets all UserTasks for a specific Correlation.
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  // Gets all UserTasks for a specific ProcessModel and Correlation.
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  // Finishs a specific UserTask by its ProcessInstanceId, CorrelationId and its UserTaskInstanceId.
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,

  // ManualTask

  // Gets all ManualTask for a specific ProcessModel.
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  // Gets all ManualTask for a specific ProcessInstance.
  processInstanceManualTasks: `/process_instances/${params.processInstanceId}/manual_tasks`,
  // Gets all ManualTask for a specific Correlation.
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  // Gets all ManualTask for a specific ProcessModel and Correlation.
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  // Finishs a specific ManualTask by its ProcessInstanceId, CorrelationId and its ManualTaskInstanceId.
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/manual_tasks/${params.manualTaskInstanceId}/finish`,

  // Task

  // Gets all suspended Tasks.
  allSuspendedTasks: '/suspended_tasks',
  // Gets all suspended Tasks for a specific ProcessModel.
  suspendedProcessModelTasks: `/process_models/${params.processModelId}/tasks`,
  // Gets all suspended Tasks for a specific PRocessInstance.
  suspendedProcessInstanceTasks: `/process_instances/${params.processInstanceId}/tasks`,
  // Gets all suspended Tasks for a specific Correlation.
  suspendedCorrelationTasks: `/correlations/${params.correlationId}/tasks`,
  // Gets all suspended Tasks for a specific ProcessModel and Correlation.
  suspendedProcessModelCorrelationTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/tasks`,

  // Heatmap

  // Gets all RuntimeInformation for a specific ProcessModel.
  getRuntimeInformationForProcessModel: `/process_model/${params.processModelId}/runtime_information`,
  // Gets all ActiveTokens for a specific ProcessModel.
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  // Gets all ActiveTokens for a specific ProcessModel and Correlation.
  getActiveTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/active_tokens`,
  // Gets all ActiveTokens for a specific ProcessInstance.
  getActiveTokensForProcessInstance: `/process_instance/${params.processInstanceId}/active_tokens`,
  // Gets all ActiveTokens for a specific ProcessModel and FlowNode.
  getRuntimeInformationForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/runtime_information`,
  // Gets all ActiveTokens for a specific FlowNode.
  getActiveTokensForFlowNode: `/token/flow_node/${params.flowNodeId}/active_tokens`,
  // Gets the log of a specific ProcessModel.
  getProcessModelLog: `/process_model/${params.processModelId}/logs`,
  // Gets the log specific ProcessInstance.
  getProcessInstanceLog: `/process_model/${params.processModelId}/process_instance/${params.processInstanceId}/logs`,
  // Gets all Tokens for a specific Correlation, ProcessModel and FlowNode.
  getTokensForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/token_history`,
  // Gets all Tokens for a specific ProcessInstance and FlowNode.
  getTokensForFlowNodeByProcessInstanceId: `/process_instance/${params.processInstanceId}/flow_node/${params.flowNodeId}/token_history`,
  // Gets all Tokens for a specific ProcessModel and Correlation.
  getTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/token_history`,
  // Gets all Tokens for a specific ProcessInstance.
  getTokensForProcessInstance: `/process_instance/${params.processInstanceId}/token_history`,

  // Terminates a specific ProcessInstance.
  terminateProcessInstance: `/process_instance/${params.processInstanceId}/terminate`,
};

export const restSettings = {
  params: params,
  queryParams: queryParams,
  paths: paths,
};
