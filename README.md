# Database Schema

TypeScript type definitions for the [@pseinfo database](https://github.com/pseinfo/database).

This package provides a comprehensive and type-safe schema for representing chemical element data, references, and units. It is designed to facilitate the development of applications that require detailed and structured chemical information within the [@pseinfo](https://github.com/pseinfo) ecosystem.

**Status**: Elements only. Compounds, nuclides, minerals planned for later versions.

## Architecture

Root entities:

```typescript
import type { Database } from '@pseinfo/database-schema';

type Database = {
    elements: Element;
    references: ReferenceCollection;
    units: UnitCollection;
};
```

## Data Organization

### Elements

Each element, indexed by their symbol, contains:

- **Descriptive**: Registry IDs, structure formats, names, abundance, discovery, media, weblinks
- **Classification**: Block, group, period, properties, phase, occurrence, etc.
- **Physics**: 20+ property groups (temperature, enthalpy, mechanics, electricity, magnetism, optics, acoustics, viscosity)
- **Chemistry**: Electronegativity scales, acid/base, crystallography, bonding, solubility
- **Atomics**: Configuration, ionization energies, radii, NMR
- **Safety**: GHS, WHMIS, ADR, DOT, NFPA, toxicity
- **Forms**: Allotropes, phases, polymorphs

## Property System

Consistent metadata for all values:

```typescript
type Property< Q > = {
    value?: number | string | boolean | T[];
    range?: { lower: {...}, upper: {...} };
    unit?: [ PhysicalQuantity, string ];
    confidence?: 'measured' | 'calculated' | 'estimated' | 'theoretical' | 'experimental';
    uncertainty?: Uncertainty;
    conditions?: { [ k in PhysicalQuantity ]?: Value };
    references?: string[];
    note?: string;
};
```

## Collection Patterns

- **`Single< T >`** - Value or array
- **`Distinct< T >`** - Semantically marked single value
- **`Group< T >`** - Named groupings
- **`LangGroup< L, T >`** - Language variants

## References

BibTeX system: 15+ types (article, book, thesis, proceedings, etc.)

## Units

SI-based with conversion support. Quantum dimensions and physical quantities.

## Imports

```typescript
// Root
import type { Database, Element, ElementSymbol } from '@pseinfo/database-schema';

// Collections
import type { PhysicsCollection, ChemistryCollection, AtomicsCollection, SafetyCollection } from '@pseinfo/database-schema';

// Properties
import type { NumberProperty, ArrayProperty, RangeProperty, PrimitiveProperty } from '@pseinfo/database-schema';

// Uncertainty
import type { Uncertainty, AbsoluteUncertainty, RelativeUncertainty, AsymmetricalUncertainty } from '@pseinfo/database-schema';

// References & Units
import type { Reference, ReferenceCollection, PhysicalQuantity, UnitCollection } from '@pseinfo/database-schema';

// Utilities
import type { Collection, Single, Distinct, Group, LangGroup } from '@pseinfo/database-schema';

// Constants
import { ElementSymbol, ElementBlock, ElementSet, ElementGroup, Phase, CrystalStructure } from '@pseinfo/database-schema';
```

## Key Features

- **Type-Safe**: Advanced TypeScript (branded types, mapped types, generics)
- **Flexible**: Generic collections for varied data structures
- **Metadata-Rich**: Confidence, uncertainty, conditions, references per value
- **Standardized**: BibTeX, SI, GHS, NFPA, chemical identifiers
- **Extensible**: Forms for alternative representations (allotropes, etc.)
- **Multilingual**: Language-specific groups
