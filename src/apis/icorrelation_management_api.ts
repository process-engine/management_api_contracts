import {IIdentity} from '@essential-projects/iam_contracts';

import {Correlation, CorrelationList} from '../data_models/correlation/index';

/**
 * The ICorrelationManagementApi is used to query correlations.
 */
export interface ICorrelationManagementApi {

  /**
   * Retrieves a list of all Correlations that the given identity is allowed
   * to see.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of Correlations.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getAllCorrelations(identity: IIdentity, offset?: number, limit?: number): Promise<CorrelationList>;

  /**
   * Retrieves a list of all active Correlations that the given identity is
   * allowed to see.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of active Correlations.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   */
  getActiveCorrelations(identity: IIdentity, offset?: number, limit?: number): Promise<CorrelationList>;

  /**
   * Retrieves the Correlation with the given ID.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   correlationId      The ID of the Correlation to get.
   * @returns                    The requested Correlation.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             Correlation.
   * @throws {NotFoundError}     If the Correlation was not found.
   */
  getCorrelationById(identity: IIdentity, correlationId: string): Promise<Correlation>;

  /**
   * Retrieves all Correlations in which the ProcessModel with the given ID was
   * executed.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processModelId     The ID of the ProcessModel for which to get the
   *                             Correlations.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    The requested Correlations.
   *                             Will be empty, if none are available.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessModel.
   * @throws {NotFoundError}     If the ProcessModel does not exist.
   */
  getCorrelationsByProcessModelId(identity: IIdentity, processModelId: string, offset?: number, limit?: number): Promise<CorrelationList>;

  /**
   * Retrieves the Correlation in which the given ProcessInstance was executed.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance for which to get the
   *                             Correlations.
   * @returns                    The requested Correlation.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {ForbiddenError}    If the user is not allowed to access the
   *                             ProcessInstance.
   * @throws {NotFoundError}     If the ProcessInstance does not exist.
   */
  getCorrelationByProcessInstanceId(identity: IIdentity, processInstanceId: string): Promise<Correlation>;
}
