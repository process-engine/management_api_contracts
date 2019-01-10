import {BasePublicEventMessage} from '../base_public_event_message';

/**
 * The message which is send, when a new ProcessInstance started.
 */
export class ProcessStartedMessage extends BasePublicEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              startEventId: string,
              startEventInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, startEventId, startEventInstanceId, currentToken);
  }
}
