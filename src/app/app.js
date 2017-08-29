System.register(["@angular/core", "@angular/platform-browser-dynamic", "@angular/platform-browser", "@angular/router", "@angular/common", "@angular/http", "./login/login", "./files/files", "../authHelper/authHelper"], function (exports_1, context_1) {
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
    var core_1, platform_browser_dynamic_1, core_2, platform_browser_1, router_1, common_1, http_1, login_1, files_1, authHelper_1, routes, routing, AppComponent, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (files_1_1) {
                files_1 = files_1_1;
            },
            function (authHelper_1_1) {
                authHelper_1 = authHelper_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: 'login', component: login_1.Login },
                { path: 'files', component: files_1.Files }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
            AppComponent = (function () {
                function AppComponent(router, auth) {
                    this.router = router;
                    if (auth.access_token !== null) {
                        // if authenticated show files
                        this.router.navigate(['/files']);
                    }
                    else {
                        // else show login
                        this.router.navigate(['/login']);
                    }
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "files-app",
                        template: "\n        <router-outlet></router-outlet>\n        "
                    }),
                    __metadata("design:paramtypes", [router_1.Router, authHelper_1.AuthHelper])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_2.NgModule({
                        imports: [platform_browser_1.BrowserModule, routing, http_1.HttpModule],
                        declarations: [AppComponent, login_1.Login, files_1.Files],
                        providers: [authHelper_1.AuthHelper, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
                        bootstrap: [AppComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
        }
    };
});
//# sourceMappingURL=app.js.map