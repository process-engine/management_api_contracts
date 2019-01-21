import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The INotificationManagementApi is to manage subscriptions for async notifications.
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
}
