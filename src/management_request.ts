import {Request} from 'express';
import {ManagementContext} from './management_context';

/**
 * Extends the base HttpRequest object to include content exlusive to the management api.
 */
export interface ManagementRequest extends Request {
  /**
   * Contains the user specific context with which a user is performing requests against the api.
   */
  managementContext: ManagementContext;
}
