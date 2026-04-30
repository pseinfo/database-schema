import type { ElementSymbol, PaulingSpin, ShellModel, Subshell } from '../../enum/domain/element';
import type { Collection, Group, One, OneOrMany } from '../base/modifier';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../base/property';
import type { NoUnit } from '../registry/unit';

export type ElectronConfig = {
  baseElement?: ElementSymbol;
  terms: Array< {
    shell: ShellModel;
    subshell: Subshell;
    value: number;
  } >;
};

type Box = PaulingSpin | null;

export type PaulingNotation = {
  baseElement?: ElementSymbol;
  shells: {
    [ K in ShellModel ]?: {
      s: [ Box ];
      p: [ Box, Box, Box ];
      d: [ Box, Box, Box, Box, Box ];
      f: [ Box, Box, Box, Box, Box, Box, Box ];
    };
  };
};

export type AtomicCollection = Collection< {
  atomicNumber?: One< PrimitiveProperty< number > >;
  massNumber?: One< PrimitiveProperty< number > >;
  effectiveNuclearCharge?: OneOrMany< PrimitiveProperty< number > >;

  electrons?: Group< {
    valenceElectrons?: One< PrimitiveProperty< number > >;
    shellModel?: One< StructProperty< { [ K in ShellModel ]?: number } > >;
    electronConfig?: OneOrMany< StructProperty< ElectronConfig > >;
    paulingNotation?: OneOrMany< StructProperty< PaulingNotation > >;
  } >;

  energy?: Group< {
    ionizationEnergies?: One< ArrayProperty< 'energy' > >;
    massExcess?: OneOrMany< NumberProperty< 'energy' > >;
  } >;

  mass?: Group< {
    atomicMass?: OneOrMany< NumberProperty< 'mass' > >;
    standardAtomicWeight?: OneOrMany< NumberProperty< NoUnit > >;
    relativeAtomicMass?: OneOrMany< NumberProperty< NoUnit > >;
  } >;

  radius?: Group< {
    empirical?: OneOrMany< NumberProperty< 'length' > >;
    calculated?: OneOrMany< NumberProperty< 'length' > >;
    covalent?: OneOrMany< NumberProperty< 'length' > >;
    vdw?: OneOrMany< NumberProperty< 'length' > >;
  } >;

  electronegativity?: Group< {
    allen?: OneOrMany< NumberProperty< NoUnit > >;
    allredRochow?: OneOrMany< NumberProperty< NoUnit > >;
    ghoshGupta?: OneOrMany< NumberProperty< 'energy' > >;
    gordy?: OneOrMany< NumberProperty< NoUnit > >;
    martynov?: OneOrMany< NumberProperty< NoUnit > >;
    mulliken?: OneOrMany< NumberProperty< NoUnit > >;
    nagle?: OneOrMany< NumberProperty< NoUnit > >;
    pauling?: OneOrMany< NumberProperty< NoUnit > >;
    pearson?: OneOrMany< NumberProperty< 'energy' > >;
    rahm?: OneOrMany< NumberProperty< 'energy' > >;
    sanderson?: OneOrMany< NumberProperty< NoUnit > >;
  } >;
} >;
