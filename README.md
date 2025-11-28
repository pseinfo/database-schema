# Database Schema

TypeScript type definitions for the [@pseinfo database](https://github.com/pseinfo/database).

**Status:** Elements only. Compounds, nuclides, minerals planned for later versions.

## Architecture

The main `Database` type exposes all major entities (elements, chemical compounds, nuclides, etc.) as well as technically necessary components such as references (standardized citation management) and a flexible physical unit system.

### Core

The abstract kernel of this project involves type definitions of physical values, properties, and the structure of collections as a gathering of related properties.

Most entries are branded, which allows for validation at runtime, as well as pure type-based validity checks and auto-completion in IDEs.

### Values & Properties

### Collections

### Units & References

The reference system for consistent bibliographic indexing is based on BibTeX. All BibTeX types, e.g., `book`, `article`, `misc`, `journal`, have exact definitions of required and optional fields.

### Collections

## Entities

### Elements
