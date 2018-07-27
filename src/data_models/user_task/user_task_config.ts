import {UserTaskConfig as ConsumerApiUserTaskConfig} from '@process-engine/consumer_api_contracts';

import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a user tasks configuration.
 */
export class UserTaskConfig extends ConsumerApiUserTaskConfig {
  /**
   * A list of accessible form fields for the user task.
   */
  public formFields: Array<UserTaskFormField> = [];
}
