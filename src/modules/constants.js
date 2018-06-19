
export function getInputFields() {
  const inputFields = [
    {
      part: '1',
      fieldType: 'text',
      name: 'partnerNum',
      prompt: 'Partners Identifying number',
      placeholder: ''
    }, {
      part: '1',
      fieldType: 'text',
      name: 'partnerName',
      prompt: 'Partners name, address, city, state, and zip code',
      rows: 2,
    }, {
      part: '1',
      fieldType: 'rBtn',
      name: 'partnerType',
      prompt: ['General Partner or LLC member-manager', 'Limited partner or LLC member']
    }, {
      part: '1',
      fieldType: 'rBtn',
      name: 'partnerDom',
      prompt: ['Domestic Partner', 'Foreign Partner']
    }, {
      part: '1',
      fieldType: 'text',
      name: 'partnerEntity',
      prompt: 'What type of entity is this partner?'
    }, {
      part: '1',
      fieldType: 'cbox',
      name: 'partnerRetPlan',
      prompt: 'If this partner is a retirement plan (IRA?SEP/KEogh/etc.), check here',
      labelPosition: 'right'
    },


    {
      part: '2',
      fieldType: 'headSect',
      name: 'partnerNum',
      prompt: 'Partner share of profit, loss and capital'
    }, {
      part: '2',
      fieldType: 'begEndH',
      name: 'ProfitLossCapitalHeading',
      prompt: ['Beginning %', 'End %'],
    }, {
      part: '2',
      fieldType: 'begEndP',
      name: 'Profit',
      prompt: 'Profit',
    }, {
      part: '2',
      fieldType: 'begEndP',
      name: 'Loss',
      prompt: 'Loss',
    }, {
      part: '2',
      fieldType: 'begEndP',
      name: 'Capital',
      prompt: 'Capital',
    }, {
      part: '2',
      fieldType: 'num',
      name: "pShare",
      prompt: 'Partner share of liabilities at year end: Nonrecourse'

    }, {
      part: '2',
      fieldType: 'num',
      name: 'pQualifiedNonrecourseFinancing',
      prompt: 'Qualified Nonrecourse Financing'

    }, {
      part: '2',
      fieldType: 'num',
      name: 'pRecourse',
      prompt: 'Recourse'
    }, {
      part: '2',
      fieldType: 'num',
      name: "pBeginningCapitalAccount",
      prompt: "Partner's capital account analysis: Beginning capital account",

    }, {
      part: '2',
      fieldType: 'num',
      name: 'pCapitalContributedYear',
      prompt: 'Capital contributed during the year',

    }, {
      part: '2',
      fieldType: 'num',
      name: 'pCurrentYearIncrease',
      prompt: 'Current year increase(decrease)',
    }, {
      part: '2',
      fieldType: 'num',
      name: 'pWithdrawalsDistributions',
      prompt: 'Withdrawals & distributions',
    }, {
      part: '2',
      fieldType: 'num',
      name: 'pEndingCapitalAccount',
      prompt: 'Ending capital account',
    }, {
      part: '2',
      fieldType: 'cboxs',
      name: 'TaxBasis',
      prompt: ['Tax Basis','GAAP', 'Section 704(b) book', 'Other' ],
    }, {
      part: '2',
      fieldType: 'cbox',
      name: 'pContributeProperty',
      prompt: 'Did the partner contribute property with a built-in gain or loss?',
      labelPosition: 'left'
    },

    {
      part: '3',
      fieldType: 'text',
      colIndicator: '1',
      name: 'ordinaryBusinessIncomeLoss',
      prompt: 'Ordinary Business Income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss1',
      prompt: 'Net rental real estate income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss2',
      prompt: 'Net rental real estate income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss3',
      prompt: 'Net rental real estate income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss4',
      prompt: 'Net rental real estate income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss5',
      prompt: 'Net rental real estate income (loss)',
    }, {
      part: '3',
      fieldType: 'text',
      colIndicator: '2',
      name: 'NetRentalRealEstateIncomeLoss6',
      prompt: 'Net rental real estate income (loss)',
    }
  ];

  return inputFields;
}
