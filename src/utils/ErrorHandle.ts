import { NextFunction } from "express";

class BaseError extends Error {
  public readonly name: string;
  public readonly status: number;

  constructor(name: string, status: number, description: string) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.status = status;

    Error.captureStackTrace(this);
  }

  getStatusCode() {
    return this.status;
  }
}

export class APIError extends BaseError {
  constructor(
    name: string = "Internal Server Error",
    status = 500,
    description = "Internal Server Error"
  ) {
    super(name, status, description);
  }
}
