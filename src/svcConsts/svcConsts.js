System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SvcConsts;
    return {
        setters: [],
        execute: function () {
            SvcConsts = (function () {
                function SvcConsts() {
                }
                SvcConsts.CLIENT_ID = "<CLIENT-ID>";
                SvcConsts.TENANT_ID = "<TENANT>.onmicrosoft.com";
                SvcConsts.GRAPH_RESOURCE = "https://graph.microsoft.com";
                return SvcConsts;
            }());
            exports_1("SvcConsts", SvcConsts);
        }
    };
});
//# sourceMappingURL=svcConsts.js.map