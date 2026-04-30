/**
 * @file enum/system/organization.ts
 * @description Defines enums for classifying scientific, academic, and industrial organizations.
 */

/**
 * Categories of institutions and bodies involved in scientific research and administration.
 */
export enum OrganizationType {
  /** Academic institution providing higher education and research facilities. */
  UNIVERSITY = 'university',
  /** Specialized research body often focused on specific scientific disciplines. */
  INSTITUTE = 'institute',
  /** Commercial entity involved in chemical production, instrumentation, or research. */
  COMPANY = 'company',
  /** Dedicated facility for experimental testing and analysis. */
  LABORATORY = 'laboratory'
};
