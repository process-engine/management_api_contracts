import {HttpRequestWithIdentity} from '@essential-projects/http_contracts';

import {Response} from 'express';

/**
 * Describes a HTTPController for managing HttpRequests related to ProcessModels.
 */
export interface IProcessModelHttpController {

  /**
   * Retrieves a list of all ProcessModels that the requesting user is
   * authorized to see.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessModels(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves a ProcessModel by its ID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getProcessModelById(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves a ProcessModel by a ProcessInstanceID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a HTTP response.
   */
  getProcessModelByProcessInstanceId(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Retrieves a list of all StartEvents belonging to a specific ProcessModel.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  getStartEventsForProcessModel(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Updates a ProcessDefinition by its name.
   * If it doesn't exist yet, it will be created.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  updateProcessDefinitionsByName(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Deletes a ProcessDefinition by its ID.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  deleteProcessDefinitionsByProcessModelId(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Starts a new instance of a ProcessModel with a specific ID.
   * Depending on the type of callback used, this function will resolve either
   * immediately after the ProcessInstance was started, or after it has reached
   * an EndEvent.
   * This can either be a specific EndEvent, or the first EndEvent encountered
   * during execution.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  startProcessInstance(request: HttpRequestWithIdentity, response: Response): Promise<void>;

  /**
   * Terminates a ProcessInstance.
   *
   * @async
   * @param request  The HttpRequest object containing all request infos.
   * @param response The HttpResponse object to use for sending a Http response.
   */
  terminateProcessInstance(request: HttpRequestWithIdentity, response: Response): Promise<void>;
}
