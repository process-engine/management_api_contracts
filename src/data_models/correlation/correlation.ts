import {IIdentity} from '@essential-projects/iam_contracts';

import {CorrelationProcessModel} from './correlation_process_model';
import {CorrelationState} from './correlation_state';

/**
 * Describes a Correlation.
 */
export class Correlation {
  public id: string;
  public processModels: Array<CorrelationProcessModel>;
  public state: CorrelationState;
  public identity: IIdentity;
  public createdAt?: Date;
}
