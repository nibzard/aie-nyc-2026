// Verified against the official October 13 library. Keep original local routes:
// an official reading edition may use a different title or clip boundary.
export const officialLibrary = 'https://aie-nyc-2026-talks.swyxio.workers.dev';
export const officialTalks = {
  '001': 'opening-remarks',
  '002': 'opening-remarks',
  '003': 'bridgewater-vault',
  '006': 'anthropic-financial-services',
  '008': 'john-feminella-agent-safety',
  '010': 'max-kanat-alexander-code-quality',
  '013': 'aparna-dhinakaran-ai-engineer',
  '016': 'freddy-lecue-fraud-foundation-model',
  '018': 'aman-singh-arca-agents',
  '020': 'intent-based-auth',
  '022': 'matt-ragone-financial-planners',
  '023': 'kim-maida-lethal-trifecta',
  '025': 'branislav-brzak-gpu-neighbor',
  '027': 'mahmoud-abdelwahab-saas-replacements',
  '028': 'hrishi-olickel-just-in-time-ontologies',
  '029': 'karthic-rao-reliable-smart-workflows',
  '030': 'eduardo-simon-javier-casal-agents-in-orbit',
  '031': 'akshat-bubna-agent-infrastructure',
  '033': 'rayan-krishnan-jagged-frontier',
  '035': 'kepler-fundamental-investing',
  '036': 'david-abitbol-revolut',
  '038': 'sid-pednekar-ai-advantage',
  '042': 'welcome-back-remarks',
  '043': 'frank-long-hedge-fund',
  '046': 'pim-de-witte-space-time',
  '047': 'pim-de-witte-space-time',
  '049': 'dillon-rolnick-hermes',
  '051': 'closing-remarks',
};
export function officialReading(day, id) {
  return day === 1 && officialTalks[id] ? `${officialLibrary}/talks/${officialTalks[id]}` : undefined;
}
