import {BaseEventMessage} from '../base_event_message';

/**
 * The message used to finish a waiting ManualTask.
 */
export class FinishManualTaskMessage extends BaseEventMessage {

  /**
   * The flow node id of the ManualTask being finished.
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
