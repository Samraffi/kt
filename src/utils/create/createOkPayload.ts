import { createTypeMessagePayload } from "./createTypeMessagePayload";

export const createOkPayload = (message: string) =>
  createTypeMessagePayload("ok", true, message);
