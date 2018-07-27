import {UserTaskList as ConsumerApiUserTaskList} from '@process-engine/consumer_api_contracts';

import {UserTask} from './user_task';

/**
 * Describes a list of user tasks.
 */
export class UserTaskList extends ConsumerApiUserTaskList {
  /**
   * The user task list.
   */
  public userTasks: Array<UserTask> = [];
}
