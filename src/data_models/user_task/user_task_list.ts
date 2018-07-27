import {UserTaskList as ConsumerApiUserTaskList} from '@process-engine/consumer_api_contracts';

import {UserTask} from './user_task';

export class UserTaskList extends ConsumerApiUserTaskList {
  public userTasks: Array<UserTask> = [];
}
