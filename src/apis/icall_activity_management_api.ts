import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {Messages} from '../messages/index';

/**
 * The ICallActvitiyManagementApi is used for Call Activity Events.
 */
export interface ICallActivityManagementApi {
  /**
   * Executes a callback when a CallActivity is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a CallActivity
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the CallActivity.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onCallActivityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCallActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when a CallActivity is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a CallActivity
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the CallActivity.
   * @param   subscribeOnce Optional: If set to true, the subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The subscription created by the EventAggregator.
   */
  onCallActivityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnCallActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
