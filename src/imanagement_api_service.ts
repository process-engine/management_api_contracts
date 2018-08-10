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

import {ManagementContext} from './management_context';

export interface IManagementApiService {
  /**
   * Retrieves a list of all active correlations.
   *
   * @async
   * @param context The management-api specific execution context of the requesting user.
   * @returns       A Promise, which resolves with the correlation list, or rejects an error, in case the request failed.
   */
  getAllActiveCorrelations(context: ManagementContext): Promise<Array<Correlation>>;

  /**
   * Retrieves a list of all process models that the requesting user is authorized to see.
   *
   * @async
   * @param context The management-api specific execution context of the requesting user.
   * @returns       A Promise, which resolves with the process model list, or rejects an error, in case the request failed.
   */
  getProcessModels(context: ManagementContext): Promise<ProcessModelList>;

  /**
   * Retrieves a process model by its id.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param processModelId The id of the process model to retrieve.
   * @returns              A Promise, which resolves with the process model, or rejects an error, in case the request failed.
   *                       This can happen, if the process model was not found, or the user is not authorized to see it.
   */
  getProcessModelById(context: ManagementContext, processModelId: string): Promise<ProcessModel>;

  /**
   * Updates a process model by its id.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param name           The name of the process definitions to update.
   * @param payload        The payload with which to update the process definitions.
   * @returns              A Promise, which resolves without content, or rejects an error, in case the update failed.
   *                       This can happen, if the process definitions were not found, or the user is not authorized to update it.
   */
  updateProcessDefinitionsByName(context: ManagementContext, name: string, payload: UpdateProcessDefinitionsRequestPayload): Promise<void>;

  /**
   * Starts a new instance of a process model with a specific id.
   * Depending on the type of callback used, this function will resolve either immediately after the process instance was started,
   * or after it has reached an end event.
   * This can either be a specific end event, or the first end event encountered during execution.
   *
   * @async
   * @param context           The management-api specific execution context of the requesting user.
   * @param processModelId    The id of the process model to retrieve.
   * @param startEventId      The id of the start event through which to start the process instance.
   * @param payload           Contains parameters to pass to the process instance. Can optionally define a correlation id to use.
   * @param startCallbackType The type of start callback use. Depending on the value used, the function will either resolve right
   *                          after starting the process instance, or after reaching an end event.
   * @param endEventId        Contains the id of the end event that the process engine should wait for, before resolving.
   *                          Works only in conjunction with the startCallbackType "CallbackOnEndEventReached".
   * @returns                 A Promise, which resolves with the execution result, or rejects an error, in case the request failed.
   *                          This can happen, if the process model was not found, or the user is not authorized to see it, or if
   *                          the process instance was interrupted prematurely because of an error.
   */
  startProcessInstance(context: ManagementContext,
                       processModelId: string,
                       startEventId: string,
                       payload: ProcessStartRequestPayload,
                       startCallbackType: StartCallbackType,
                       endEventId?: string): Promise<ProcessStartResponsePayload>;

  /**
   * Retrieves a list of all events belonging to a specific process model.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param processModelId The id of the process model for which to retrieve the events.
   * @returns              A Promise, which resolves with the retrieved events or rejects an error, in case the request failed.
   *                       This can happen, if the process model was not found, or the user is not authorized to see the it.
   */
  getEventsForProcessModel(context: ManagementContext, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a specific process model.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param processModelId The id of the process model for which to retrieve the UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks or rejects an error, in case the request failed.
   *                       This can happen, if the process model was not found, or the user is not authorized to see the it.
   */
  getUserTasksForProcessModel(context: ManagementContext, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific correlation.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks, or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found, or the user is not authorized to see the it.
   */
  getUserTasksForCorrelation(context: ManagementContext, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the UserTasks.
   * @param processModelId The id of the process model for which to retrieve the UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks, or rejects an error, in case the request failed.
   *                       This can happen, if the process model or correlation were not found, or the user is not authorized to see either.
   */
  getUserTasksForProcessModelInCorrelation(context: ManagementContext, processModelId: string, correlationId: string): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific process model within a correlation.
   *
   * @async
   * @param context        The management-api specific execution context of the requesting user.
   * @param processModelId The id of the process model for which to finish a UserTask.
   * @param correlationId  The id of the correlation for which to finish a UserTask.
   * @param userTaskId     The id of UserTask to finish.
   * @param userTaskResult Contains a set of results with which to finish the UserTask.
   * @returns              A Promise, which resolves without content, or rejects an error, in case the request failed.
   *                       This can happen, if the UserTask, process model or correlation were not found,
   *                       or the user is not authorized to see either.
   */
  finishUserTask(context: ManagementContext,
                 processModelId: string,
                 correlationId: string,
                 userTaskId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
