namespace coromendal.Administration {

    @Serenity.Decorators.registerFormatter()
    export class RoleFormater implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as number;
            if (!idList)
                return "";
            var name = "";
            var byId = Administration.RoleRow.getLookup().itemById;
            for (var key in byId) {

                if (idList == byId[key].RoleId) {
                    name = byId[key].RoleName;
                }
            }
            return name;
        }
    }
}