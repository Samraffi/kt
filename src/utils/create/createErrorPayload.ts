import { createTypeMessagePayload } from "./createTypeMessagePayload";

export const createErrorPayload = (message: string) =>
  createTypeMessagePayload("error", true, message);
