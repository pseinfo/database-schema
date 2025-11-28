# Database Schema

TypeScript type definitions for the [@pseinfo database](https://github.com/pseinfo/database).

**Status:** Elements only. Compounds, nuclides, minerals planned for later versions.

## Architecture

The main `Database` type exposes all major entities (elements, chemical compounds, nuclides, etc.) as well as technically necessary components such as references (standardized citation management) and a flexible physical unit system.

### Core

The abstract kernel of this project involves type definitions of physical values, properties, and the structure of collections as a gathering of related properties.

Most entries are branded, which allows for validation at runtime, as well as pure type-based validity checks and auto-completion in IDEs.

### Values & Properties

To ensure extensive recording of physical and chemical properties, the database features a complex type system that strictly types and monitors the definition of numerical values. Various property types, such as single numbers, ranges, arrays, or even more complex correlated physical properties, ensure precise specification in different applications. Furthermore, parameters are responsible for specifying measurement uncertainty, confidence ratings, conditions under which the properties are valid, and more.

In addition to physics data, simple strings, numeric values, booleans, etc. can be stored using a primitive type. Apart from that, some collections define their own more complex structures, which, however, refer to or use basic types whenever possible.

### Collections

Database entries are organized into several collections, grouping properties that are similar or thematically related. Collections represent sets of properties from various scientific disciplines (physics, chemistry) or define frequently used, complex data structures (hazard information, registry, media, etc.).

Collections usually define far more properties than needed, therefore these fields are mostly optional. Entities (e.g., chemical elements) define their own collections too, based on their own needs.

Properties in collections are defined either as `Single< T >` using above-described physical values or `Distinct< T >` as a special data type. Properties in collections can be grouped using `Group< {...} >`. The `Collection< T >` is defined as an enclosing generic collection mapper that safely converts a collection definition into the corresponding internal structure.

### Units & References

The reference system for consistent bibliographic indexing is based on BibTeX. All BibTeX types, e.g., `book`, `article`, `misc`, `journal`, have exact definitions of required and optional fields.

### Collections

## Entities

### Elements
