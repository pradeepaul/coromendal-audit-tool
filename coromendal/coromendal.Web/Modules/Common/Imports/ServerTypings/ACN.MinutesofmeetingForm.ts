namespace coromendal.ACN {
    export class MinutesofmeetingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Minutesofmeeting';

    }

    export interface MinutesofmeetingForm {
        AcnidPhaseNo: Serenity.IntegerEditor;
        AcnidCreationdate: Serenity.DateEditor;
        planeddate: Serenity.DateEditor;
        auditopeneddate: Serenity.DateEditor;
        momdate: Serenity.DateEditor;
        Acnid: Serenity.LookupEditor;
        MeetingTitle: Serenity.StringEditor;
        AcnidScopeList: ScopeEditor;
        AcnidPeriodfrom: Serenity.StringEditor;
        AcnidPeriodto: Serenity.StringEditor;
        AcnidFromdate: Serenity.StringEditor;
        AcnidTodate: Serenity.StringEditor;
        AbsentList: MeetingAbsentauditorEditor;
        AuditeeAbsent: MeetingAbsentauditeeEditor;
        PreviousObservationaudit: ObservationpreviousauditEditor;
        PointsList: MeetingPointsEditor;
        NoteList: Northwind.NotesEditor;
        Newimprovements: NewiprovementsEditor;
        Newchanges: NewchangesEditor;
    }

    [['AcnidPhaseNo', () => Serenity.IntegerEditor], ['AcnidCreationdate', () => Serenity.DateEditor], ['planeddate', () => Serenity.DateEditor], ['auditopeneddate', () => Serenity.DateEditor], ['momdate', () => Serenity.DateEditor], ['Acnid', () => Serenity.LookupEditor], ['MeetingTitle', () => Serenity.StringEditor], ['AcnidScopeList', () => ScopeEditor], ['AcnidPeriodfrom', () => Serenity.StringEditor], ['AcnidPeriodto', () => Serenity.StringEditor], ['AcnidFromdate', () => Serenity.StringEditor], ['AcnidTodate', () => Serenity.StringEditor], ['AbsentList', () => MeetingAbsentauditorEditor], ['AuditeeAbsent', () => MeetingAbsentauditeeEditor], ['PreviousObservationaudit', () => ObservationpreviousauditEditor], ['PointsList', () => MeetingPointsEditor], ['NoteList', () => Northwind.NotesEditor], ['Newimprovements', () => NewiprovementsEditor], ['Newchanges', () => NewchangesEditor]].forEach(x => Object.defineProperty(MinutesofmeetingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

