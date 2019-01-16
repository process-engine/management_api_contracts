import {IIdentity} from '@essential-projects/iam_contracts';

import {Correlation} from '../data_models/correlation/index';

/**
 * The ICorrelationManagementApi is used to query correlations.
 */
export interface ICorrelationManagementApi {

  /**
   * Retrieves a list of all Correlations.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the correlation list,
   *                 or rejects an error, in case the request failed.
   */
  getAllCorrelations(identity: IIdentity): Promise<Array<Correlation>>;

  /**
   * Retrieves a list of all active Correlations.
   *
   * @async
   * @param identity The requesting users identity.
   * @returns        A Promise, which resolves with the correlation list,
   *                 or rejects an error, in case the request failed.
   */
  getActiveCorrelations(identity: IIdentity): Promise<Array<Correlation>>;

  /**
   * Retrieves the ProcessModels that were executed with the given Correlation.
   *
   * @async
   * @param identity      The requesting users identity.
   * @param correlationId The ID of the Correlation for which to get the
   *                      ProcessModels.
   * @returns             A Promise, which resolves with the ProcessModels,
   *                      or rejects an error, in case the request failed.
   * @throws              403, if the requesting User is forbidden to see the
   *                      ProcessModel.
   * @throws              404, if the ProcessModel was not found.
   */
  getCorrelationById(identity: IIdentity, correlationId: string): Promise<Correlation>;

  /**
   * Retrieves all Correlations in which the ProcessModel with the given ID was
   * executed.
   *
   * @async
   * @param identity       The requesting users identity.
   * @param processModelId The ID of the ProcessModel for which to get the
   *                       Correlations.
   * @returns              A Promise, which resolves with the Correlations,
   *                       or rejects an error, in case the request failed.
   * @throws               404, if no Correlation was found.
   */
  getCorrelationsByProcessModelId(identity: IIdentity, processModelId: string): Promise<Array<Correlation>>;

  /**
   * Retrieves the Correlation in which the given ProcessInstance was executed.
   *
   * @async
   * @param identity          The requesting users identity.
   * @param processInstanceId The ID of the ProcessModel for which to get the
   *                          Correlations.
   * @returns                 A Promise, which resolves with the Correlations,
   *                          or rejects an error, in case the request failed.
   * @throws                  404, if no Correlation was found.
   */
  getCorrelationByProcessInstanceId(identity: IIdentity, processInstanceId: string): Promise<Correlation>;
}
