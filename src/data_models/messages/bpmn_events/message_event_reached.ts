import {BaseBpmnEventMessage} from './base_bpmn_event_message';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class MessageEventReachedMessage extends BaseBpmnEventMessage {

  public messageReference: string;

  constructor(messageReference: string,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, currentToken);

    this.messageReference = messageReference;
  }
}
