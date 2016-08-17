
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    export class MeetingPointsGrid extends Serenity.EntityGrid<MeetingPointsRow, any> {
        protected getColumnsKey() { return 'ACN.MeetingPoints'; }
        protected getDialogType() { return MeetingPointsDialog; }
        protected getIdProperty() { return MeetingPointsRow.idProperty; }
        protected getLocalTextPrefix() { return MeetingPointsRow.localTextPrefix; }
        protected getService() { return MeetingPointsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}