import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Describes a HTTPController for managing HttpRequests related to FlowNodeInstances.
 */
export interface IFlowNodeInstanceHttpController {

  /**
   * Gets a list of all FlowNodeInstances that were executed for the given ProcessInstance.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getFlowNodeInstancesForProcessInstance(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
