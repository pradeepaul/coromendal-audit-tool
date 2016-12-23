namespace coromendal.ACN {
    export class MinutesofmeetingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Minutesofmeeting';

    }

    export interface MinutesofmeetingForm {
        Acnid: Serenity.LookupEditor;
        AcnidPhaseNo: Serenity.IntegerEditor;
        MeetingTitle: Serenity.StringEditor;
        momdate: Serenity.DateEditor;
        planeddate: Serenity.DateEditor;
        auditopeneddate: Serenity.DateEditor;
        AcnidScopeList: ScopeEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        AbsentList: MeetingAbsentEditor;
        PreviousObservationaudit: ObservationpreviousauditEditor;
        PointsList: MeetingPointsEditor;
        NoteList: Northwind.NotesEditor;
        Newimprovements: NewiprovementsEditor;
        Newchanges: NewchangesEditor;
    }

    [['Acnid', () => Serenity.LookupEditor], ['AcnidPhaseNo', () => Serenity.IntegerEditor], ['MeetingTitle', () => Serenity.StringEditor], ['momdate', () => Serenity.DateEditor], ['planeddate', () => Serenity.DateEditor], ['auditopeneddate', () => Serenity.DateEditor], ['AcnidScopeList', () => ScopeEditor], ['AcnidPeriodfrom', () => Serenity.StringEditor], ['AcnidPeriodto', () => Serenity.StringEditor], ['AcnidFromdate', () => Serenity.StringEditor], ['AcnidTodate', () => Serenity.StringEditor], ['AbsentList', () => MeetingAbsentEditor], ['PreviousObservationaudit', () => ObservationpreviousauditEditor], ['PointsList', () => MeetingPointsEditor], ['NoteList', () => Northwind.NotesEditor], ['Newimprovements', () => NewiprovementsEditor], ['Newchanges', () => NewchangesEditor]].forEach(x => Object.defineProperty(MinutesofmeetingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

