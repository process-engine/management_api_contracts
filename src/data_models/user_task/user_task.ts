import {IIdentity} from '@essential-projects/iam_contracts';

import {UserTaskConfig} from './user_task_config';

/**
 * Describes a user task that belongs to an active ProcessInstance.
 */
export class UserTask {
  public id: string;
  public flowNodeInstanceId?: string;
  public name: string;
  public correlationId: string;
  public processModelId: string;
  public processInstanceId?: string;
  /**
   * Contains information about the user tasks configuration,
   * such as the form fields that can be addressed.
   */
  public data: UserTaskConfig;
  /**
   * The token payload the UserTask got suspended with.
   */
  public tokenPayload: any;
  public owner: IIdentity;
}
