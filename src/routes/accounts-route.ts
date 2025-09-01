/**
 * @module accounts
 * @description Express router module for handling account-related endpoints
 */

import { getAccount } from "@/models/accounts-model";
import { Router } from "express";

const router = Router();

/**
 * GET /:accountId - Retrieves account information by ID
 * @route GET /:accountId
 * @param {string} req.params.accountId - The unique identifier of the account
 * @returns {Account} 200 - The account information
 * @returns {Error} 404 - Account not found
 */
router.get("/:accountId", (req, res) => {
  const account = getAccount(req.params.accountId);
  if (!account) {
    return res.status(404).json({
      code: "ACCOUNT_NOT_FOUND",
      message: "Account not found",
    });
  }
  return res.json(account);
});

export default router;
