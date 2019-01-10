import {UserTaskResult} from '../../../user_task/user_task_result';

import {BasePublicEventMessage} from '../base_public_event_message';

/**
 * The message sent when a user task has been finished.
 */
export class UserTaskFinishedMessage extends BasePublicEventMessage {

  /**
   * The result the user task was finished with.
   */
  public userTaskResult: UserTaskResult;

  constructor(userTaskResult: UserTaskResult,
              correlationId: string,
              processModelId: string,
              processInstanceId: string,
              flowNodeId: string,
              flowNodeInstanceId: string,
              currentToken: any) {
    super(correlationId, processModelId, processInstanceId, flowNodeId, flowNodeInstanceId, currentToken);

    this.userTaskResult = userTaskResult;
  }
}
