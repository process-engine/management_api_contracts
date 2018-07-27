import {UserTaskFormField as ConsumerApiUserTaskFormField} from '@process-engine/consumer_api_contracts';

import {UserTaskFormFieldType} from './user_task_form_field_type';

export class UserTaskFormField extends ConsumerApiUserTaskFormField {
  public type: UserTaskFormFieldType;
}
