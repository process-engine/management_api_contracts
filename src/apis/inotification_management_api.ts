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
}
