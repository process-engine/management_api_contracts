import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {EventList} from '../data_models/event/index';
import {
  ProcessModel,
  ProcessModelList,
  ProcessStartRequestPayload,
  ProcessStartResponsePayload,
  StartCallbackType,
  UpdateProcessDefinitionsRequestPayload,
} from '../data_models/process_models/index';
import {Messages} from '../messages/index';

/**
 * The IProcessModelManagementApi is used to retreive ProcessModels and start ProcessInstances.
 */
export interface IProcessModelManagementApi {

  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of accessible ProcessModels.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getProcessModels(identity: IIdentity, offset?: number, limit?: number): Promise<ProcessModelList>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel to retrieve.
   * @returns                    The retrieved ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   * @throws {NotFoundError}     If ProcessModel was not found.
   */
  getProcessModelById(identity: IIdentity, processModelId: string): Promise<ProcessModel>;

  /**
   * Retrieves a ProcessModel by a ProcessInstanceID.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance for which to
   *                             retrieve the ProcessModel.
   * @returns                    The retrieved ProcessModel.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   */
  getProcessModelByProcessInstanceId(identity: IIdentity, processInstanceId: string): Promise<ProcessModel>;

  /**
   * Retrieves a list of all StartEvents belonging to a specific ProcessModel.
   *
   * @async
   * @param identity             The requesting users identity.
   * @param processModelId       The ID of the ProcessModel for which to
   *                             retrieve the StartEvents.
   * @returns                    The ProcessModels StartEvents.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   */
  getStartEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Updates a ProcessDefinition by its name.
   * If it doesn't exist yet, it will be created.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  name                The name of the ProcessDefinition to update.
   * @param  payload             The payload with which to update the
   *                             ProcessDefinition.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   */
  updateProcessDefinitionsByName(identity: IIdentity, name: string, payload: UpdateProcessDefinitionsRequestPayload): Promise<void>;

  /**
   * Deletes a ProcessDefinition by its ID.
   *
   * @async
   * @param identity             The requesting users identity.
   * @param processModelId       The name of the ProcessDefinition to update.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   * @throws {NotFoundError}     If ProcessModel was not found.
   */
  deleteProcessDefinitionsByProcessModelId(identity: IIdentity, processModelId: string): Promise<void>;

  /**
   * Starts a new instance of a ProcessModel with a specific ID.
   * Depending on the type of callback used, this function will resolve either
   * immediately after the ProcessInstance was started, or after it has reached
   * an EndEvent.
   * This can either be a specific EndEvent, or the first EndEvent encountered
   * during execution.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel to retrieve.
   * @param   payload            Contains parameters to pass to the ProcessInstance.
   *                             Can optionally define a CorrelationId to use.
   * @param   startCallbackType  The type of start callback use. Depending on
   *                             the value used, the function will either resolve
   *                             right after starting the ProcessInstance,
   *                             or after reaching an EndEvent.
   * @param   startEventId       The ID of the StartEvent through which to
   *                             start the ProcessInstance.
   * @param   endEventId         The ID of the EndEvent that the ProcessEngine
   *                             should wait for, before resolving.
   *                             Works only in conjunction with the
   *                             startCallbackType "CallbackOnEndEventReached".
   * @returns                    The final result of the request.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   * @throws {NotFoundError}     If ProcessModel was not found.
   */
  startProcessInstance(
    identity: IIdentity,
    processModelId: string,
    payload?: ProcessStartRequestPayload,
    startCallbackType?: StartCallbackType,
    startEventId?: string,
    endEventId?: string,
    processEndedCallback?: Messages.CallbackTypes.OnProcessEndedCallback,
  ): Promise<ProcessStartResponsePayload>;

  /**
   * Terminates a ProcessInstance.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  processInstanceId   The ID of the ProcessInstance that shall be
   *                             terminated.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessInstance.
   */
  terminateProcessInstance(
    identity: IIdentity,
    processInstanceId: string,
  ): Promise<void>;

  /**
   * Executes the provided callback when a ProcessInstance is started.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a new
   *                             ProcessInstance was started.
   *                             The message passed to the callback contains
   *                             further information about the ProcessInstance.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onProcessStarted(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessStartedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a new ProcessInstance for a given ProcessModelId
   * was started.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a new
   *                             ProcessInstance was started.
   *                             The message passed to the callback contains
   *                             further information about the ProcessInstance.
   * @param   processModelId     The ID of the ProcessModel to listen for.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onProcessWithProcessModelIdStarted(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessStartedCallback,
    processModelId: string,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ProcessInstance ends.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             ProcessInstance was finished.
   *                             The message passed to the callback contains
   *                             further information about the ProcessInstance.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onProcessEnded(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessEndedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ProcessInstance is terminated.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             ProcessInstance was terminated.
   *                             The message passed to the callback contains
   *                             further information about the ProcessInstance.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onProcessTerminated(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessTerminatedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ProcessInstance runs into an error.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             ProcessInstance was aborted by an error.
   *                             The message passed to the callback contains
   *                             further information about the ProcessInstance.
   * @param   subscribeOnce      Optional: If set to true, the subscription will
   *                             be automatically disposed, after the notification
   *                             was received once.
   * @returns                    The subscription created by the EventAggregator.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to create
   *                             event subscriptions.
   */
  onProcessError(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnProcessErrorCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
