import {Request} from 'express';
import {ManagementContext} from './management_context';

export interface ManagementRequest extends Request {
  managementContext: ManagementContext;
}
