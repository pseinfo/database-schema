# Periodic Table Database Schema

[![npm version](https://img.shields.io/npm/v/@pseinfo/database-schema?style=flat-square)](https://npmjs.com/@pseinfo/database-schema)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](https://github.com/pseinfo/database-schema/blob/master/LICENSE)

Strict TypeScript definitions for structured representation of chemical elements, minerals, nuclides, mixtures, and compounds used by the [periodic table database](https://github.com/pseinfo/database).

Visit [technical documentation](https://pseinfo.github.io/database-schema) for in-depth insights into the schema architecture.

## Schema Architecture

The `@pseinfo/database-schema` is designed as a modular, five-tier architecture that ensures both strict type safety and scientific flexibility.

1. **Abstract layer:** Defines the fundamental behavior of scientific data, including measurements, uncertainties, and experimental conditions.
2. **Collection layer:** Aggregates properties into thematic modules such as atomic physics, thermodynamics, and crystallographic analysis.
3. **Data layer:** Provides the "raw" scientific content (e.g., `ElementData`), designed for manual maintenance without system-generated metadata.
4. **Entity layer:** Enriches the data with automated `@metadata` (hashes, timestamps, versions) to create complete database records (e.g., `Element`).
5. **Domain layer:** Composes these entities into global dictionaries (e.g., `ElementDomain`), providing a unified structure consistent across all domains.

## Scientific Property Model

A central principle of the schema is the encapsulation of data within a robust **property model**. Instead of documenting values as isolated primitives, every measurement is treated as a multidimensional object. This includes the quantitative value itself—supporting single points, arrays, or coupled numeric ranges—the specific scientific unit linked to a global registry, and the associated experimental metadata.

Experimental conditions like temperature and pressure are natively supported as context for every property, while a citation system ensures that every data point can be traced back to its original reference in the scientific literature.

## Registries

The schema promotes data integrity through centralized registries for physical quantities, media blobs, academic references, organizations and people.

The **unit registry** provides a strictly typed framework for dimensions and prefixes, ensuring that physical properties always represented with correct SI-compliant symbols. **Blobs** handle the storage of large media files (e.g., structure files, spectral data) in a way that is decoupled from the core database, allowing for efficient management and retrieval without bloating the primary data records. The **reference registry** manages the bibliography of the entire database, allowing for a deduplicated and verifiable chain of custody for all scientific information.

**Person** and **organization registries** maintain the metadata of scientists and institutions involved in discovery, research, and data curation, providing a historical and social context for the scientific data.

## Database Entities

The database is organized into distinct scientific domains, each with specialized classification systems.

**Elements** are categorized by periodic table positioning and electronic structure, while **compounds** and **minerals** utilize hierarchical bonding and geological taxonomies such as IMA and Strunz. **Nuclides** are modeled through an extensive decay network including energy levels and transition probabilities. **Mixtures** are classified by their physical homogeneity and state of dispersion, covering everything from simple solutions to complex aerosols.

## Factory Types

To construct and maintain the database, the schema provides dedicated **factory types**. These serve as internal helper types that act as build-time "contracts" for individual data files. They ensure that every entry—whether it's a chemical element, a complex mixture, or a radioactive nuclide—is perfectly aligned with the schema's requirements before the database is automatically generated.

Using these factories, developers benefit from:
- **Strict validation:** Ensuring that primary identifiers (symbols, mass numbers, units) are valid and correctly typed.
- **Structural integrity:** Guaranteeing that the data object conforms exactly to the expected entity model.
- **Developer experience:** Providing IDE integration with autocomplete and error checking during data entry.

Example:

```typescript
import type { ElementFactory } from '@pseinfo/database-schema/model/domain/element';
import { ElementSymbol } from '@pseinfo/database-schema/enum/science/element';
import { DomainType } from '@pseinfo/database-schema/enum/system/domain';

export default ( {
  type: DomainType.ELEMENT,
  elementSymbol: ElementSymbol.H,
  data: {
    classification: {
      symbol: 'H',
      atomicNumber: 1,
      // ...
    },
    descriptive: {
        // ...
    }
  }
} ) as const satisfies ElementFactory;
```

## Package

The package provides the complete set of TypeScript definitions, allowing for validation checks in heterogeneous environments.

Developers have access to the full suite of internal enums, utility types, and the high-level structural model, enabling the integration of chemical data into specialized applications with absolute structural certainty.

## License

This project is licensed under the MIT License; see the [LICENSE](LICENSE) file for details.  
Copyright © 2026 Periodic Table by Paul Köhler (komed3). All rights reserved.
