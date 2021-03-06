import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {UserTaskList, UserTaskResult} from '../data_models/user_task/index';
import {Messages} from '../messages/index';

/**
 * The IUserTaskManagementApi is used to retreive and manage UserTasks.
 */
export interface IUserTaskManagementApi {

  /**
   * Retrieves a list of all suspended UserTasks belonging to a
   * specific ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel for which to
   *                             retrieve the UserTasks.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of waiting UserTasks for the given
   *                             ProcessModel.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   */
  getUserTasksForProcessModel(
    identity: IIdentity,
    processModelId: string,
    offset?: number,
    limit?: number,
  ): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to specific
   * ProcessInstance.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance for which to retrieve the
   *                             UserTasks.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of waiting UserTasks for the given
   *                             ProcessInstance.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessInstance.
   */
  getUserTasksForProcessInstance(
    identity: IIdentity,
    processInstanceId: string,
    offset?: number,
    limit?: number,
  ): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * Correlation.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation for which to
   *                             retrieve the UserTasks.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of waiting UserTasks for the given
   *                             Correlation.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             Correlation.
   */
  getUserTasksForCorrelation(
    identity: IIdentity,
    correlationId: string,
    offset?: number,
    limit?: number,
  ): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation for which to
   *                             retrieve the UserTasks.
   * @param   processModelId     The ID of the ProcessModel for which to
   *                             retrieve the UserTasks.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of waiting UserTasks for the given
   *                             ProcessModel and Correlation.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             Correlation or the ProcessModel.
   */
  getUserTasksForProcessModelInCorrelation(
    identity: IIdentity,
    processModelId: string,
    correlationId: string,
    offset?: number,
    limit?: number,
  ): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param  identity           The requesting users identity.
   * @param  processInstanceId  The ID of the ProcessInstance for which to finish
   *                            a UserTask.
   * @param  correlationId      The ID of the Correlation for which to finish a
   *                            UserTask.
   * @param  userTaskInstanceId The instance ID of UserTask to finish.
   * @param  userTaskResult     Contains a set of results with which to finish
   *                            the UserTask.
   *
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             UserTask.
   * @throws {NotFoundError}     If the ProcessInstance, the Correlation,
   *                             or the UserTask was not found.
   */
  finishUserTask(
    identity: IIdentity,
    processInstanceId: string,
    correlationId: string,
    userTaskInstanceId: string,
    userTaskResult: UserTaskResult,
  ): Promise<void>;

  /**
   * Executes the provided callback when a UserTask is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new UserTask is waiting.
   *                             The message passed to the callback contains
   *                             further information about the UserTask.
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
  onUserTaskWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnUserTaskWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a UserTask is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             UserTask is finished.
   *                             The message passed to the callback contains
   *                             further information about the UserTask.
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
  onUserTaskFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnUserTaskFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a UserTask for the given identity is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a new
   *                             UserTask for the identity is waiting.
   *                             The message passed to the callback contains
   *                             further information about the UserTask.
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
  onUserTaskForIdentityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnUserTaskWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a UserTask for the given identity is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             UserTask for the identity is finished.
   *                             The message passed to the callback contains
   *                             further information about the UserTask.
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
  onUserTaskForIdentityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnUserTaskFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
