analytics.trackPurchase(purchaseData, function () {
    chargeCreditCard();
    displayThankyouPage();
});

//-----------------------------------------------------------------------
var tracked = false;

analytics.trackPurchase(purchaseData, function () {
    if (!tracked) {
        tracked = true;
        chargeCreditCard();
        displayThankyouPage();
    }
});

//--------------------------------------------------------------------------

