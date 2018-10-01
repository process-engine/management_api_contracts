import {BaseBpmnEventMessage} from './base_bpmn_event_message';

/**
 * Encapsulates a Message for the EventAggregator, describing a
 * MessageEvent.
 */
export class EndEventReachedMessage extends BaseBpmnEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, currentToken);
  }
}
