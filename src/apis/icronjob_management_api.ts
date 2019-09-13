import {IIdentity} from '@essential-projects/iam_contracts';

import {CronjobConfiguration, CronjobHistoryEntry} from '../data_models/cronjob/index';

/**
 * The ICronjobManagementApi is used to query cronjobs from the ProcessEngine.
 */
export interface ICronjobManagementApi {

  /**
   * Retrieves a list of all active cronjobs that the given identity is allowed
   * to see.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of cronjobs.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getAllActiveCronjobs(identity: IIdentity, offset?: number, limit?: number): Promise<Array<CronjobConfiguration>>;

  /**
   * Returns the Cronjob execution history for the given ProcessModel.
   * Can optionally be filtered by a StartEventId as well.
   *
   * @async
   * @param   identity       The executing users identity.
   * @param   processModelId The ID of the ProcessModel for which to get the
   *                         cronjob history.
   * @param   startEventId   Optional: The ID of the StartEvent for which to
   *                         get the cronjob history.
   * @param   offset         Optional: The number of records to skip.
   * @param   limit          Optional: The max. number of records to get.
   * @returns              A list of matching cronjobs.
   */
  getCronjobExecutionHistoryForProcessModel(
    identity: IIdentity,
    processModelId: string,
    startEventId?: string,
    offset?: number,
    limit?: number,
  ): Promise<Array<CronjobHistoryEntry>>;

  /**
   * Returns the Cronjob execution history for the given crontab.
   *
   * @async
   * @param   identity The executing users identity.
   * @param   crontab  The crontab for which to get the execution history.
   * @param   offset   Optional: The number of records to skip.
   * @param   limit    Optional: The max. number of records to get.
   * @returns        A list of matching cronjobs.
   */
  getCronjobExecutionHistoryForCrontab(identity: IIdentity, crontab: string, offset?: number, limit?: number): Promise<Array<CronjobHistoryEntry>>;
}
