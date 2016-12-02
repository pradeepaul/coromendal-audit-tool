namespace coromendal.Administration {

    @Serenity.Decorators.registerFormatter()
    export class AcnListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = UserRow.getLookup().itemById;
            console.log(byId);
            let z: UserRow;
            return idList.map(x => ((z = byId[x]) ? z.Username : x)).join(", ");
        }
    }
}