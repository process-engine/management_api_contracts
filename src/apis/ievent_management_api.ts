import {IIdentity} from '@essential-projects/iam_contracts';

import {EventList, EventTriggerPayload} from '../data_models/event/index';

/**
 * The IEventManagementApi is used to retrieve waiting events and to trigger them.
 */
export interface IEventManagementApi {

  /**
   * Retrieves a list of all StartEvents belonging to a specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                        or the user is not authorized to see it.
   */
  getStartEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getWaitingEventsForProcessModel(identity: IIdentity, processModelId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to a correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to retrieve
   *                      the events.
   * @returns             A Promise, which resolves with the retrieved events,
   *                      or rejects an error, in case the request failed.
   *                      This can happen, if the ProcessModel was not found,
   *                      or the user is not authorized to see it.
   */
  getWaitingEventsForCorrelation(identity: IIdentity, correlationId: string): Promise<EventList>;

  /**
   * Retrieves a list of all triggerable events belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the Correlation for which to retrieve
   *                       the events.
   * @param processModelId The ID of the ProcessModel for which to retrieve
   *                       the events.
   * @returns              A Promise, which resolves with the retrieved events,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or Correlation
   *                       was not found, or the user is not authorized to see
   *                       it.
   */
  getWaitingEventsForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<EventList>;

  /**
   * Triggers a message event.
   *
   * @async
   * @param identity    The requesting users identity.
   * @param messageName The name of the message to trigger.
   * @param payload     The payload with which to trigger the message.
   */
  triggerMessageEvent(identity: IIdentity, messageName: string, payload?: EventTriggerPayload): Promise<void>;

  /**
   * Triggers a signal event.
   *
   * @async
   * @param identity   The requesting users identity.
   * @param signalName The name of the signal to trigger.
   * @param payload    The payload with which to trigger the signal.
   */
  triggerSignalEvent(identity: IIdentity, signalName: string, payload?: EventTriggerPayload): Promise<void>;
}
