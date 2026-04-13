export const stp = {
  STP: { t: 0, p: 100, note: 'IUPAC (STP) since 1982' },
  STP_ATM: { t: 0, p: 101.325, note: 'NIST, ISO 10780, former IUPAC STP' },
  NTP: { t: 20, p: 101.325, note: 'EPA, NIST' },
  ISA: { t: 15, p: 101.325, note: 'ICAO ISA, ISO 13443, EEA, EGIA (SI)' },
  AAPM: { t: 22, p: 101.325, note: 'American Association of Physicists in Medicine' },
  SATP: { t: 25, p: 101.325, note: 'SATP, EPA' },
  CAGI: { t: 20, p: 100, note: 'CAGI' },
  SPE: { t: 15, p: 100, note: 'SPE' },
  ISO_5011: { t: 20, p: 101.3, note: 'ISO 5011' },
  GOST_2939_63: { t: 20, p: 101.33, note: 'GOST 2939-63' },
  EGIA: { t: 15.56, p: 101.6, note: 'EGIA (Imperial System)' },
  SCF: { t: 15.56, p: 101.35, note: 'U.S. DOT (SCF)' },
  AMCA: { t: 21.11, p: 101.3, note: 'AMCA' },
  FAA: { t: 15, p: 101.3, note: 'FAA' },
  ISO_13443: { t: 15, p: 101.325, note: 'ISO 2533, ISO 13443, ISO 7504' },
  DIN_1343: { t: 0, p: 101.325, note: 'DIN 1343:1990' }
} as const;
