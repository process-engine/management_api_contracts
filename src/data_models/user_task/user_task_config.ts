import {UserTaskFormField} from './user_task_form_field';

/**
 * Contains information about a UserTasks configuration.
 */
export class UserTaskConfig {
  public formFields: Array<UserTaskFormField> = [];
  public preferredControl?: string;
}
