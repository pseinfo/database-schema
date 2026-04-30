/**
 * @file enum/science/abundance.ts
 * @description Defines enums for natural occurrence and abundance of elements and substances
 * in various cosmic and terrestrial reservoirs.
 */

/**
 * Classification of elements based on their origin and persistence in the Earth's crust.
 */
export enum NaturalOccurrence {
  /** Elements present since the formation of the Earth, with half-lives exceeding 10^8 years. */
  PRIMORDIAL = 'primordial',
  /** Elements constantly replenished by the radioactive decay of heavier parent nuclei. */
  DECAY_PRODUCT = 'decayProduct',
  /** Elements not occurring naturally in significant quantities, primarily produced via nuclear synthesis. */
  SYNTHETIC = 'synthetic'
};

/**
 * Scientific reservoirs and contexts for measuring the distribution and
 * concentration of chemical species.
 */
export enum AbundanceType {
  /** The average elemental distribution across the observable cosmos, dominated by H and He. */
  UNIVERSE = 'universe',
  /** The composition of the Sun and its orbiting bodies, reflecting the solar nebula's chemistry. */
  SOLAR_SYSTEM = 'solarSystem',
  /** The chemical makeup of chondritic and non-chondritic meteorites, proxies for early solar system solids. */
  METEORITES = 'meteorites',
  /** The outermost solid shell of Earth, enriched in lithophile elements like Si, Al, and O. */
  EARTH_CRUST = 'earthCrust',
  /** The silicate layer between the crust and core, constituting the bulk of Earth's volume. */
  EARTH_MANTLE = 'earthMantle',
  /** The combined mass of Earth's liquid water, including oceans and ice caps. */
  OCEAN = 'ocean',
  /** The saline water body covering most of Earth, major reservoir for Na, Cl, and Mg. */
  SEAWATER = 'seawater',
  /** Freshwater systems including rivers and lakes, reflecting local continental weathering. */
  STREAMS = 'streams',
  /** The gaseous envelope surrounding Earth, primarily N2, O2, and trace noble gases. */
  ATMOSPHERE = 'atmosphere',
  /** Naturally occurring inorganic solids with defined chemical compositions and crystal structures. */
  MINERALS = 'minerals',
  /** Mineral aggregates from which valuable elements can be economically extracted. */
  ORES = 'ores',
  /** The average elemental composition of a human organism, dominated by O, C, H, and N. */
  HUMAN_BODY = 'humanBody',
  /** The distribution of elements across diverse biological systems and metabolic pathways. */
  BIOLOGY = 'biology'
};
