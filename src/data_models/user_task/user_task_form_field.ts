import {UserTaskFormField as ConsumerApiUserTaskFormField} from '@process-engine/consumer_api_contracts';

import {UserTaskEnumValue} from './user_task_enum_value';
import {UserTaskFormFieldType} from './user_task_form_field_type';

/**
 * Contains information about a UserTasks form field.
 */
export class UserTaskFormField extends ConsumerApiUserTaskFormField {
  /**
   * The type of the form field.
   */
  public type: UserTaskFormFieldType;
  /**
   * Optional: If the form field is an enumeration, this will contain the values for that enumeration.
   */
  public enumValues?: Array<UserTaskEnumValue>;
}
