const params = {
  // Id of a Correlation.
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
  // ID of a ProcessInstance.
  processInstanceId: ':process_instance_id',
  // State of a ProcessInstance.
  processInstanceState: ':process_instance_state',
  // Id of a StartEvent.
  startEventId: ':start_event_id',
  // Id of a UserTaskInstance.
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

  /*
   * Gets all Correlations the requesting user is allowed to see.
   * @tag Correlation
   * @method get
   */
  getAllCorrelations: '/correlations/all',
  /*
   * Gets all active Correlations the requesting user is allowed to see.
   * @tag Correlation
   * @method get
   */
  getActiveCorrelations: '/correlations/active',
  /*
   * Gets a Correlation by its id.
   * @tag Correlation
   * @method get
   */
  getCorrelationById: `/correlations/${params.correlationId}`,
  /*
   * Gets all Correlations by a specific ProcessModel.
   * @tag Correlation
   * @method get
   */
  getCorrelationsByProcessModelId: `/correlations/process_model/${params.processModelId}`,

  // ProcessInstances

  /*
   * Gets a ProcessInstance by its id.
   * @tag ProcessInstance
   * @method get
   */
  getProcessInstanceById: `/process_instances/${params.processInstanceId}`,
  /*
   * Gets all ProcessInstances running in a specific Correlation.
   * @tag ProcessInstance
   * @method get
   */
  getProcessInstancesForCorrelation: `/process_instances/by_correlation/${params.correlationId}`,
  /*
   * Gets all ProcessInstances for a specific ProcessModel.
   * @tag ProcessInstance
   * @method get
   */
  getProcessInstancesForProcessModel: `/process_instances/by_process_model/${params.processModelId}`,
  /*
   * Gets all ProcessInstances with a specific state.
   * @tag ProcessInstance
   * @method get
   */
  getProcessInstancesByState: `/process_instances/by_state/${params.processInstanceState}`,
  /*
   * Terminates a specific ProcessInstance.
   * @tag ProcessInstance
   * @method post
   */
  terminateProcessInstance: `/process_instance/${params.processInstanceId}/terminate`,

  // Cronjobs

  /*
   * Gets all Cronjobs.
   * @tag Cronjob
   * @method get
   */
  getActiveCronjobs: '/cronjobs/active',
  /*
   * Gets the CronjobExecutionHistory for a specific ProcessModel.
   * @tag Cronjob
   * @method get
   */
  getCronjobExecutionHistoryForProcessModel: '/cronjobs/history/process_model/:process_model_id',
  /*
   * Gets the CronjobExecutionHistory for a specific Crontab.
   * @tag Cronjob
   * @method get
   */
  getCronjobExecutionHistoryForCrontab: '/cronjobs/history/crontab/:crontab',

  // Process Models

  /*
   * Gets all ProcessModels the requesting user is allowed to see.
   * @tag ProcessModel
   * @method get
   */
  processModels: '/process_models',
  /*
   * Gets a ProcessModel by its id.
   * @tag ProcessModel
   * @method get
   */
  processModelById: `/process_models/${params.processModelId}`,
  /*
   * Gets the ProcessModel for a specific ProcessInstance.
   * @tag ProcessModel
   * @method get
   */
  processModelByProcessInstanceId: `/process_instance/${params.processInstanceId}/process_model/`,
  /*
   * Updates a ProcessDefinition by its name.
   * @tag ProcessModel
   * @method post
   */
  updateProcessDefinitionsByName: `/process_models/${params.processDefinitionsName}/update`,
  /*
   * Removes a ProcessDefinition by its name.
   * @tag ProcessModel
   * @method get
   */
  deleteProcessDefinitionsByProcessModelId: `/process_models/${params.processModelId}/delete`,
  /*
   * Starts a ProcessInstance for a specific ProcessModel.
   * @tag ProcessModel
   * @method post
   */
  startProcessInstance: `/process_models/${params.processModelId}/start`,
  /*
   * Gets all StartEvents of a specific ProcessModel.
   * @tag ProcessModel
   * @method get
   */
  processModelStartEvents: `/process_models/${params.processModelId}/start_events`,

  // Events

  /*
   * Gets all waiting Events for a specific ProcessModel.
   * @tag Event
   * @method get
   */
  waitingProcessModelEvents: `/process_models/${params.processModelId}/events/waiting`,
  /*
   * Gets all waiting Events for a specific Correlation.
   * @tag Event
   * @method get
   */
  waitingCorrelationEvents: `/correlations/${params.correlationId}/events/waiting`,
  /*
   * Gets all waiting Events for a specific ProcessModel and Correlation.
   * @tag Event
   * @method get
   */
  waitingProcessModelCorrelationEvents: `/process_models/${params.processModelId}/correlations/${params.correlationId}/events/waiting`,
  /*
   * Triggers a MessageEvent by its name.
   * @tag Event
   * @method post
   */
  triggerMessageEvent: `/message/${params.eventName}/trigger`,
  /*
   * Triggers a SignalEvent by its name.
   * @tag Event
   * @method post
   */
  triggerSignalEvent: `/signal/${params.eventName}/trigger`,

  // EmptyActivities

  /*
   * Gets all EmptyActivities for a specific ProcessModel.
   * @tag EmptyActivity
   * @method get
   */
  processModelEmptyActivities: `/process_models/${params.processModelId}/empty_activities`,
  /*
   * Gets all EmptyActivities for a specific ProcessInstance.
   * @tag EmptyActivity
   * @method get
   */
  processInstanceEmptyActivities: `/process_instances/${params.processInstanceId}/empty_activities`,
  /*
   * Gets all EmptyActivities for a specific Correlation.
   * @tag EmptyActivity
   * @method get
   */
  correlationEmptyActivities: `/correlations/${params.correlationId}/empty_activities`,
  /*
   * Gets all EmptyActivities for a specific ProcessModel and Correlation.
   * @tag EmptyActivity
   * @method get
   */
  processModelCorrelationEmptyActivities: `/process_models/${params.processModelId}/correlations/${params.correlationId}/empty_activities`,
  /*
   * Gets all EmptyActivities for the logged in user.
   * @tag EmptyActivity
   * @method get
   */
  getOwnEmptyActivities: '/empty_activities/own',
  /*
   * Finishes a specific EmptyActivity by its ProcessInstanceId, CorrelationId and its EmptyActivityInstanceId.
   * @tag EmptyActivity
   * @method get
   */
  finishEmptyActivity:
    `/processes/${params.processInstanceId}/correlations/${params.correlationId}/empty_activities/${params.emptyActivityInstanceId}/finish`,

  // FlowNodeInstances

  /*
   * Gets all FlowNodeInstances by a specific ProcessInstanceId.
   * @tag FlowNodeInstance
   * @method get
   */
  getFlowNodeInstancesForProcessInstance: `/process_instances/${params.processInstanceId}/flow_node_instances`,

  // UserTasks

  /*
   * Gets all UserTasks for a specific ProcessModel.
   * @tag UserTask
   * @method get
   */
  processModelUserTasks: `/process_models/${params.processModelId}/user_tasks`,
  /*
   * Gets all UserTasks for a specific ProcessInstance.
   * @tag UserTask
   * @method get
   */
  processInstanceUserTasks: `/process_instances/${params.processInstanceId}/user_tasks`,
  /*
   * Gets all UserTasks for a specific Correlation.
   * @tag UserTask
   * @method get
   */
  correlationUserTasks: `/correlations/${params.correlationId}/user_tasks`,
  /*
   * Gets all UserTasks for a specific ProcessModel and Correlation.
   * @tag UserTask
   * @method get
   */
  processModelCorrelationUserTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/user_tasks`,
  /*
   * Finishes a specific UserTask by its ProcessInstanceId, CorrelationId and its UserTaskInstanceId.
   * @tag UserTask
   * @method post
   */
  finishUserTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/usertasks/${params.userTaskInstanceId}/finish`,

  // ManualTask

  /*
   * Gets all ManualTasks for a specific ProcessModel.
   * @tag ManualTask
   * @method get
   */
  processModelManualTasks: `/process_models/${params.processModelId}/manual_tasks`,
  /*
   * Gets all ManualTasks for a specific ProcessInstance.
   * @tag ManualTask
   * @method get
   */
  processInstanceManualTasks: `/process_instances/${params.processInstanceId}/manual_tasks`,
  /*
   * Gets all ManualTasks for a specific Correlation.
   * @tag ManualTask
   * @method get
   */
  correlationManualTasks: `/correlations/${params.correlationId}/manual_tasks`,
  /*
   * Gets all ManualTasks for a specific ProcessModel and Correlation.
   * @tag ManualTask
   * @method get
   */
  processModelCorrelationManualTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/manual_tasks`,
  /*
   * Finishes a specific ManualTask by its ProcessInstanceId, CorrelationId and its ManualTaskInstanceId.
   * @tag ManualTask
   * @method post
   */
  finishManualTask: `/processes/${params.processInstanceId}/correlations/${params.correlationId}/manual_tasks/${params.manualTaskInstanceId}/finish`,

  // Task

  /*
   * Gets all suspended Tasks.
   * @tag Task
   * @method get
   */
  allSuspendedTasks: '/suspended_tasks',
  /*
   * Gets all suspended Tasks for a specific ProcessModel.
   * @tag Task
   * @method get
   */
  suspendedProcessModelTasks: `/process_models/${params.processModelId}/tasks`,
  /*
   * Gets all suspended Tasks for a specific ProcessInstance.
   * @tag Task
   * @method get
   */
  suspendedProcessInstanceTasks: `/process_instances/${params.processInstanceId}/tasks`,
  /*
   * Gets all suspended Tasks for a specific Correlation.
   * @tag Task
   * @method get
   */
  suspendedCorrelationTasks: `/correlations/${params.correlationId}/tasks`,
  /*
   * Gets all suspended Tasks for a specific ProcessModel and Correlation.
   * @tag Task
   * @method get
   */
  suspendedProcessModelCorrelationTasks: `/process_models/${params.processModelId}/correlations/${params.correlationId}/tasks`,

  // Heatmap

  /*
   * Gets the RuntimeInformation for a specific ProcessModel.
   * @tag RuntimeInformation
   * @method get
   */
  getRuntimeInformationForProcessModel: `/process_model/${params.processModelId}/runtime_information`,
  /*
   * Gets all active Tokens for a specific ProcessModel.
   * @tag Token
   * @method get
   */
  getActiveTokensForProcessModel: `/process_model/${params.processModelId}/active_tokens`,
  /*
   * Gets all active Tokens for a specific ProcessModel and Correlation.
   * @tag Token
   * @method get
   */
  getActiveTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/active_tokens`,
  /*
   * Gets all active Tokens for a specific ProcessInstance.
   * @tag Token
   * @method get
   */
  getActiveTokensForProcessInstance: `/process_instance/${params.processInstanceId}/active_tokens`,
  /*
   * Gets all active Tokens for a specific ProcessModel and FlowNode.
   * @tag RuntimeInformation
   * @method get
   */
  getRuntimeInformationForFlowNode: `/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/runtime_information`,
  /*
   * Gets all active Tokens for a specific FlowNode.
   * @tag Token
   * @method get
   */
  getActiveTokensForFlowNode: `/token/flow_node/${params.flowNodeId}/active_tokens`,
  /*
   * Gets the log of a specific ProcessModel.
   * @tag Log
   * @method get
   */
  getProcessModelLog: `/process_model/${params.processModelId}/logs`,
  /*
   * Gets the log of a specific ProcessInstance.
   * @tag Log
   * @method get
   */
  getProcessInstanceLog: `/process_model/${params.processModelId}/process_instance/${params.processInstanceId}/logs`,
  /*
   * Gets all Tokens for a specific Correlation, ProcessModel and FlowNode.
   * @tag Token
   * @method get
   */
  getTokensForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}/token_history`,
  /*
   * Gets all Tokens for a specific ProcessInstance and FlowNode.
   * @tag Token
   * @method get
   */
  getTokensForFlowNodeByProcessInstanceId: `/process_instance/${params.processInstanceId}/flow_node/${params.flowNodeId}/token_history`,
  /*
   * Gets all Tokens for a specific ProcessModel and Correlation.
   * @tag Token
   * @method get
   */
  getTokensForCorrelationAndProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}/token_history`,
  /*
   * Gets all Tokens for a specific ProcessInstance.
   * @tag Token
   * @method get
   */
  getTokensForProcessInstance: `/process_instance/${params.processInstanceId}/token_history`,
};

export const restSettings = {
  params: params,
  queryParams: queryParams,
  paths: paths,
};
