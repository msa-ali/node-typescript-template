import logger from "./services/logger.js";

export function add(a:number, b:number): number {
  return a + b;
}

logger.info("Result: %d", add(1,1100));
