import {IIdentity} from '@essential-projects/iam_contracts';

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
