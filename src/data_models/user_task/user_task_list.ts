import {UserTaskList as ConsumerApiUserTaskList} from '@process-engine/consumer_api_contracts';

import {UserTask} from './user_task';

/**
 * Describes a list of UserTasks.
 */
export class UserTaskList extends ConsumerApiUserTaskList {
  /**
   * The UserTask list.
   */
  public userTasks: Array<UserTask> = [];
}
