System.register(["@angular/core", "@angular/http", "../../authHelper/authHelper"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, authHelper_1, Files;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (authHelper_1_1) {
                authHelper_1 = authHelper_1_1;
            }
        ],
        execute: function () {
            Files = (function () {
                function Files(http, authHelper) {
                    var _this = this;
                    http.get("https://graph.microsoft.com/v1.0/me/drive/root/children", {
                        headers: new http_1.Headers({ "Authorization": "Bearer " + authHelper.access_token })
                    })
                        .subscribe(function (res) {
                        if (res.status === 200)
                            _this.files = res.json().value;
                    });
                }
                Files = __decorate([
                    core_1.Component({
                        selector: "files",
                        templateUrl: "src/app/files/view-files.html"
                    }),
                    __metadata("design:paramtypes", [http_1.Http, authHelper_1.AuthHelper])
                ], Files);
                return Files;
            }());
            exports_1("Files", Files);
        }
    };
});
//# sourceMappingURL=files.js.map