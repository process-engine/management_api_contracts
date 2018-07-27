import {ProcessModelList as ConsumerApiProcessModelList} from '@process-engine/consumer_api_contracts';

import {ProcessModel} from '../index';

export class ProcessModelList extends ConsumerApiProcessModelList {
  public processModels: Array<ProcessModel> = [];
}
