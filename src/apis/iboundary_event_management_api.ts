import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The IBoundaryEventManagementApi is used for BoundaryEvents Events.
 */
export interface IBoundaryEventManagementApi {
  /**
   * Executes a callback when a Boundary Event is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a Boundary Event
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the Boundary Event.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onBoundaryEventWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnBoundaryEventWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when a Boundary Event is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a Boundary Event
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the Boundary Event.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onBoundaryEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnBoundaryEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
