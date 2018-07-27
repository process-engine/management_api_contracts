/**
 * Contains information about the requesting user.
 */
export class ManagementContext {
  /**
   * Contains the users identity. This is usually an auth token, created by an external authority.
   */
  public identity: string;
  /**
   * Optional: Contains the users language settings.
   */
  public internationalization?: string;
  /**
   * Optional: Contains the users locale settings.
   */
  public localization?: string;
}
