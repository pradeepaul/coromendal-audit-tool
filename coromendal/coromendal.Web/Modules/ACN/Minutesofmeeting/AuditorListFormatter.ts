namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class AuditorListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = AcnAuditorRow.Fields.AcnAuditorId;
            let z: AcnAuditorRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }
}