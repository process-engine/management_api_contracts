import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The IBoundaryEventManagementApi is used for BoundaryEvents Events.
 */
export interface IBoundaryEventManagementApi {
  /**
   * Executes a callback when a Boundary Event is triggered.
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
}
