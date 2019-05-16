import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The IIntermediateEventManagementApi is used for IntermediateEvents Events.
 */
export interface IIntermediateEventManagementApi {
  /**
   * Executes a callback when a Intermediate Event is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a Intermediate Event
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the Intermediate Event.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onIntermediateEventWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateEventWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when a Intermediate Event is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a Intermediate Event
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the Intermediate Event.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onIntermediateEventFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnIntermediateEventFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
