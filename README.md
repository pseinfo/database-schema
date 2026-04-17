# Periodic Table Database Schema

[![npm version](https://img.shields.io/npm/v/@pseinfo/database-schema?style=flat-square)](https://npmjs.com/@pseinfo/database-schema)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/pseinfo/database-schema/blob/master/LICENSE)
[![Schema](https://img.shields.io/badge/Schema-JSON-blue?style=flat-square)](https://unpkg.com/@pseinfo/database-schema/src/schema.json)

Strict TypeScript definitions and JSON Schema for structured representation of chemical elements, minerals, nuclides, mixtures, and compounds used by the [periodic table database](https://github.com/pseinfo/database).

Visit [technical documentation](https://pseinfo.github.io/database-schema) for in-depth insights into the schema architecture.

## Schema Architecture

The `@pseinfo/database-schema` is designed as a modular, three-tier architecture that ensures both strict type safety and scientific flexibility.

At the core, the **abstract layer** defines the fundamental behavior of scientific data, including measurements, uncertainties, and experimental conditions.

Building upon this, the **collection layer** aggregates these properties into thematic modules such as atomic physics, thermodynamics, and crystallographic analysis.

Finally, the **entity layer** composes these collections into complete models for elements, compounds, minerals, and isotopes, providing a unified structure that remains consistent across different chemical domains.

## The Scientific Property Model

A central principle of the schema is the encapsulation of data within a robust **property model**. Instead of documenting values as isolated primitives, every measurement is treated as a multidimensional object. This includes the quantitative value itself—supporting single points, arrays, or coupled numeric ranges—the specific scientific unit linked to a global registry, and the associated experimental metadata.

Experimental conditions like temperature and pressure are natively supported as context for every property, while a citation system ensures that every data point can be traced back to its original reference in the scientific literature.

## Data Sovereignty and Registries

The schema promotes data integrity through centralized registries for physical quantities and academic references. The **unit registry** provides a strictly typed framework for dimensions and prefixes, ensuring that physical properties like molar mass or magnetic susceptibilities are always represented with correct SI-compliant symbols.

Complementing this, the **reference registry** manages the bibliography of the entire database, allowing for a deduplicated and verifiable chain of custody for all scientific information.

## Integrated Entities

The database is organized into distinct scientific domains, each with specialized classification systems.

**Elements** are categorized by periodic table positioning and electronic structure, while **compounds** and **minerals** utilize hierarchical bonding and geological taxonomies such as IMA and Strunz. **nuclides** are modeled through an extensive decay network including energy levels and transition probabilities. **mixtures** are classified by their physical homogeneity and state of dispersion, covering everything from simple solutions to complex aerosols.

## Package Composition

The package provides the complete set of TypeScript definitions and JSON Schema for Draft-07 compliance, allowing for runtime validation in heterogeneous environments.

Developers have access to the full suite of internal enums, utility types, and the high-level structural model, enabling the integration of chemical data into specialized applications with absolute structural certainty.

## License

This project is licensed under the MIT License; see the [LICENSE](LICENSE) file for details.  
Copyright © 2026 PSEInfo by Paul Köhler (komed3). All rights reserved.
