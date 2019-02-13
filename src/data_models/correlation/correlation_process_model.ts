import {CorrelationState} from './correlation_state';

/**
 * Describes a ProcessModel within a Correlation.
 */
export class CorrelationProcessModel {
  public processDefinitionName: string;
  public hash: string;
  public xml: string;
  public processModelId: string;
  public processInstanceId?: string;
  public parentProcessInstanceId?: string;
  public state: CorrelationState;
  public error: Error;
  public createdAt?: Date;
}
