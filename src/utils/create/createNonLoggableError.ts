import { createTypeMessagePayload } from "./createTypeMessagePayload";

export const createNonLoggableError = (message: string) =>
  createTypeMessagePayload("error", false, message);
