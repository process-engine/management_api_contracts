import {BaseEventMessage} from '../base_event_message';

/**
 * Represents the message which is send, when a BoundaryEvent has been finished.
 */
export class BoundaryEventFinishedMessage extends BaseEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);
  }
}
