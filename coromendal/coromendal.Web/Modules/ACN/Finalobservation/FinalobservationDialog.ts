
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalobservationDialog extends Serenity.EntityDialog<FinalobservationRow, any> {
        protected getFormKey() { return FinalobservationForm.formKey; }
        protected getIdProperty() { return FinalobservationRow.idProperty; }
        protected getLocalTextPrefix() { return FinalobservationRow.localTextPrefix; }
        protected getNameProperty() { return FinalobservationRow.nameProperty; }
        protected getService() { return FinalobservationService.baseUrl; }
       

        protected form = new FinalobservationForm(this.idPrefix);
        private setCustomerDetail(details: ACN.AuditobservationRow) {
            this.form.SuggestionList.value = details.SuggestionList;
            this.form.rootList.value = details.rootList;
            this.form.Detailedobservation1.value = details.Detailedobservation1;
            this.form.Name.value = details.Name;
            this.form.Email.value = details.Email;
            
            if ((Authorization.userDefinition.RoleId == 4) || (Authorization.userDefinition.RoleId == 1)) {
               
                this.form.Justification.toggleReadOnly(true);
            }
        }

        protected afterLoadEntity() {
            if (this.form.Observationid.value == 0) {
                this.setCustomerDetail({});
                return;
            }
         

            var id = Q.first(ACN.AuditobservationRow.getLookup().items, x => x.AuditobservationId == this.form.Observationid.value).AuditobservationId;
            ACN.AuditobservationService.Retrieve({
                EntityId: id
            }, response => {
                this.setCustomerDetail(response.Entity);
            });

        }
        protected updateInterface(): void {

            debugger;
            //this.element.find('.add-button').hide();
            this.form.SuggestionList.element.find('.add-button').hide();
            this.form.rootList.element.find('.add-button').hide();
            console.log("success");

        }

    }
}