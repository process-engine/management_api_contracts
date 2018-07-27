import {EventList as ConsumerApiEventList} from '@process-engine/consumer_api_contracts';

import {Event} from '../index';

/**
 * Contains a list of events.
 */
export interface EventList extends ConsumerApiEventList {
  /**
   * The event list.
   */
  events: Array<Event>;
}
