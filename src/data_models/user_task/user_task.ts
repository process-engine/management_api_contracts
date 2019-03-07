import {UserTaskConfig} from './user_task_config';

/**
 * Describes a waiting UserTask.
 */
export class UserTask {
  /**
   * The model ID of the UserTask, as it is declared in the ProcessModel.
   */
  public id: string;
  /**
   * The name of the UserTask, as it is declared in the ProcessModel.
   */
  public name: string;
  /**
   * The instance ID of the UserTask.
   */
  public flowNodeInstanceId?: string;
  /**
   * The ID of the Correlation that the UserTask belongs to.
   */
  public correlationId: string;
  /**
   * The ID of the ProcessModel that the UserTask belongs to.
   */
  public processModelId: string;
  /**
   * The ID of the ProcessInstance that the UserTask belongs to.
   */
  public processInstanceId?: string;
  /**
   * Contains information about the UserTasks configuration,
   * such as the FormFields that can be accessed.
   */
  public data: UserTaskConfig;
  /**
   * The token payload the UserTask got suspended with.
   */
  public tokenPayload: any;
}
