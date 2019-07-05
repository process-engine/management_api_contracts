import {IIdentity} from '@essential-projects/iam_contracts';

import {CronjobConfiguration} from '../data_models/cronjob/index';

/**
 * The ICronjobManagementApi is used to query cronjobs from the ProcessEngine.
 */
export interface ICronjobManagementApi {

  /**
   * Retrieves a list of all active cronjobs that the given identity is allowed
   * to see.
   *
   * @async
   * @param identity             The requesting users identity.
   * @returns                    A list of cronjobs.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getAllActiveCronjobs(identity: IIdentity): Promise<Array<CronjobConfiguration>>;
}
