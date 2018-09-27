import {BaseSystemEventMessage} from './base_system_event_message';

/**
 * The message used to finish a waiting user task.
 */
export class FinishUserTaskMessage extends BaseSystemEventMessage {

  /**
   * The flow node id of the user task being finished.
   */
  public userTaskId: string;
  /**
   * The result the user task should be finished with.
   */
  public result: any;

  constructor(result: any,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);

    this.result = result;
  }
}
