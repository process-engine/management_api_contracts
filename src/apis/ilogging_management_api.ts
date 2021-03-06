import {IIdentity} from '@essential-projects/iam_contracts';

import {LogEntryList} from '../data_models/logging/index';

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
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of log entries.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getProcessModelLog(
    identity: IIdentity,
    processModelId: string,
    correlationId?: string,
    offset?: number,
    limit?: number,
  ): Promise<LogEntryList>;

  /**
   * Retrieves the logs for a specific ProcessInstance.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel for which to retrieve the
   *                             logs.
   * @param   processInstance    The ID of the ProcessInstance for which to retrieve the
   *                             logs.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of log entries.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getProcessInstanceLog(
    identity: IIdentity,
    processModelId: string,
    processInstanceId: string,
    offset?: number,
    limit?: number,
  ): Promise<LogEntryList>;
}
