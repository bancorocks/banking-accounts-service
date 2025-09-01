/** @summary Response payload for account creation */
export interface OpenAccountResponse {
  /** @summary UUID v4 account identifier */
  accountId: string;
  /** @summary 6-digit account number */
  number: string;
  /** @summary Optional 4-digit branch number */
  branch?: string;
  /** @summary Account holder's name */
  name: string;
  /** @summary Account status (only 'active' supported) */
  status: "active";
  /** @summary ISO 8601 creation timestamp */
  createdAt: string;
}

/** @summary Full account details including sensitive data */
export interface Account extends OpenAccountResponse {
  /** @summary CPF document number (11 digits) */
  document: string;
  /** @summary Optional product code identifier */
  productCode?: string;
  /** @summary Optional ISO 4217 currency code */
  currency?: string;
}
