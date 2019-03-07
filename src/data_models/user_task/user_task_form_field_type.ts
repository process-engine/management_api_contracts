/**
 * Determines the type of a UserTasks FormField.
 */
export enum UserTaskFormFieldType {
  /**
   * The FormField is a boolean.
   */
  boolean = 'boolean',
  /**
   * The FormField is a date.
   */
  date = 'date',
  /**
   * The FormField is an enumeration.
   */
  enum = 'enum',
  /**
   * The FormField is long-type numerical.
   */
  long = 'long',
  /**
   * The FormField is a number.
   */
  number = 'number',
  /**
   * The FormField is a string.
   */
  string = 'string',
}
