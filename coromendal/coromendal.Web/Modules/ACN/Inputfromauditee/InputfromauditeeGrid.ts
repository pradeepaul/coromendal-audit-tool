
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class InputfromauditeeGrid extends Serenity.EntityGrid<InputfromauditeeRow, any> {
        protected getColumnsKey() { return 'ACN.Inputfromauditee'; }
        protected getDialogType() { return InputfromauditeeDialog; }
        protected getIdProperty() { return InputfromauditeeRow.idProperty; }
        protected getLocalTextPrefix() { return InputfromauditeeRow.localTextPrefix; }
        protected getService() { return InputfromauditeeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}