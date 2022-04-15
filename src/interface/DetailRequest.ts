import { Request } from "express";

export interface DetailRequest extends Request {
  id: string;
}
