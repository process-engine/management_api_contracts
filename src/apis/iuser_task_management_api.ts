import {IIdentity} from '@essential-projects/iam_contracts';

import {UserTaskList, UserTaskResult} from '../data_models/user_task/index';

/**
 * The IUserTaskManagementApi is used to retreive and manage UserTasks.
 */
export interface IUserTaskManagementApi {
  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
  *                        or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel was not found,
   *                       or the user is not authorized to see it.
   */
  getUserTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to a specific
   * correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the correlation for which to retrieve
   *                       the UserTasks.
   * @returns              A Promise, which resolves the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the correlation was not found,
   *                       or the user is not authorized to see it.
   */
  getUserTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<UserTaskList>;

  /**
   * Retrieves a list of all suspended UserTasks belonging to an instance of a specific ProcessModel within a correlation.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param correlationId  The ID of the correlation for which to retrieve the
   *                       UserTasks.
   * @param processModelId The ID of the ProcessModel for which to retrieve the
   *                       UserTasks.
   * @returns              A Promise, which resolves with the retrieved UserTasks,
   *                       or rejects an error, in case the request failed.
   *                       This can happen, if the ProcessModel or correlation
   *                       were not found, or the user is not authorized to see either.
   */
  getUserTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<UserTaskList>;

  /**
   * Finishes a UserTask belonging to an instance of a specific ProcessModel
   * within a correlation.
   *
   * @async
   * @param identity           The requesting users identity.
   * @param processInstanceId  The ID of the ProcessInstance for which to finish
   *                           a UserTask.
   * @param correlationId      The ID of the correlation for which to finish a
   *                           UserTask.
   * @param userTaskInstanceId The instance ID of UserTask to finish.
   * @param userTaskResult     Contains a set of results with which to finish
   *                           the UserTask.
   * @returns                  A Promise, which resolves without content,
   *                           or rejects an error, in case the request failed.
   *                           This can happen, if the UserTask, ProcessModel or
   *                           correlation were not found,
   *                           or the user is not authorized to see either.
   */
  finishUserTask(identity: IIdentity,
                 processInstanceId: string,
                 correlationId: string,
                 userTaskInstanceId: string,
                 userTaskResult: UserTaskResult): Promise<void>;
}
