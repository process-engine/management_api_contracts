export class BaseBpmnEventMessage {
  public correlationId: string;
  public processModelId: string;
  public processInstanceId: string;
  public flowNodeId: string;
  public currentToken: any;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              currentToken: any) {
    this.correlationId = correlationId;
    this.processModelId = processModelId;
    this.processInstanceId = processInstanceId;
    this.flowNodeId = flowNodeId;
    this.currentToken = currentToken;
  }
}
