/**
 * @file nuclear.ts
 * @description Defines the nuclear structure and properties of radionuclides, including
 * energy levels, decay modes, and nuclear magnetic resonance properties.
 */

import type { DecayMode, RadiationType, SpinParity } from '../../enum/nuclear';
import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue, PrimitiveValue } from '../abstract/value';

/**
 * Representation of the nuclear spin state.
 */
export type Spin = {
  /** The symmetry of the wave function under spatial inversion. */
  parity: SpinParity;
  /** The spectroscopic notation/label for the spin state (e.g., "1/2-"). */
  value: string;
  /** The numerical value of the total angular momentum quantum number J. */
  calculatedValue: number;
};

/**
 * Properties related to Nuclear Magnetic Resonance (NMR) spectroscopy.
 */
export type NMR = {
  /** The intrinsic angular momentum of the nucleus. */
  spin?: Spin;
  /** The ratio of a nucleus's magnetic moment to its angular momentum. */
  gyromagneticRatio?: NumberValue< 'gyromagneticRatio' >; 
  /** The frequency at which the magnetic moment of a nucleus precesses around an external field. */
  larmorPrecession?: NumberValue< 'frequency' >;
  /** 
   * The relative sensitivity of the nucleus to magnetic fields compared to a reference nucleus. 
   * An inherent problem with NMR spectroscopy is its comparatively low sensitivity (poor signal-to-noise ratio).
   */
  relativeSensitivity?: PrimitiveValue< number >;
};

/**
 * Parameters for a specific radioactive decay path.
 */
export type DecayChannel = {
  /** The primary mechanism of the nuclear transformation (e.g., alpha, beta-minus). */
  mode: DecayMode;
  /** The probability fraction of the parent nucleus decaying via this specific mode. */
  branchingRatio?: NumberValue< 'quantity' >;
  /** The total energy released during the nuclear decay process (Q-value). */
  energy?: NumberValue< 'energy' >;
  /** The types of ionizing radiation emitted during the decay. */
  radiation?: RadiationType[];
};

/**
 * The state of the nucleus with the lowest possible energy.
 */
export type GroundState = {
  /** The fundamental energy state (defined as zero for the ground state). */
  energy?: NumberValue< 'energy' >;
  /** The nuclear angular momentum (spin) of the ground state. */
  angularMomentum?: Spin;
  /** The time required for half of a sample of the radionuclide to decay. */
  halfLife?: NumberValue< 'time' >;
  /** The relative abundance of this isotope found in a natural sample of the element. */
  isotopeAbundance?: NumberValue< 'massFraction' >;

  /** The physical mass of the neutral atom in its ground state. */
  isotopeMass?: NumberValue< 'mass' >;
  /** The root-mean-square radius of the nuclear charge distribution. */
  chargeRadius?: NumberValue< 'length' >;
  /** The difference between the actual atomic mass and the mass number. */
  massExcess?: NumberValue< 'energy' >;
  /** The magnetic dipole moment of the nucleus in its ground state. */
  dipoleMoment?: NumberValue< 'magneticMoment' >;
  /** The measure of the non-sphericity of the nuclear charge distribution. */
  quadrupoleMoment?: NumberValue< 'area' >;
  /** The quantum number related to the symmetry between protons and neutrons. */
  isoSpin?: Spin;

  /** The set of observed radioactive decay pathways from the ground state. */
  decayChannel?: DecayChannel[];

  /** The energy required to disassemble the nucleus into its constituent nucleons. */
  bindingEnergy?: NumberValue< 'energy' >;
  /** The energy released during alpha particle emission. */
  alphaDecayEnergy?: NumberValue< 'energy' >;
  /** The energy released during beta decay. */
  betaDecayEnergy?: NumberValue< 'energy' >;
  /** The energy released when an atomic electron is absorbed by a proton in the nucleus. */
  electronCaptureEnergy?: NumberValue< 'energy' >;
  /** The energy required to remove a neutron from the nucleus. */
  neutronEmissionEnergy?: NumberValue< 'energy' >;
  /** The minimum energy to separate a single neutron from the nucleus. */
  neutronSeparationEnergy?: NumberValue< 'energy' >;
  /** The minimum energy to separate a single proton from the nucleus. */
  protonSeparationEnergy?: NumberValue< 'energy' >;
  /** The energy difference between the ground state and an excited nuclear level. */
  excitationEnergy?: NumberValue< 'energy' >;
};

/**
 * A discrete excited energy state of the atomic nucleus.
 */
export type Level = {
  /** The energy of the excited state relative to the ground state. */
  energy?: NumberValue< 'energy' >;
  /** The spin-parity of the excited nuclear level. */
  angularMomentum?: Spin;
  /** The rotational or vibrational band to which the level belongs. */
  band?: number;
  /** The mean lifetime or half-life of the excited state. */
  halfLife?: NumberValue< 'time' >;
  /** The relative population probability found in specific environments. */
  isotopeAbundance?: NumberValue< 'massFraction' >;
  /** The magnetic dipole moment of the excited state. */
  dipoleMoment?: NumberValue< 'magneticMoment' >;
  /** The electric quadrupole moment of the excited state. */
  quadrupoleMoment?: NumberValue< 'area' >;
  /** The isospin quantum number of the excited level. */
  isoSpin?: Spin;
  /** The possible decay modes from this excited state. */
  decayChannel?: DecayChannel[];
};

/**
 * A discrete energy state of the atomic nucleus.
 */
export type NuclearState = {
  /** The energy of the excited state relative to the ground state. */
  energy?: NumberValue< 'energy' >;
  /** The spin-parity of the excited nuclear level. */
  angularMomentum?: Spin;
}

/**
 * Properties of a gamma-ray transition between nuclear energy levels.
 */
export type GammaTransition = {
  /** The properties of the nuclear state before the photon emission. */
  initial?: NuclearState;
  /** The properties of the nuclear state after the photon emission. */
  final?: NuclearState;
  /** The lifetime of the excited state before gamma emission. */
  halfLife?: NumberValue< 'time' >;
  /** The energy of the emitted gamma-ray photon. */
  transitionEnergy?: NumberValue< 'energy' >;
  /** The observed intensity of the gamma line relative to other transitions. */
  relativeIntensity?: NumberValue< 'quantity' >;
  /** The ratio of the different multipole components (e.g., E2/M1) in the transition. */
  gRayMixingRatio?: PrimitiveValue< number >;
  /** The ratio of internal conversion electrons to gamma-ray photons emitted. */
  conversionCoefficient?: PrimitiveValue< number >;
  /** The reduced probability for the electric part of the transition. */
  reducedElectricProbability?: PrimitiveValue< number >;
  /** The transition probability for the magnetic part of the electromagnetic decay. */
  magneticTransitionProbability?: PrimitiveValue< number >;
  /** The electromagnetic character of the transition (e.g., E1, M1, E2). */
  multipolarity?: string;
};

/**
 * Registry of properties defining the nuclear and isotopic characteristics of matter.
 */
export type NuclearCollection = Collection< {
  /** The nuclear magnetic resonance characteristics used in spectroscopy and imaging. */
  nmr?: Single< StructProperty< NMR > >;
  /** The fundamental properties of the nucleus in its absolute minimum energy state. */
  ground?: Single< StructProperty< GroundState > >;
  /** The collection of discrete excited energy states and their properties. */
  level?: Single< StructProperty< Level > >;
  /** The electromagnetic transitions between different nuclear states. */
  gamma?: Single< StructProperty< GammaTransition > >;
} >;
