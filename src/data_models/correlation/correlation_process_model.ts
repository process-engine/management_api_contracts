/**
 * Describes a ProcessModel within a Correlation.
 */
export class CorrelationProcessModel {
  public name: string;
  public hash: string;
  public xml: string;
  public processInstanceId?: string;
  public createdAt?: Date;
}
