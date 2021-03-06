import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Describes a HTTPController for managing HttpRequests related to Correlations.
 */
export interface ICorrelationHttpController {

  /**
   * Retrieves a list of all Correlations that the given identity is allowed
   * to see.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getAllCorrelations(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves a list of all active Correlations that the given identity is
   * allowed to see.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getActiveCorrelations(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves the Correlation with the given ID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getCorrelationById(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves all Correlations in which the ProcessModel with the given ID was
   * executed.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getCorrelationsByProcessModelId(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves a ProcessInstance by its ID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessInstanceById(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets a list of all ProcessInstances that run in the given Correlation.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessInstancesForCorrelation(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets a list of all ProcessInstances for the given ProcessModel.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessInstancesForProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Gets a list of all ProcessInstances that are in a matching state.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessInstancesByState(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
