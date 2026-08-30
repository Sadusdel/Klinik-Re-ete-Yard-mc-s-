export const systemicConditions = Object.freeze([]);

export function getSystemicCondition(id) {
  return systemicConditions.find((condition) => condition.id === id) ?? null;
}
