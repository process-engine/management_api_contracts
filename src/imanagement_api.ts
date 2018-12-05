// tslint:disable:max-file-line-count
import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken, EventTriggerPayload, FlowNodeRuntimeInformation, LogEntry, ManualTaskList, TokenHistoryEntry} from './data_models';

import {
  Correlation,
  EventList,
  Messages,
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
  UpdateProcessDefinitionsRequestPayload,
  UserTaskList,
  UserTaskResult,
} from './data_models/index';

export interface IManagementApi {

  /**
   * Retrieves a list of all Correlations.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the correlation list,
   *                 or rejects an error, in case the request failed.
   */
  getAllCorrelations(identity: IIdentity): Promise<Array<Correlation>>;

  /**
   * Retrieves a list of all active Correlations.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the correlation list,
   *                 or rejects an error, in case the request failed.
   */
  getActiveCorrelations(identity: IIdentity): Promise<Array<Correlation>>;

  /**
   * Retrieves the ProcessModels that were executed with the given Correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to get the
   *                      ProcessModels.
   * @returns             A Promise, which resolves with the ProcessModels,
   *                      or rejects an error, in case the request failed.
   * @throws              403, if the requesting User is forbidden to see the
   *                      ProcessModel.
   * @throws              404, if the ProcessModel was not found.
   */
  getCorrelationById(identity: IIdentity, correlationId: string): Promise<Correlation>;

  /**
   * Retrieves all Correlations in which the ProcessModel with the given ID was
   * executed.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to get the
   *                       Correlations.
   * @returns              A Promise, which resolves with the Correlations,
   *                       or rejects an error, in case the request failed.
   * @throws               404, if no Correlation was found.
   */
  getCorrelationsByProcessModelId(identity: IIdentity, processModelId: string): Promise<Array<Correlation>>;

  /**
   * Retrieves the Correlation in which the given ProcessInstance was executed.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param processInstanceId The ID of the ProcessModel for which to get the
   *                          Correlations.
   * @returns                 A Promise, which resolves with the Correlations,
   *                          or rejects an error, in case the request failed.
   * @throws                  404, if no Correlation was found.
   */
  getCorrelationByProcessInstanceId(identity: IIdentity, processInstanceId: string): Promise<Correlation>;

  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the ProcessModel list,
   *                 or rejects an error, in case the request failed.
   */
  getProcessModels(identity: IIdentity): Promise<ProcessModelList>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel to retrieve.
   * @returns              A Promise, which resolves with the ProcessModel, or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found, or the user is not authorized to see it.
   */
  getProcessModelById(identity: IIdentity, processModelId: string): Promise<ProcessModel>;

  /**
   * Updates a ProcessModel by its ID.
   *
   * @async
   * @param identity The requesting users identity.
   * @param name     The name of the Process Definitions to update.
   * @param payload  The payload with which to update the Process Definitions.
   * @returns        A Promise, which resolves without content,
   *                 or rejects an error, in case the update failed.
   *                 This can happen, if the Process Definitions were not found,
   *                 or the user is not authorized to update it.
   */
  updateProcessDefinitionsByName(identity: IIdentity, name: string, payload: UpdateProcessDefinitionsRequestPayload): Promise<void>;

  /**
   * Deletes a ProcessModel by its ID.
   *
   * @async
   * @param identity           The requesting users identity.
   * @param processModelId     The name of the Process Definitions to update.
   * @returns                  A Promise, which resolves without content,
   *                           or rejects an error, in case the update failed.
   *                           This can happen, if the Process Definitions were not found,
   *                           or the user is not authorized to delete it.
   */
  deleteProcessDefinitionsByProcessModelId(identity: IIdentity, processModelId: string): Promise<void>;

  /**
   * Starts a new instance of a ProcessModel with a specific ID.
   * Depending on the type of callback used, this function will resolve either
   * immediately after the Process Instance was started,
   * or after it has reached an EndEvent.
   *
   * This can either be a specific EndEvent,
   * or the first EndEvent encountered during execution.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param processModelId    The ID of the ProcessModel to retrieve.
   * @param startEventId      The ID of the start event through which to start
   *                          the Process Instance.
   * @param payload           The parameters to pass to the ProcessInstance.
   *                          Can optionally define a correlation ID to use.
   * @param startCallbackType The type of start callback use.
   *                          Depending on the value used, the function will
   *                          either resolve right after starting the
  *                           ProcessInstance, or after reaching an EndEvent.
   * @param endEventId        Contains the ID of the EndEvent that the
   *                          ProcessEngine should wait for, before resolving.
   *                          Works only in conjunction with the startCallback-
   *                          Type "CallbackOnEndEventReached".
   * @returns                 A Promise, which resolves with the execution result,
   *                          or rejects an error, in case the request failed.
   *                          This can happen, if the ProcessModel was not found,
   *                          or the user is not authorized to see it, or if
   *                          the ProcessInstance was interrupted prematurely.
   */
  startProcessInstance(identity: IIdentity,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;

  /**
   * Retrieves a list of all StartEvents belonging to a specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                        or the user is not authorized to see it.
   */
  getStartEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getWaitingEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to a correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve
   *                      the events.
   * @returns             A Promise, which resolves with the retrieved events,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the ProcessModel was not found,
   *                      or the user is not authorized to see it.
   */
  getWaitingEventsForCorrelation(identity: IIdentity, correlationId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation for which to retrieve
   *                       the events.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or Correlation
   *                       was not found, or the user is not authorized to see
   *                       it.
   */
  getWaitingEventsForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<EventList>;

  /**
   * Triggers a message event.
   *
   * @async
   * @param identity    The requesting users identity.
   * @param messageName The name of the message to trigger.
   * @param payload     The payload with which to trigger the message.
   */
  triggerMessageEvent(identity: IIdentity, messageName: string, payload?: EventTriggerPayload): Promise<void>;

  /**
   * Triggers a signal event.
   *
   * @async
   * @param identity   The requesting users identity.
   * @param signalName The name of the signal to trigger.
   * @param payload    The payload with which to trigger the signal.
   */
  triggerSignalEvent(identity: IIdentity, signalName: string, payload?: EventTriggerPayload): Promise<void>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
  *                        or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getUserTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the correlation for which to retrieve
   *                       the UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found,
   *                       or the user is not authorized to see it.
   */
  getUserTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel within a correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the correlation for which to retrieve the
   *                       UserTasks.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or correlation
   *                       were not found, or the user is not authorized to see either.
   */
  getUserTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific ProcessModel
   * within a correlation.
   *
   * @async
   * @param identity           The requesting users identity.
   * @param processInstanceId  The ID of the ProcessInstance for which to finish
   *                           a UserTask.
   * @param correlationId      The ID of the correlation for which to finish a
   *                           UserTask.
   * @param userTaskInstanceId The instance ID of UserTask to finish.
   * @param userTaskResult     Contains a set of results with which to finish
   *                           the UserTask.
   * @returns                  A Promise, which resolves without content,
   *                           or rejects an error, in case the request failed.
   *                           This can happen, if the UserTask, ProcessModel or
   *                           correlation were not found,
   *                           or the user is not authorized to see either.
   */
  finishUserTask(identity: IIdentity,
                 processInstanceId: string,
                 correlationId: string,
                 userTaskInstanceId: string,
                 userTaskResult: UserTaskResult): Promise<void>;

  /**
   * Retrieves a list of all suspended ManualTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting Users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       ManualTasks.
   * @returns              A Promise, which resolves the retrieved ManualTasks,
  *                        or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getManualTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<ManualTaskList>;

  /**
   * Retrieves a list of all suspended ManualTasks belonging to a specific
   * correlation.
   *
   * @async
   * @param identity       The requesting Users identity.
   * @param correlationId  The ID of the correlation for which to retrieve
   *                       the ManualTasks.
   * @returns              A Promise, which resolves the retrieved ManualTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found,
   *                       or the user is not authorized to see the it.
   */
  getManualTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<ManualTaskList>;

  /**
   * Retrieves a list of all suspended ManualTasks belonging to an instance of a specific ProcessModel within a correlation.
   *
   * @async
   * @param identity       The requesting Users identity.
   * @param correlationId  The ID of the correlation for which to retrieve the
   *                       ManualTasks.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       ManualTasks.
   * @returns              A Promise, which resolves with the retrieved ManualTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or correlation
   *                       were not found, or the user is not authorized to see either.
   */
  getManualTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<ManualTaskList>;

  /**
   * Finishes a ManualTask belonging to an instance of a specific ProcessModel
   * within a correlation.
   *
   * @async
   * @param identity       The requesting Users identity.
   * @param processInstanceId The Instance ID of the ProcessModel for which to finish a
   *                       ManualTask.
   * @param correlationId  The ID of the correlation for which to finish a
   *                       ManualTask.
   * @param manualTaskInstanceId  The Instance ID of ManualTask to finish.
   * @param manualTaskResult Contains a set of results with which to finish the
   *                       ManualTask.
   * @returns              A Promise, which resolves without content,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ManualTask, ProcessModel or
   *                       correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishManualTask(identity: IIdentity,
                   processInstanceId: string,
                   correlationId: string,
                   manualTaskInstanceId: string): Promise<void>;

  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a given
   * ProcessModel ID.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the PorcessModel.
   * @returns              The Runtime Informations pertaining to the given
   *                       ProcessModel.
   */
  getRuntimeInformationForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<FlowNodeRuntimeInformation>>;

 /**
   * Gets the FlowNodeRuntimeInformation for a specific FlowNode inside a
   * ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel.
   * @param flowNodeId     The ID of the specific FlowNode from whcih to get
   *                       the average runtime.
   * @returns              The Runtime Information pertaining to the given
   *                       FlowNode.
   */
  getRuntimeInformationForFlowNode(identity: IIdentity, processModelId: string, flowNodeId: string): Promise<FlowNodeRuntimeInformation>;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered active tokens for the given
   *                       ProcessModel.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active ProcessTokens for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered active tokens for the given
   *                       ProcessModel.
   */
  getActiveTokensForCorrelationAndProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param identity   The requesting users identity.
   * @param flowNodeId The ID of the sepcific FlowNode from whcih to get the
   *                   active Tokens.
   * @returns          A list of discovered active tokens for the given
   *                   FlowNode.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string): Promise<Array<ActiveToken>>;

  /**
   * Retrieves the logs for a specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of ProcessModel for which to retrieve the
   *                       logs.
   * @param correlationId  Optional: If provided, only the logs for the given
   *                       Correlation are returned.
   * @returns              A list of log entries.
   */
  getProcessModelLog(identity: IIdentity, processModelId: string, correlationId?: string): Promise<Array<LogEntry>>;

  /**
   * Gets the token history for a specific FlowNodeInstance of a
   * ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation.
   * @param processModelId The ID of the ProcessModel.
   * @param flowNodeId     The ID of the specific FlowNode.
   * @returns              A list of tokens that belong to the given Flow Node.
   */
  getTokensForFlowNodeInstance(identity: IIdentity,
                               correlationId: string,
                               processModelId: string,
                               flowNodeId: string): Promise<Array<TokenHistoryEntry>>;

  /**
   * Gets the token history for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered tokens for the given
   *                       ProcessModel.
   */
  getTokensForCorrelationAndProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<TokenHistoryEntry>>;

  /**
   * Executes a callback when a user task is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a user task
   *                       is reached. The message passed to the callback
   *                       contains further information about the user task.
   */
  onUserTaskWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskWaitingCallback): void;

  /**
   * Executes a callback when a user task is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a user task
   *                       is finished. The message passed to the callback
   *                       contains further information about the user task.
   */
  onUserTaskFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnUserTaskFinishedCallback): void;

  /**
   * Executes a callback when a ManualTask is reached.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a ManualTask
   *                       is reached. The message passed to the callback
   *                       contains further information about the ManualTask.
   */
  onManualTaskWaiting(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskWaitingCallback): void;

  /**
   * Executes a callback when a manual task is finished.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a manual task
   *                       is finished. The message passed to the callback
   *                       contains further information about the manual task.
   */
  onManualTaskFinished(identity: IIdentity, callback: Messages.CallbackTypes.OnManualTaskFinishedCallback): void;

  /**
   * Executes a callback when a process started.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a new ProcessInstance
   *                       was started. The message passed to the callback
   *                       contains further information about the started process.
   */
  onProcessStarted(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessStartedCallback): void;

  /**
   * Executes a callback when a process with a given ProcessModelId was started.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a new ProcessInstance
   *                       was started. The message passed to the callback
   *                       contains further information about the started process.
   * @param processModelId Id of the ProcessModel for which created instance a
  *                        notification should be send.
   */
  onProcessWithProcessModelIdStarted(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessStartedCallback, processModelId: string): void;

  /**
   * Executes a callback when a process is terminated.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a
   *                       ProcessInstance was terminated. The message passed to
   *                       the callback contains further information about the
   *                       process which was terminated.
   */
  onProcessTerminated(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessTerminatedCallback): void;

  /**
   * Executes a callback when a process ends.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param callback       The callback that will be executed when a
   *                       ProcessInstance ended. The message passed to the
   *                       callback contains further information about the ended process.
   */
  onProcessEnded(identity: IIdentity, callback: Messages.CallbackTypes.OnProcessEndedCallback): void;
}
