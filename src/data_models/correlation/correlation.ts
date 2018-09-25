import {ProcessModel} from '../process_model_execution';
import {CorrelationState} from './correlation_state';

/**
 * Describes a correlation.
 */
export class Correlation {
  public id: string;
  public processModels: Array<ProcessModel>;
  public state: CorrelationState;
  public createdAt?: Date;
}
