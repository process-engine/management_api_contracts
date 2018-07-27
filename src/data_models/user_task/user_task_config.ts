import {UserTaskConfig as ConsumerApiUserTaskConfig} from '@process-engine/consumer_api_contracts';

import {UserTaskFormField} from './user_task_form_field';

export class UserTaskConfig extends ConsumerApiUserTaskConfig {
  public formFields: Array<UserTaskFormField> = [];
}
