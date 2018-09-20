import {IIdentity} from '@essential-projects/iam_contracts';

import {ActiveToken, FlowNodeRuntimeInformation} from '@process-engine/kpi_api_contracts';
import {LogEntry} from '@process-engine/logging_api_contracts';
import {TokenHistoryEntry} from '@process-engine/token_history_api_contracts';

import {
  Correlation,
  EventList,
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
   * Retrieves a list of all active Correlations.
   *
   * @async
   * @param identity The users identtiy.
   * @returns        A Promise, which resolves with the correlation list,
   *                 or rejects an error, in case the request failed.
   */
  getAllActiveCorrelations(identity: IIdentity): Promise<Array<Correlation>>;

  /**
   * Retrieves the ProcessModels that were executed with the given Correlation.
   *
   * @async
   * @param identity      The users identtiy.
   * @param correlationId The ID of the Correlation for which to get the
   *                      ProcessModels.
   * @returns             A Promise, which resolves with the ProcessModels,
   *                      or rejects an error, in case the request failed.
   * @throws              403, if the requesting User is forbidden to see the
   *                      ProcessModel.
   * @throws              404, if the ProcessModel was not found.
   */
  getProcessModelsForCorrelation(context: ManagementContext, correlationId: string): Promise<Array<ProcessModel>>;

  /**
   * Retrieves all Correlations in which the given ProcessModel was executed.
   *
   * @async
   * @param context        The ManagementAPI specific ExecutionContext of the
   *                       requesting user.
   * @param processModelId The ID of the ProcessModel for which to get the
   *                       Correlations.
   * @returns              A Promise, which resolves with the Correlations,
   *                       or rejects an error, in case the request failed.
   * @throws               403, if the requesting User is forbidden to see the
   *                       ProcessModel.
   * @throws               404, if the ProcessModel was not found.
   */
  getCorrelationsForProcessModel(context: ManagementContext, processModelId: string): Promise<ProcessModel>;

  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param identity The users identtiy.
   * @returns        A Promise, which resolves with the ProcessModel list,
   *                 or rejects an error, in case the request failed.
   */
  getProcessModels(identity: IIdentity): Promise<ProcessModelList>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel to retrieve.
   * @returns              A Promise, which resolves with the ProcessModel, or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found, or the user is not authorized to see it.
   */
  getProcessModelById(identity: IIdentity, processModelId: string): Promise<ProcessModel>;

  /**
   * Updates a ProcessModel by its ID.
   *
   * @async
   * @param identity The users identtiy.
   * @param name     The name of the Process Definitions to update.
   * @param payload  The payload with which to update the Process Definitions.
   * @returns        A Promise, which resolves without content,
   *                 or rejects an error, in case the update failed.
   *                 This can happen, if the Process Definitions were not found,
   *                 or the user is not authorized to update it.
   */
  updateProcessDefinitionsByName(identity: IIdentity, name: string, payload: UpdateProcessDefinitionsRequestPayload): Promise<void>;

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
   * @param identity          The users identtiy.
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
   * Retrieves a list of all events belonging to a specific ProcessModel.
   *
   * @async
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
  *                        or the user is not authorized to see the it.
   */
  getEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
  *                        or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see the it.
   */
  getUserTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * correlation.
   *
   * @async
   * @param identity       The users identtiy.
   * @param correlationId  The ID of the correlation for which to retrieve
   *                       the UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found,
   *                       or the user is not authorized to see the it.
   */
  getUserTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel within a correlation.
   *
   * @async
   * @param identity       The users identtiy.
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
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel for which to finish a
   *                       UserTask.
   * @param correlationId  The ID of the correlation for which to finish a
   *                       UserTask.
   * @param userTaskId     The ID of UserTask to finish.
   * @param userTaskResult Contains a set of results with which to finish the
   *                       UserTask.
   * @returns              A Promise, which resolves without content,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the UserTask, ProcessModel or
   *                       correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishUserTask(identity: IIdentity,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;

  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a given
   * ProcessModel ID.
   *
   * @async
   * @param identity       The users identtiy.
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
   * @param identity       The users identtiy.
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
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel.
   * @returns              A list of discovered active tokens for the given
   *                       ProcessModel.
   */
  getActiveTokensForProcessModel(identity: IIdentity, processModelId: string): Promise<Array<ActiveToken>>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param identity   The users identtiy.
   * @param flowNodeId The ID of the sepcific FlowNode from whcih to get the
   *                   active Tokens.
   * @returns          A list of discovered active tokens for the given
   *                   FlowNode.
   */
  getActiveTokensForFlowNode(identity: IIdentity, flowNodeId: string): Promise<Array<ActiveToken>>;

  /**
   * Retrieves the logs for a specific ProcessModel of a given Correlation.
   *
   * @async
   * @param identity       The users identtiy.
   * @param correlationId  The ID of the Correlation for which to retrieve the
   *                       logs.
   * @param processModelId The ID of ProcessModel for which to retrieve the
   *                       logs.
   * @returns              A list of log entries.
   */
  getLogsForProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<LogEntry>>;

  /**
   * Gets the token history for a specific FlowNodeInstance of a
   * ProcessModel.
   *
   * @async
   * @param identity       The users identtiy.
   * @param processModelId The ID of the ProcessModel.
   * @param correlationId  The ID of the Correlation.
   * @param flowNodeId     The ID of the specific FlowNode.
   * @returns              A list of tokens that belong to the given Flow Node.
   */
  getTokensForFlowNodeInstance(identity: IIdentity,
                               processModelId: string,
                               correlationId: string,
                               flowNodeId: string): Promise<Array<TokenHistoryEntry>>;
}
