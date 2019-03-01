import {Subscription} from '@essential-projects/event_aggregator_contracts';
import {IIdentity} from '@essential-projects/iam_contracts';

import {EmptyActivityList} from '../data_models/empty_activity/index';
import {Messages} from '../messages/index';

/**
 * The IEmptyActivityManagementApi is used to retrieve and manage EmptyActivities.
 */
export interface IEmptyActivityManagementApi {

  /**
   * Retrieves a list of all suspended EmptyActivities belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       EmptyActivities.
   * @returns              A Promise, which resolves with the retrieved EmptyActivities,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getEmptyActivitiesForProcessModel(identity: IIdentity, processModelId: string): Promise<EmptyActivityList>;

  /**
   * Retrieves a list of all suspended EmptyActivities belonging to an specific
   * ProcessInstance.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param processInstanceId The ID of the ProcessInstance for which to retrieve the
   *                          EmptyActivities.
   * @returns                 A Promise, which resolves with the retrieved EmptyActivities,
   *                          or rejects an error, in case the request failed.
   *                          This can happen, if the ProcessModel was not found,
   *                          or the user is not authorized to see it.
   */
  getEmptyActivitiesForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<EmptyActivityList>;

  /**
   * Retrieves a list of all suspended EmptyActivities belonging to a specific
   * Correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve the
   *                      EmptyActivities.
   * @returns             A Promise, which resolves with the retrieved EmptyActivities,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the Correlation was not found,
   *                      or the user is not authorized to see it.
   */
  getEmptyActivitiesForCorrelation(identity: IIdentity, correlationId: string): Promise<EmptyActivityList>;

  /**
   * Retrieves a list of all suspended EmptyActivities belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation for which to retrieve the
   *                       EmptyActivities.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       EmptyActivities.
   * @returns              A Promise, which resolves without content,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the event, ProcessModel or
   *                       correlation were not found,
   *                       or the user is not authorized to see either.
   */
  getEmptyActivitiesForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<EmptyActivityList>;

  /**
   * Gets all waiting EmptyActivities belonging to the given identity.
   *
   * @async
   * @param   identity The identity for which to get the EmptyActivities.
   * @returns          The list of EmptyActivities.
   */
  getWaitingEmptyActivitiesByIdentity(identity: IIdentity): Promise<EmptyActivityList>;

  /**
   * Finishes an EmptyActivity belonging to an instance of a specific ProcessModel
   * within a Correlation.
   *
   * @async
   * @param identity                The requesting users identity.
   * @param processInstanceId       The ID of the ProcessInstance for which to
   *                                finish a EmptyActivity.
   * @param correlationId           The ID of the correlation for which to finish
   *                                a EmptyActivity.
   * @param emptyActivityInstanceId The instance ID of a EmptyActivity to finish.
   * @param emptyActivityResult     Optional: Contains a set of results with which
   *                                to finish the EmptyActivity.
   * @returns                       A Promise, which resolves without content, or
   *                                rejects an error, in case the request failed.
   *                                This can happen, if the EmptyActivity, ProcessModel
   *                                or correlation were not found, or the user is
   *                                not authorized to see either.
   */
  finishEmptyActivity(
    identity: IIdentity,
    processInstanceId: string,
    correlationId: string,
    emptyActivityInstanceId: string,
  ): Promise<void>;

  /**
   * Executes a callback when an EmptyActivity is reached.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a EmptyActivity
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the EmptyActivity.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onEmptyActivityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an EmptyActivity is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a EmptyActivity
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the EmptyActivity.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onEmptyActivityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when an EmptyActivity for the given identity is reached.
   *
   * @async
   * @param identity        The requesting users identity.
   * @param callback        The callback that will be executed when a EmptyActivity
   *                        is reached.
   *                        The message passed to the callback contains further
   *                        information about the EmptyActivity.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onEmptyActivityForIdentityWaiting(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityWaitingCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;

  /**
   * Executes a callback when a EmptyActivity for the given identity is finished.
   *
   * @async
   * @param   identity      The requesting users identity.
   * @param   callback      The callback that will be executed when a EmptyActivity
   *                        is finished.
   *                        The message passed to the callback contains further
   *                        information about the EmptyActivity.
   * @param   subscribeOnce Optional: If set to true, the Subscription will be
   *                        automatically disposed, after the notification was
   *                        received once.
   * @returns               The Subscription created by the EventAggregator.
   */
  onEmptyActivityForIdentityFinished(
    identity: IIdentity,
    callback: Messages.CallbackTypes.OnEmptyActivityFinishedCallback,
    subscribeOnce?: boolean,
  ): Promise<Subscription>;
}
