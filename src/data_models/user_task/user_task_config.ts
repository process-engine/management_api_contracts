import {UserTaskConfig as ConsumerApiUserTaskConfig} from '@process-engine/consumer_api_contracts';

import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a UserTasks configuration.
 */
export class UserTaskConfig extends ConsumerApiUserTaskConfig {
  /**
   * A list of accessible form fields for the UserTask.
   */
  public formFields: Array<UserTaskFormField> = [];
}
