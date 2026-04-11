# @pseinfo/database-schema

Strict TypeScript definitions and JSON Schema for the structured representation of chemical elements, minerals, nuclides, and chemical compounds in the [@pseinfo database](https://github.com/pseinfo/database).

[![npm version](https://img.shields.io/npm/v/@pseinfo/database-schema.svg)](https://npmjs.com/@pseinfo/database-schema)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/pseinfo/database-schema/blob/master/LICENSE)

Visit the [technical documentation](https://pseinfo.github.io/database-schema) for in-depth insights into the schema architecture. This repository serves as reference model and standard for chemical, physical, and crystallographic data structures for the [periodic table](https://pse-info.de).

## Scientific Design Principles

This schema is engineered to encapsulate the true complexity of exact chemical and physical properties found in advanced laboratory reference materials (e.g. CRC Handbook, IMA mineralogical directories, ENSDF nuclide databases). 

Theoretical and experimental values are tightly coupled with their context:
1. **Physical Conditions**: Properties are explicitly bound to measurement conditions (e.g., standard temperature & pressure, variable temperatures, or specific concentrations).
2. **Measurement Uncertainty**: Integration of absolute, relative, and asymmetric uncertainties (`+X`, `-Y`), guaranteeing precision handling.
3. **References**: Values optionally map to explicit BibTeX-like reference arrays tracking the scientific sourcing.
4. **Data Verification**: Enforced distinction between theoretical, empirical, measured, and calculated values.

## Architectural Model

The core `Database` composite organizes entities into heavily standardized components. Information is segmented into decoupled, theoretically profound `Collections`.

### Fundamental Collections
- **`PhysicsCollection`**: Multi-state modeling encompassing thermal (heat, thermodynamic constants), mechanistic (elasticity, hardness), electromagnetic, optic (birefringence, spatial refraction, optical rotation, dichroism), and acoustic phenomena.
- **`ChemistryCollection`**: Acid/base behaviors (including complex Hard/Soft-Acid-Base theory, pKa, pKb, isoelectric point), solubility constants, and a high-resolution map of over 10 different electronegativity scales (Pauling, Mulliken, Allen, Nagle, etc.).
- **`AtomicsCollection` & `NuclearCollection`**: Precise structural shell models, exact ionization potentials, mass excesses, isomeric transition energies, Q-values of decay chains, and nuclear cross-sections (fission, thermal resonance absorption).
- **`DescriptiveCollection`**: Centralization of spatial registries, CAS, crystallographic mappings (Pearson, Strunz systems), media, and historical context.
- **`SafetyCollection`**: Rigorous codification of GHS, WHMIS, ADR, UN numbers, NFPA topologies, and measured toxicity domains.

## Entity Schemas

### Elements
Standard definitions extending physics, atomics, and baseline phase properties. Accommodates multiple allotropes via nested state boundaries.

### Compounds
Robust substance representations. Expands on base element traits by encoding stereoisomerism, stoichiometric mappings, functional group identification matrices, specific rotations, and distinct structural classifiers (SMILES, InChI). Supported sub-forms include amorphous models, polymorphs, and molecular configurations.

### Minerals
Geological substance classifications compliant with IMA status rules, mapping habits, cleavage/fracture planes, luminescence, inclusions, specific alterations, and advanced Strunz / Dana systematic indices.

### Nuclides
Extensive radio-isotope models. Traces complete mass permutations and metastable isomers (e.g. m, m1, m2), establishing absolute maps for binding energies, decay probability matrices, fractional branching ratios, and specific emitted radiation spectra.

## Runtime Validation & Usage

The project builds robust JSON Schemas formatted for Draft-07 directly from the strict TypeScript declarations. 
`src/schema.json` guarantees strict API conformance tests and acts as the validation foundation for the overall the [@pseinfo](https://github.com/pseinfo) architecture across isolated programming stacks.
