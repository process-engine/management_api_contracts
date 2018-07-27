import {UserTask as ConsumerApiUserTask} from '@process-engine/consumer_api_contracts';

import {UserTaskConfig} from './user_task_config';

/**
 * Describes a user task that belongs to an active correlation.
 */
export class UserTask extends ConsumerApiUserTask {
  /**
   * Contains information about the user tasks configuration, such as the form fields that can be addressed.
   */
  public data: UserTaskConfig;
}
