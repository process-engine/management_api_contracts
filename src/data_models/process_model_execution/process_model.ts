import {ProcessModel as ConsumerApiProcessModel} from '@process-engine/consumer_api_contracts';

import {Event} from '../index';

/**
 * Describes a process model.
 * The content is always user-specific and will not contain any information that a requesting user is not authorized to see.
 */
export class ProcessModel extends ConsumerApiProcessModel {
  /**
   * The raw xml of the process model.
   */
  public xml: string;
  /**
   * Contains a list of start events that the requesting user has access to.
   */
  public startEvents: Array<Event> = [];
  /**
   * Contains a list of end events that the requesting user has access to.
   */
  public endEvents: Array<Event> = [];
}
