import {UserTaskEnumValue} from './user_task_enum_value';
import {UserTaskFormFieldType} from './user_task_form_field_type';

/**
 * Contains information about a UserTasks FormField.
 */
export class UserTaskFormField {
  public id: string;
  public type: UserTaskFormFieldType;
  public enumValues?: Array<UserTaskEnumValue>;
  public label: string;
  public defaultValue?: any;
  public preferredControl?: string;
}
