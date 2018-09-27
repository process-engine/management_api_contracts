import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message sent when a process ends.
 */
export class ProcessEndedMessage extends BaseSystemEventMessage {

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);
  }
}
