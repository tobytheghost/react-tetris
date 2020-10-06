export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Create new array using stage height and width
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
