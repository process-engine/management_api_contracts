import {IManagementApi} from './imanagement_api';

/**
 * This interface wraps the Accessor that the ManagementApiClientService will
 * use to connect to an internal or external ProcessEngine.
 * It is derived from IManagementApi, because the Accessor will have to
 * perform the same type of requests as the Service,
 * regardless of which type of ProcessEngine is used.
 */
// tslint:disable-next-line:no-empty-interface
export interface IManagementApiAccessor extends IManagementApi {}
