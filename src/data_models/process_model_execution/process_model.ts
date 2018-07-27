import {ProcessModel as ConsumerApiProcessModel} from '@process-engine/consumer_api_contracts';

import {Event} from '../index';

export class ProcessModel extends ConsumerApiProcessModel {
  public xml: string;
  public startEvents: Array<Event> = [];
  public endEvents: Array<Event> = [];
}
