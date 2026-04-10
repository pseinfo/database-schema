# @pseinfo/database-schema

TypeScript type definitions for the [@pseinfo database](https://github.com/pseinfo/database).

[![npm version](https://img.shields.io/npm/v/@pseinfo/database-schema.svg)](https://npmjs.com/@pseinfo/database-schema)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/pseinfo/database-schema/blob/master/LICENSE)

Visit [technical documentation](https://pseinfo.github.io/database-schema) for detailed information on the architecture and design decisions. This package provides strict TypeScript typing and a generated JSON schema for building and querying the pseinfo chemistry database.

## Architecture & Structure

The schema defines a central `Database` type composed of major scientific entities. To maintain consistency, properties are organized into reusable **Collections**.

### Collections

Collections gather related properties from various scientific data sets:
- **`DescriptiveCollection`**: Names, symbols, appearances, discovery information, web links.
- **`PhysicsCollection`**: Densities, temperatures, thermodynamics, states of matter, mechanics.
- **`ChemistryCollection`**: Molar masses, electronegativity, solubilities, oxidation states.
- **`SafetyCollection`**: GHS pictograms, hazard statements, toxicologies.
- **`AtomicsCollection`** & **`NuclearCollection`**: Deep atomic structures, electron configurations, and nuclear models.

### Values & Properties

Numerical values are strictly tracked via generic types like `NumberProperty<Quantity, Condition>`. This ensures you can explicitly store exact physical conditions (e.g., "Density at 20 °C") alongside the raw value, its unit of measurement, confidence rating, and statistical uncertainty. 

## Supported Entities

### Elements

Chemical elements of the periodic table (`Database['elements']`).
Provides datasets encompassing everything from atomics and basic physics to element classifications.

### Compounds

Chemical compounds and molecules (`Database['compounds']`).
Extends elements by introducing stoichiometric data, bonding features, functional groups, and structure identifiers (e.g., SMILES, InChI).

### Minerals

Naturally occurring minerals and mineraloids (`Database['minerals']`).
Features precise crystal habits, geological classifications (using established systems like Strunz), and specialized physical traits (such as Cleavage, Tenacity, or Luster).

### Nuclides

Nuclear isotopes and metastable states (`Database['nuclides']`).
Groups nuclides by element and traces down to specific nucleon combinations to hold their respective binding energies, half-lives, exact decay channels, and specific isomer transitions.

## Using the JSON Schema

A comprehensive JSON Draft-07 schema is bundled in `src/schema.json`. While primarily built for TypeScript validity checks and IDE auto-completion, the generated JSON schema enables runtime data-validation environments across any programming language interacting with the PSEinfo ecosystem.
