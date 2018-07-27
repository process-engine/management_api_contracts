import {ProcessModelList as ConsumerApiProcessModelList} from '@process-engine/consumer_api_contracts';

import {ProcessModel} from '../index';

/**
 * Contains a list of process models.
 */
export class ProcessModelList extends ConsumerApiProcessModelList {
  /**
   * The process model list.
   */
  public processModels: Array<ProcessModel> = [];
}
