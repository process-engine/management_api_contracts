import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message sent when a ProcessInstance was started.
 */
export class ProcessStartedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId,
      processModelId,
      processInstanceId,
      flowNodeId,
      flowNodeInstanceId,
      currentToken);
  }
}
