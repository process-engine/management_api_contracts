import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Describes a HTTPController for managing HttpRequests related to Cronjobs.
 */
export interface ICronjobHttpController {

  /**
   * Retrieves a list of all active cronjobs that the given identity is allowed
   * to see.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getAllActiveCronjobs(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Returns the Cronjob execution history for the given ProcessModel.
   * Can optionally be filtered by a StartEventId as well.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getCronjobExecutionHistoryForProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Returns the Cronjob execution history for the given crontab.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getCronjobExecutionHistoryForCrontab(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
