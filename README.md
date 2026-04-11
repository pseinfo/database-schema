# Periodic Table Database Schema

[![npm version](https://img.shields.io/npm/v/@pseinfo/database-schema?style=flat-square)](https://npmjs.com/@pseinfo/database-schema)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/pseinfo/database-schema/blob/master/LICENSE)
[![Schema](https://img.shields.io/badge/Schema-JSON-blue?style=flat-square)](https://unpkg.com/@pseinfo/database-schema/src/schema.json)

Strict TypeScript definitions and JSON Schema for structured representation of chemical elements, minerals, nuclides, and compounds used by the [periodic table database](https://github.com/pseinfo/database).

Visit [technical documentation](https://pseinfo.github.io/database-schema) for in-depth insights into the schema architecture.

## Scientific Design Principles

This model is designed to capture complexity of accurate chemical and physical properties found in high-level reference materials (e.g., in the CRC Handbook, the IMA mineralogical catalogs, and the ENSDF nuclide databases).

Theoretical and experimental values are tightly coupled with their context:

- **Unit System**: Features a robust unit system with validation, base units, conversion factors, and automatic prefix handling.
- **Physical Conditions**: Properties are explicitly bound to measurement conditions (e.g., standard temperature & pressure, variable temperatures, or specific concentrations).
- **Measurement Uncertainty**: Integration of absolute, relative, and asymmetric uncertainties (`+X`, `-Y`).
- **References**: Values optionally map to explicit BibTeX-like reference arrays tracking the scientific sourcing.
- **Data Verification**: Enforced distinction between theoretical, empirical, measured, and calculated values.

## Architectural Model

The core `Database` composite organizes entities into standardized components. Information is segmented into decoupled, theoretically profound `Collections`.

### Fundamental Collections

- **Descriptive Collection**: Centralization of spatial registries, CAS, crystallographic mappings (Pearson, Strunz systems), media, and historical context.
- **Physics Collection**: Multi-state modeling encompassing thermal (heat, thermodynamic constants), mechanistic (elasticity, hardness), electromagnetic, optic (birefringence, spatial refraction, optical rotation, dichroism), and acoustic phenomena.
- **Chemistry Collection**: Acid/base behaviors (including complex Hard/Soft-Acid-Base theory, pKa, pKb, isoelectric point), solubility constants, and a high-resolution map of over 10 different electronegativity scales (Pauling, Mulliken, Allen, Nagle, etc.).
- **Atomics Collection & Nuclear Collection**: Precise structural shell models, exact ionization potentials, mass excesses, isomeric transition energies, Q-values of decay chains, and nuclear cross-sections (fission, thermal resonance absorption).
- **Safety Collection**: Codification of GHS, WHMIS, ADR, UN numbers, NFPA topologies, and measured toxicity domains.
- **Composition Collection**: Abstract data structures for representing chemical compositions for compounds and minerals.

## Entity Schemas

### Elements

Standard definitions extending physics, atomics, and baseline phase properties. Accommodates multiple allotropes via nested state boundaries. Indexed by their symbols.

### Compounds

Classifies compounds by their chemical composition and structure. Includes descriptive, classification, composition, physics, chemistry, and safety collections. Supported sub-forms include amorphous models, polymorphs, and molecular configurations. Indexed by a unique identifier.

### Minerals

Geological substance classifications compliant with IMA status rules, mapping habits, cleavage/fracture planes, luminescence, inclusions, specific alterations, and advanced Strunz / Dana systematic indices. Entity includes generic collections, specialized properties and forms. Indexed by a unique identifier.

### Nuclides

Describes specific properties of nuclides (e.g., binding energy, NMR characteristics, half-lives, and decay products). Indexed by element symbol and nuclide identifiers with an optional metastable state suffix.

A complete index over neutron and proton numbers is implemented, along with pre-calculated decay chains for all nuclides and their decay products.

## Runtime Validation & Usage

The project is written in TypeScript and generates a JSON Schema (Draft-07) from the database definitions.

The schema is used to validate the database and ensure strict API compliance within the [@pseinfo](https://github.com/pseinfo) architecture across isolated programming stacks.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.  
Copyright © 2025–2026 Paul Köhler (komed3). All rights reserved.
