namespace coromendal.ACN {

    @Serenity.Decorators.registerFormatter()
    export class AcnListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = AcnAuditorRow.getLookup().itemById;
            console.log(byId);
            let z: AcnAuditorRow;
            return idList.map(x => ((z = byId[x]) ? z.Name : x)).join(", ");
        }
    }
}