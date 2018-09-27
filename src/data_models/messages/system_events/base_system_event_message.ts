export class BaseSystemEventMessage {
  /**
   * The id of the correlation the user task being finished belongs to.
   */
  public correlationId: string;
  public processModelId: string;
  /**
   * The id of the process instance the user task being finished belongs to.
   */
  public processInstanceId: string;
  public flowNodeId: string;
  public flowNodeInstanceId: string;
  public currentToken: any;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    this.correlationId = correlationId;
    this.processModelId = processModelId;
    this.processInstanceId = processInstanceId;
    this.flowNodeId = flowNodeId;
    this.flowNodeInstanceId = flowNodeInstanceId;
    this.currentToken = currentToken;
  }
}
