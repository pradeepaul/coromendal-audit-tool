namespace coromendal.Administration {

    @Serenity.Decorators.registerFormatter()
    export class RoleFormater implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = RoleRow.getLookup().itemById;
            console.log(byId);
            let z: RoleRow;
            return idList.map(x => ((z = byId[x]) ? z.RoleName : x)).join(", ");
        }
    }
}