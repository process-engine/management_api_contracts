import {UserTask as ConsumerApiUserTask} from '@process-engine/consumer_api_contracts';

import {UserTaskConfig} from './user_task_config';

export class UserTask extends ConsumerApiUserTask {
  public data: UserTaskConfig;
}
