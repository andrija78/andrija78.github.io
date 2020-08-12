function convertToCard(play) {
    
    let suite=['BASTONE','DINARE','KUPE','SPADE'][(play.card-play.card%100)/100-1];
    let value=['AS','DUJA','TRICA','CETVORINA','PETINA','SESTINA','SEDMINA','OSMINA','DEVETKA','DESETKA','FANAT','KONJ','KRALJ'][play.card%100-1];

    return {
        suite:suite,
        value:value
    };
}

module.exports=convertToCard;