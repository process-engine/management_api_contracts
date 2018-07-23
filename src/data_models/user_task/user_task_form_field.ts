import {UserTaskFormFieldType} from './user_task_form_field_type';

export class UserTaskFormField {
  public id: string;
  public type: UserTaskFormFieldType;
  public label: string;
  public defaultValue?: any;
  public preferredControl?: string;
}
