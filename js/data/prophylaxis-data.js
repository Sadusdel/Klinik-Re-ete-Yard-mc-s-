// Domain data only. Calculation and UI code must not live in this file.
export const prophylaxisData = Object.freeze({
  adult: {
    oral: [],
    parenteral: [],
  },
  child: {
    oral: [],
    parenteral: [],
  },
});

export const PROPHYLAXIS_WINDOW_MINUTES = Object.freeze({
  min: 30,
  max: 60,
});
