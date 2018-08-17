import {IManagementApiService} from './imanagement_api_service';

/**
 * This interface wraps the Accessor that the ManagementApiClientService will use to connect to an internal or external ProcessEngine.
 * It is derived from IManagementApiService, because the Accessor will have to perform the same type of requests as the Service,
 * regardless of which type of ProcessEngine is used.
 */
export interface IManagementApiAccessor extends IManagementApiService {}
