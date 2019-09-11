import {IIdentity} from '@essential-projects/iam_contracts';

import {TaskList} from '../data_models/tasks/index';

/**
 * The ITaskManagementApi is used to retreive and manage Tasks.
 */
export interface ITaskManagementApi {

  /**
   * Retrieves a list of all suspended Tasks belonging to an instance of a
   * specific ProcessModel.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  processModelId      The ID of the ProcessModel for which to
   *                             retrieve the Tasks.
   * @returns                    A list of waiting Tasks for the given
   *                             ProcessModel.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   */
  getTasksForProcessModel(identity: IIdentity, processModelId: string): Promise<TaskList>;

  /**
   * Retrieves a list of all suspended Tasks belonging to an specific
   * ProcessInstance.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  processInstanceId   The ID of the ProcessInstance for which to
   *                             retrieve the Tasks.
   * @returns                    A list of waiting Tasks for the given
   *                             ProcessInstance.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessInstance.
   */
  getTasksForProcessInstance(identity: IIdentity, processInstanceId: string): Promise<TaskList>;

  /**
   * Retrieves a list of all suspended Tasks belonging to a specific
   * Correlation.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  correlationId       The ID of the Correlation for which to
   *                             retrieve the Tasks.
   * @returns                    A list of waiting Tasks for the given
   *                             Correlation.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             Correlation.
   */
  getTasksForCorrelation(identity: IIdentity, correlationId: string): Promise<TaskList>;

  /**
   * Retrieves a list of all suspended Tasks belonging to an instance of a
   * specific ProcessModel within a Correlation.
   *
   * @async
   * @param  identity            The requesting users identity.
   * @param  correlationId       The ID of the Correlation for which to retrieve the
   *                             Tasks.
   * @param  processModelId      The ID of the ProcessModel for which to retrieve the
   *                             Tasks.
   * @returns                    A list of waiting Tasks for the given
   *                             ProcessModel and Correlation.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             Correlation or the ProcessModel.
   */
  getTasksForProcessModelInCorrelation(identity: IIdentity, processModelId: string, correlationId: string): Promise<TaskList>;
}
