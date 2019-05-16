import {BaseEventMessage} from '../base_event_message';

/**
 * Represents the message which is send, when a BoundaryEvent has been reached.
 */
export class BoundaryEventReachedMessage extends BaseEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);
  }
}
