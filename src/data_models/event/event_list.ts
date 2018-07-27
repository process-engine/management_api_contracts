import {EventList as ConsumerApiEventList} from '@process-engine/consumer_api_contracts';

import {Event} from '../index';

export interface EventList extends ConsumerApiEventList {
  events: Array<Event>;
}
