export interface DirectionDispatcher {
  run(callback: () => void): void;

  throw(callback: () => void): void;
}
