import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * This message is used to finish a ManualTask; this assumes, that the ManualTask has been processed by the user.
 * You can put a result of the ManualTask into the `currentToken` parameter.
 */
export class FinishManualTaskMessage extends BaseSystemEventMessage {

  /**
   * The flow node ID of the manual task being finished.
   */
  public manualTaskId: string;

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
