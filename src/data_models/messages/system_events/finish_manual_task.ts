import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message used to finish a waiting manual task.
 */
export class FinishManualTaskMessage extends BaseSystemEventMessage {

  /**
   * The flow node id of the manual task being finished.
   */
  public manualTaskId: string;

  constructor(correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);
  }
}
