/**
 * Describes the payload that can be provided when finishing a UserTask.
 */
export class UserTaskResult {
  /**
   * Contains a result set for the UserTasks FormFields.
   */
  public formFields: {
    [fieldId: string]: any,
  };
}
