import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * The base class for definining event messages.
 */
export class BaseInternalEventMessage {
  public readonly correlationId: string;
  public readonly processModelId: string;
  public readonly processInstanceId: string;
  public readonly flowNodeId: string;
  public readonly flowNodeInstanceId: string;
  public readonly processInstanceOwner: IIdentity;
  public readonly currentToken: any;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              processInstanceOwner: IIdentity,
              currentToken: any) {
    this.correlationId = correlationId;
    this.processModelId = processModelId;
    this.processInstanceId = processInstanceId;
    this.flowNodeId = flowNodeId;
    this.flowNodeInstanceId = flowNodeInstanceId;
    this.processInstanceOwner = processInstanceOwner;
    this.currentToken = currentToken;
  }
}
