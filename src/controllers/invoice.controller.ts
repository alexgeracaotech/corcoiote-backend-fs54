import type { Request, Response } from 'express';
import { findAllInvoices } from '../services/invoice.service.ts';
import type { Page } from '../types.ts';

export function getAllInvoices(request: Request, response: Response): void {
  const page = request.query.page as unknown as Page;

  const invoices = findAllInvoices(page);

  response.status(200).json(invoices);
}
