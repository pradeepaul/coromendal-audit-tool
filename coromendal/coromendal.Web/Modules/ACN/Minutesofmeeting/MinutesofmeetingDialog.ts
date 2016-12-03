
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class MinutesofmeetingDialog extends Serenity.EntityDialog<MinutesofmeetingRow, any> {
        protected getFormKey() { return MinutesofmeetingForm.formKey; }
        protected getIdProperty() { return MinutesofmeetingRow.idProperty; }
        protected getLocalTextPrefix() { return MinutesofmeetingRow.localTextPrefix; }
        protected getNameProperty() { return MinutesofmeetingRow.nameProperty; }
        protected getService() { return MinutesofmeetingService.baseUrl; }

        protected form = new MinutesofmeetingForm(this.idPrefix);
        constructor() {
            super();
            this.form.Acnid.changeSelect2(e => {
               var AcnID = this.form.Acnid.value;
               console.log(this.form.Acnid.value);               
               if (Q.isEmptyOrNull(AcnID)) {
                   this.setCustomerDetails({});
                    return;
               }
               //var id = Q.first(ACN.AcnRow.getLookup().items, x => x.AcnId == AcnID).AcnId;
              // ACN.AcnService.Retrieve({
                 //  EntityId: id
              // }, response => {
               //    this.setCustomerDetails(response.Entity);
              // });
               
            });
        }
        private setCustomerDetails(details: ACN.AcnRow) {
           // this.form.AcnidFromdate = details.Fromdate;
          //  this.form.AcnidTodate = details.Todate;
           // this.form.AcnidPeriodfrom = details.Periodfrom;
           // this.form.AcnidPeriodto = details.Periodto;
        }


    }
}