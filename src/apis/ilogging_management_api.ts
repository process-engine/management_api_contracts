import {IIdentity} from '@essential-projects/iam_contracts';

import {LogEntry} from '../data_models/logging/index';

/**
 * The ILoggingManagementApi is used to read logs for ProcessModels.
 */
export interface ILoggingManagementApi {

  /**
   * Retrieves the logs for a specific ProcessModel.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of ProcessModel for which to retrieve the
   *                             logs.
   * @param   correlationId      Optional: If provided, only the logs for the given
   *                             Correlation are returned.
   * @returns                    A list of log entries.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getProcessModelLog(identity: IIdentity, processModelId: string, correlationId?: string): Promise<Array<LogEntry>>;

  /**
   * Retrieves the logs for a specific ProcessInstance.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel for which to retrieve the
   *                             logs.
   * @param   processInstance    The ID of the ProcessInstance for which to retrieve the
   *                             logs.
   * @returns                    A list of log entries.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getProcessInstanceLog(identity: IIdentity, processModelId: string, processInstanceId: string): Promise<Array<LogEntry>>;
}
