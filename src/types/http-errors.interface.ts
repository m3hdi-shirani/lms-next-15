/* eslint-disable @typescript-eslint/no-empty-object-type */

interface ProblemDetails {
  title: string;
  status: number;
  detail?: string;
  errors?: Record<string, string[]>;
}

interface BadRequestError extends ProblemDetails {}

interface UnauthorizedError extends ProblemDetails {}

interface ValidationError extends ProblemDetails {}

interface NotFoundError extends ProblemDetails {}

interface UnhandledError extends ProblemDetails {}

interface NetworkError extends ProblemDetails {}

type ApiError =
  | BadRequestError
  | NetworkError
  | NotFoundError
  | UnhandledError
  | UnauthorizedError
  | ValidationError;

export type {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  ProblemDetails,
  UnauthorizedError,
  UnhandledError,
  ValidationError,
};
