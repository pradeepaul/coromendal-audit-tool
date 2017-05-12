namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class AcnAuditeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = AcnAuditeeRow.getLookup().itemById;
            let z: AcnAuditeeRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }
}