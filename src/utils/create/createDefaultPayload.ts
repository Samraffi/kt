import { createTypeMessagePayload } from "./createTypeMessagePayload";

export const createDefaultPayload = (message: string) =>
  createTypeMessagePayload("default", true, message);
