import {Subscription} from '@essential-projects/event_aggregator_contracts';

/**
 * The INotificationManagementApi is to manage subscriptions for async notifications.
 */
export interface INotificationManagementApi {

  /**
   * Removes the given notification subscription.
   *
   * @async
   * @param subscription The subscription to remove.
   */
  removeSubscription(subscription: Subscription): Promise<void>;
}
