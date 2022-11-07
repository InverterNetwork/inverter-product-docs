
const sidebars = {
   whatIsInverter: [
      'whatIsInverter/introInverter','whatIsInverter/coreBenefits','whatIsInverter/useCases'
   ],
    proposalGuide: [
      {
         type: 'category',
         label: 'Proposal Overview',
         link: {
           type: 'doc',
           id: 'proposalGuide/introProposals',
         },
         items: [
           'proposalGuide/howToCreateProposal',
           'proposalGuide/managingMilestones',
           'proposalGuide/proposalResponsibilities',
           'proposalGuide/proposalQualityGuide',
         ],
      },
      {
         type: 'category',
         label: 'Funder Overview',
         items: [
           'proposalGuide/becomingFunder',
           'proposalGuide/registeringFunder',
           'proposalGuide/overSeeingProposal',
         ],
      }
    ],
}

module.exports = sidebars;
