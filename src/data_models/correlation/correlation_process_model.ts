import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Describes a ProcessModel within a Correlation.
 */
export class CorrelationProcessModel {
  public name: string;
  public hash: string;
  public xml: string;
  public processInstanceId?: string;
  public identity?: IIdentity;
  public createdAt?: Date;
}
