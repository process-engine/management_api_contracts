import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';
import {Messages} from '../messages/index';

/**
 * The INotificationManagementApi is used to manage subscriptions for async notifications.
 */
export interface INotificationManagementApi {

  /**
   * Removes the given notification subscription.
   *
   * @async
   * @param identity     The requesting users identity.
   * @param subscription The subscription to remove.
   */
  removeSubscription(identity: IIdentity, subscription: Subscription): Promise<void>;

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

  /**
   * Executes a callback when an Activity is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when an Activity
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the Activity.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onActivityReached(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnActivityReachedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an Activity is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when an Activity
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the Activity.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onActivityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when an EmptyActivity is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new EmptyActivity is waiting.
   *                             The message passed to the callback contains
   *                             further information about the EmptyActivity.
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
  onEmptyActivityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when an EmptyActivity is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             EmptyActivity is finished.
   *                             The message passed to the callback contains
   *                             further information about the EmptyActivity.
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
  onEmptyActivityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when an EmptyActivity for the given identity is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a new
   *                             EmptyActivity for the identity is waiting.
   *                             The message passed to the callback contains
   *                             further information about the EmptyActivity.
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
  onEmptyActivityForIdentityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when an EmptyActivity for the given identity is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             EmptyActivity for the identity is finished.
   *                             The message passed to the callback contains
   *                             further information about the EmptyActivity.
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
  onEmptyActivityForIdentityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ManualTask is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new ManualTask is waiting.
   *                             The message passed to the callback contains
   *                             further information about the ManualTask.
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
  onManualTaskWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnManualTaskWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ManualTask is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             ManualTask is finished.
   *                             The message passed to the callback contains
   *                             further information about the ManualTask.
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
  onManualTaskFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnManualTaskFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ManualTask for the given identity is reached.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a new
   *                             ManualTask for the identity is waiting.
   *                             The message passed to the callback contains
   *                             further information about the ManualTask.
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
  onManualTaskForIdentityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnManualTaskWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a ManualTask for the given identity is finished.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when an
   *                             ManualTask for the identity is finished.
   *                             The message passed to the callback contains
   *                             further information about the ManualTask.
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
  onManualTaskForIdentityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnManualTaskFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

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

  /**
   * Executes a callback when a BoundaryEvent is triggered.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a Boundary Event
   *                        is triggered.
   *                        The message passed to the callback contains further
   *                        information about the Boundary Event.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onBoundaryEventTriggered(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnBoundaryEventTriggeredCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an IntermediateThrowEvent is triggered.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when an IntermediateThrowEvent
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the IntermediateThrowEvent.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onIntermediateThrowEventTriggered(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateThrowEventTriggeredCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an IntermediateCatchEvent is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when an IntermediateCatchEvent
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the IntermediateCatchEvent.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onIntermediateCatchEventReached(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateCatchEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an IntermediateCatchEvent is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when an IntermediateCatchEvent
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the IntermediateCatchEvent.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onIntermediateCatchEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateCatchEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  // ------------ For backwards compatibility only
  /**
   * Executes the provided callback when a CallActivity is reached.
   *
   * @deprecated This function will be removed with the next major Release! Use onActivityReached instead!
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             new CallActivity is waiting.
   *                             The message passed to the callback contains
   *                             further information about the CallActivity.
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
  onCallActivityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCallActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a CallActivity is finished.
   *
   * @deprecated This function will be removed with the next major Release! Use onActivityFinished instead!
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             CallActivity is finished.
   *                             The message passed to the callback contains
   *                             further information about the CallActivity.
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
  onCallActivityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCallActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
  // ------------

  /**
   * Executes the provided callback when a Cronjob is executed.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             Cronjob is executed.
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
  onCronjobExecuted(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCronjobExecutedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a Cronjob is updated.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             Cronjob is updated.
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
  onCronjobUpdated(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCronjobUpdatedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a Cronjob is stopped.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             Cronjob is stopped.
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
  onCronjobStopped(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCronjobStoppedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a Cronjob is created.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             Cronjob is created.
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
  onCronjobCreated(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCronjobCreatedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes the provided callback when a Cronjob is removed.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   callback           The callback that will be executed when a
   *                             Cronjob is removed.
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
  onCronjobRemoved(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCronjobRemovedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
