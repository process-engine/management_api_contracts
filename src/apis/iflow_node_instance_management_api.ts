import {IIdentity} from '@essential-projects/iam_contracts';

import {FlowNodeInstance} from '../data_models/flow_node_instance';

/**
 * The IFlowNodeInstanceManagementApi is used to retrieve and manage FlowNodeInstances.
 */
export interface IFlowNodeInstanceManagementApi {

  /**
   * Gets a list of all FlowNodeInstances that were executed for the given ProcessInstance.
   *
   * @async
   * @param   identity           The requesting users identity.
   * @param   processInstanceId  The ID of the ProcessInstance for which to get the FlowNodeInstances.
   * @param   offset             Optional: The number of records to skip.
   * @param   limit              Optional: The max. number of records to get.
   * @returns                    A list of retrieved FlowNodeInstances.
   * @throws {UnauthorizedError} If the given identity does not contain a
   *                             valid auth token.
   * @throws {NotFoundError}     If the ProcessInstance was not found.
   */
  getFlowNodeInstancesForProcessInstance(
    identity: IIdentity,
    processInstanceId: string,
    offset?: number,
    limit?: number,
  ): Promise<Array<FlowNodeInstance>>;
}
