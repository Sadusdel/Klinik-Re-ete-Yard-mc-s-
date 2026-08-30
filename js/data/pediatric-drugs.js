// Pediatric commercial-preparation catalogue.
// Populate from the verified working implementation during migration.
// Keep generic molecule, commercial name, strength and formulation as separate fields.
export const pediatricDrugs = Object.freeze([]);

export function findPediatricDrug(id) {
  return pediatricDrugs.find((drug) => drug.id === id) ?? null;
}
