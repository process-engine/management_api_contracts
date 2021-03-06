import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Describes a HTTPController for managing HttpRequests related to KPIs.
 */
export interface IKpiHttpController {

  /**
   * Gets the FlowNodeRuntimeInformation for every FlowNode in a given
   * ProcessModel ID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getRuntimeInformationForProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets the FlowNodeRuntimeInformation for a specific FlowNode inside a
   * ProcessModel.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getRuntimeInformationForFlowNode(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets all active Tokens for a given ProcessModelId.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getActiveTokensForProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets all active ProcessTokens for a given CorrelationId and ProcessModelId.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getActiveTokensForCorrelationAndProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets all active ProcessTokens for a given ProcessInstanceId.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getActiveTokensForProcessInstance(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets all active Tokens for a specific FlowNode inside a ProcessModel.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getActiveTokensForFlowNode(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
