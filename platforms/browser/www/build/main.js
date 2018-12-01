webpackJsonp([4],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importações necessárias



var DenunciasProvider = /** @class */ (function () {
    // Parametros que vamos injetar no construtor
    function DenunciasProvider(afs, auth) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        // Definição do caminho onde será salvo os dados
        // dos usuários
        this.caminho = '';
        // Verificando ser o usuário está logado para criarmos o caminho
        this.auth.user.subscribe(function (auth) {
            // Verifica se está logado e adiciona o caminho, usaremos o email
            // como caminho para ficar mais fácil identificar as tarefas de cada usuário
            if (auth != null) {
                _this.caminho = '/informacoes-' + auth.email;
                _this.denunciasColllection = afs.collection(_this.caminho, function (ref) {
                    return ref;
                });
            }
            else {
                _this.caminho = '';
            }
        });
        //this.productsRef = this.afs.collection<Product>('productos');
    }
    // Este método será retorna um lista de tarefas pode ser
    // as finalizadas ou as que ainda não foram finalizadas
    // para filtrar passamos o parametro finalizada
    DenunciasProvider.prototype.pegarDenuncias = function (app) {
        return this.afs
            .collection(this.caminho, function (ref) {
            return ref.where('app', '==', app);
        })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        });
    };
    // Método usado para adicionar uma tarefa
    DenunciasProvider.prototype.adicionar = function (denuncia) {
        //this.getFoto(denuncia.fotoDenuncia);
        //denuncia.fotoDenuncia=this.getFoto(url);
        this.denunciasColllection.add(denuncia);
    };
    DenunciasProvider.prototype.getFoto = function (image) {
        var imgUrl;
        try {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.storage().ref().child(image).getDownloadURL().then(function (url) {
                console.log("log1: " + url);
                imgUrl = url;
                return url;
            });
        }
        catch (e) {
            console.log(e);
            return 'error';
        }
    };
    // Método usado para atualizar uma tarefa
    DenunciasProvider.prototype.atualizar = function (id, task) {
        this.denunciasColllection.doc(id).update(task);
    };
    // Método usado para excluir uma tarefa
    DenunciasProvider.prototype.excluir = function (id) {
        this.denunciasColllection.doc(id).delete();
    };
    DenunciasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], DenunciasProvider);
    return DenunciasProvider;
}());

//# sourceMappingURL=informacoes.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__denunciar_denunciar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listar_denuncias_listar_denuncias__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Serviço de autenticação

var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__denunciar_denunciar__["a" /* DenunciarPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__listar_denuncias_listar_denuncias__["a" /* ListarDenunciasPage */];
        // Usado para direcionar o usuário que não estiver logado para a página de login
        this.auth.user.subscribe(function (auth) {
            if (auth == null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* Welcome */]);
            }
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Denunciar" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Listar Informacao" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Importações necessárias


var AppUsersProvider = /** @class */ (function () {
    // Parametros que vamos injetar no construtor
    function AppUsersProvider(afs, auth) {
        var _this = this;
        this.afs = afs;
        this.auth = auth;
        // Definição do caminho onde será salvo os dados
        // dos usuários
        this.caminho = '';
        // Verificando ser o usuário está logado para criarmos o caminho
        this.auth.user.subscribe(function (auth) {
            // Verifica se está logado e adiciona o caminho, usaremos o email
            // como caminho para ficar mais fácil identificar as tarefas de cada usuário
            if (auth != null) {
                _this.caminho = '/dados-' + auth.email;
                _this.usersColllection = afs.collection(_this.caminho, function (ref) {
                    return ref;
                });
            }
            else {
                _this.caminho = '';
            }
        });
        //this.productsRef = this.afs.collection<Product>('productos');
    }
    // Este método será retorna um lista de tarefas pode ser
    // as finalizadas ou as que ainda não foram finalizadas
    // para filtrar passamos o parametro finalizada
    AppUsersProvider.prototype.pegarUser = function (app) {
        return this.afs
            .collection(this.caminho, function (ref) {
            return ref.where('app', '==', app);
        })
            .snapshotChanges()
            .map(function (actions) {
            return actions.map(function (a) {
                //Get document data
                var data = a.payload.doc.data();
                //Get document id
                var id = a.payload.doc.id;
                //Use spread operator to add the id to the document data
                return __assign({ id: id }, data);
            });
        });
    };
    // Método usado para adicionar uma tarefa
    AppUsersProvider.prototype.adicionar = function (user) {
        this.usersColllection.add(user);
    };
    // Método usado para atualizar uma tarefa
    AppUsersProvider.prototype.atualizar = function (id, task) {
        this.usersColllection.doc(id).update(task);
    };
    // Método usado para excluir uma tarefa
    AppUsersProvider.prototype.excluir = function (id) {
        this.usersColllection.doc(id).delete();
    };
    AppUsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], AppUsersProvider);
    return AppUsersProvider;
}());

//# sourceMappingURL=app-users.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_users_app_users__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo

// Importação do nosso serviço de autenticação

// Importação da página que o usuário será redirecionado após o login



var SignupPage = /** @class */ (function () {
    // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
    function SignupPage(navCtrl, navParams, auth, alertCtrl, formBuilder, appUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.appUser = appUser;
        // Definindo o nosso atributo usuário do tipo User
        this.user = {};
    }
    // Método para exibir as nossas mensagens de erro.
    SignupPage.prototype.alert = function (title, message) {
        var al = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Fechar']
        });
        al.present();
    };
    SignupPage.prototype.signup = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.email == "" || user.password == "")) return [3 /*break*/, 1];
                        this.alert('Erro', 'É necessário informar o email e senha');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.register(user)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            // Se ocorrer tudo bem redireciona para a página tabs
                            user.password = " ";
                            user.app = true;
                            this.appUser.adicionar(user);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.alert('Erro ao cadastrar', e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        // Toda vez que um usuário acessar a página de login ele será deslogado
        this.auth.logout();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n      <ion-title>Nova Conta</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n  \n\n  <ion-card>\n\n  \n\n    <ion-card-header class="login">\n\n        <ion-grid >\n\n            <ion-row>\n\n              <ion-col center text-center>\n\n                <ion-icon style="zoom:8;" name="lock"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n    </ion-card-header>\n\n  \n\n    <ion-card-content>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome Completo</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.nomeDenunciante"></ion-input>\n\n      </ion-item>\n\n\n\n\n\n        <ion-item>\n\n          <ion-label floating>Rua</ion-label>\n\n          <ion-input type="text" [(ngModel)]="user.ruaDenunciante"></ion-input>\n\n        </ion-item>\n\n\n\n   \n\n          <ion-item>\n\n            <ion-label floating>Bairro</ion-label>\n\n            <ion-input type="text" [(ngModel)]="user.bairroDenunciante"></ion-input>\n\n          </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-label floating>Numero casa</ion-label>\n\n              <ion-input type="text" [(ngModel)]="user.numeroCasaDenunciante"></ion-input>\n\n            </ion-item>\n\n\n\n              <ion-item>\n\n                <ion-label floating>Telefone</ion-label>\n\n                <ion-input type="text" [(ngModel)]="user.telefoneDenunciante"></ion-input>\n\n              </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label floating>E-mail</ion-label>\n\n        <ion-input type="email" [(ngModel)]="user.email" ></ion-input>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label floating>Senha</ion-label>\n\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n  \n\n      <button ion-button block color="secondary" (click)="signup(user)">Cadastro</button>\n\n    \n\n    </ion-card-content>\n\n  \n\n  </ion-card>\n\n  \n\n  </ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__providers_app_users_app_users__["a" /* AppUsersProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Nesse import adicionamos o AlertController que será usado para apresentar a mensagem do nosso aplicativo

// Importação do nosso serviço de autenticação

// Importação da página que o usuário será redirecionado após o login

var Login = /** @class */ (function () {
    // Aqui no contrutor vamos adicionar o AuthProvider e o AlertController
    function Login(navCtrl, navParams, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        // Definindo o nosso atributo usuário do tipo User
        this.user = {};
    }
    // Método para exibir as nossas mensagens de erro.
    Login.prototype.alert = function (title, message) {
        var al = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Fechar']
        });
        al.present();
    };
    // Método usado para login do usuário
    // Recebe como parametro um tipo user e tenta fazer o login
    Login.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(user.email == "" || user.password == "")) return [3 /*break*/, 1];
                        this.alert('Erro', 'É necessário informar o email e senha');
                        return [3 /*break*/, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.auth.login(user)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            // Se ocorrer tudo bem redireciona para a página tabs
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        this.alert('Erro ao logar', e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.ionViewDidLoad = function () {
        // Toda vez que um usuário acessar a página de login ele será deslogado
        this.auth.logout();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Logar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n<ion-card>\n\n\n\n  <ion-card-header class="login">\n\n      <ion-grid >\n\n          <ion-row>\n\n            <ion-col center text-center>\n\n              <ion-icon style="zoom:8;" name="lock"></ion-icon>\n\n            </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n  </ion-card-header>\n\n\n\n  <ion-card-content>\n\n    <ion-item>\n\n      <ion-label floating>E-mail</ion-label>\n\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Senha</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button block (click)="login(user)">Login</button>\n\n  \n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/denunciar/denunciar.module": [
		510,
		3
	],
	"../pages/listar-denuncias/listar-denuncias.module": [
		511,
		2
	],
	"../pages/login/login.module": [
		513,
		1
	],
	"../pages/signup/signup.module": [
		512,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 249;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__denunciar_denunciar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_users_app_users__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Serviço de autenticação que será usado para fazer o logout


// Página de login, para onde o usuário que fizer logout sera direcionado


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, geolocation, auth, appUserProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.geolocation = geolocation;
        this.auth = auth;
        this.appUserProvider = appUserProvider;
        this.markers = [];
        platform.ready().then(function () {
            _this.initMap();
        });
    }
    HomePage.prototype.initMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }).then(function (resp) {
            var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, {
                zoom: 15,
                center: mylocation
            });
        });
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.deleteMarkers();
            var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
            var image = 'assets/imgs/location.png';
            _this.addMarker(updatelocation, image);
            _this.setMapOnAll(_this.map);
        });
    };
    HomePage.prototype.addMarker = function (location, image) {
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: image
        });
        this.markers.push(marker);
    };
    HomePage.prototype.setMapOnAll = function (map) {
        for (var i = 0; i < this.markers.length; i++) {
            this.markers[i].setMap(map);
        }
    };
    HomePage.prototype.clearMarkers = function () {
        this.setMapOnAll(null);
    };
    HomePage.prototype.deleteMarkers = function () {
        this.clearMarkers();
        this.markers = [];
    };
    HomePage.prototype.adicionar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__denunciar_denunciar__["a" /* DenunciarPage */]);
    };
    HomePage.prototype.sair = function () {
        var _this = this;
        this.auth.logout().then(function (value) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* Welcome */]);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.appUsers = this.appUserProvider.pegarUser(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({ selector: 'page-home',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    \n\n    <ion-title>Home</ion-title>\n\n    \n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="adicionar()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="sair()">\n\n        <ion-icon name="close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n    <div #map id="map"></div>\n\n<ion-card *ngFor="let appUser of appUsers | async">\n\n<ion-card-title>\n\n     BEM-VINDO\n\n</ion-card-title>\n\n\n\n\n\n\n\n  <ion-item>\n\n    <ion-icon name="football" item-start large></ion-icon>\n\n    <h2>{{ appUser.nomeDenunciante }}</h2>\n\n    <p></p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-icon name="wine" item-start large ></ion-icon>\n\n    <h2>{{ appUser.email }}</h2>\n\n    <p></p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <span item-start>18 min</span>\n\n    <span item-start>(2.6 mi)</span>\n\n    <button ion-button icon-start clear item-end>\n\n      <ion-icon name="navigate"></ion-icon>\n\n      Start\n\n    </button>\n\n  </ion-item>\n\n\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\home\home.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_users_app_users__["a" /* AppUsersProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(436);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_denunciar_denunciar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listar_denuncias_listar_denuncias__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_denuncias_denuncias__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_app_users_app_users__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// login



//Autenticação
// Importações para funcionamento do Firebase e da Autenticação
//import { AngularFireStorageModule } from 'angularfire2/storage';


// Para usar o serviço de banco de dados é necessário importar o AngularFirestoreModule


//geo

//geo
//Photo

//Photo
//Login









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_denunciar_denunciar__["a" /* DenunciarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listar_denuncias_listar_denuncias__["a" /* ListarDenunciasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/informacao/informacao.module#DenunciarPageModule', name: 'DenunciarPage', segment: 'informacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-informacao/listar-informacao.module#ListarDenunciasPageModule', name: 'ListarDenunciasPage', segment: 'listar-informacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                // Configurações do Firebase
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_11__config__["a" /* config */]),
                // Configuração do serviço de autenticação do firebase
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"],
                // Configuração do serviço de banco de dados do firebase
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["AngularFirestoreModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_denunciar_denunciar__["a" /* DenunciarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listar_denuncias_listar_denuncias__["a" /* ListarDenunciasPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__providers_denuncias_denuncias__["a" /* InformacaoProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_app_users_app_users__["a" /* AppUsersProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// FIM
var AuthProvider = /** @class */ (function () {
    function AuthProvider(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.user = firebaseAuth.authState;
    }
    // Metodo de cadastro
    AuthProvider.prototype.register = function (user) {
        return this.firebaseAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    };
    // Método de login
    AuthProvider.prototype.login = function (user) {
        return this.firebaseAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    // Método de logout
    AuthProvider.prototype.logout = function () {
        return this.firebaseAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */]; // Replace tabsPage with Welcome
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\GIT\app-semeia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\GIT\app-semeia\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    apiKey: "AIzaSyABeEVtAD-SXiy4l-xSdwjsPaiKupYuhDI",
    authDomain: "app-semeia.firebaseapp.com",
    databaseURL: "https://app-semeia.firebaseio.com",
    projectId: "app-semeia",
    storageBucket: "app-semeia.appspot.com",
    messagingSenderId: "168423617526"
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Welcome = /** @class */ (function () {
    function Welcome(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\welcome\welcome.html"*/'<ion-content padding id="welcome">\n\n  <!-- style="width:100%;height:30%;text-align:100% center;align-content: center;align-self: center;" src="assets/imgs/logo.png" !-->\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col center text-center>  \n\n           <img src="assets/imgs/logo1.png" class="logo"/>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    \n\n      <ion-grid>\n\n          <ion-row>\n\n            <ion-col center text-center>  \n\n               <img src="assets/imgs/logo2.png" class="logo"/>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n\n\n  <ion-grid >\n\n    <ion-row>\n\n      <ion-col center text-center>\n\n        <button ion-button large round color="secondary" (click)="login()">\n\n            <ion-icon name="ios-contact"> Entrar Aqui </ion-icon> </button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col center text-center>\n\n         <button ion-button large round color="" (click)="signup()" >\n\n            <ion-icon name="ios-contact-outline"> Nova Conta </ion-icon> </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DenunciarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_denuncias_denuncias__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listar_denuncias_listar_denuncias__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Importações necessárias
// Importação do serviço de tarefas



var DenunciarPage = /** @class */ (function () {
    // Adicionando o serviço de tarefa no construtor
    function DenunciarPage(navCtrl, navParams, denunciasProvider, alertCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.denunciasProvider = denunciasProvider;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        // Definição do atributo tarefa que será usado para o cadastro
        this.denuncia = {};
        this.alertCtrl = alertCtrl;
    }
    DenunciarPage.prototype.capture = function () {
        var _this = this;
        var cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100
        };
        this.camera.getPicture(cameraOptions).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    DenunciarPage.prototype.upload = function () {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref();
        var filename = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("imagesDenuncias/" + filename + ".jpg");
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            _this.showSuccesfulUploadAlert();
        });
    };
    DenunciarPage.prototype.showSuccesfulUploadAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Uploaded!',
            subTitle: 'Picture is uploaded to Firebase',
            buttons: ['OK']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__listar_denuncias_listar_denuncias__["a" /* ListarDenunciasPage */]);
        this.captureDataUrl = "";
    };
    // Método que será usado para adicionar uma tarefa
    DenunciarPage.prototype.adicionarDenuncia = function (denuncia) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref();
        var filename = Math.floor(Date.now() / 1000);
        denuncia.id = filename;
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("imagesDenuncias/" + denuncia.id + ".jpg");
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage.StringFormat.DATA_URL).then(function (snapshot) {
            // testar colocar id da denuncia como filename, assim eh possivel criar a rota para pegar a imagem
            // imagesDenuncias/denuncia.id.jpg`
            denuncia.fotoDenuncia = "imagesDenuncias/" + denuncia.id + ".jpg";
            //denuncia.fotoDenuncia=this.getFoto(denuncia.fotoDenuncia);
            denuncia.app = true;
            //this.denunciasProvider.getFoto( denuncia.fotoDenuncia);
            _this.denunciasProvider.adicionar(denuncia);
            _this.showSuccesfulUploadAlert();
        });
    };
    DenunciarPage.prototype.getFoto = function (image) {
        var imgUrl;
        try {
            __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref().child(image).getDownloadURL().then(function (url) {
                console.log("log1: " + url);
                imgUrl = url;
                return url;
            });
        }
        catch (e) {
            console.log(e);
            return 'error';
        }
    };
    DenunciarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarTarefaPage');
    };
    DenunciarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-denunciar',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\informacao\informacao.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Denunciar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n\n\n  <ion-card-content>\n\n    \n\n    <ion-item>\n\n      <ion-label floating>Nome Denunciado</ion-label>\n\n      <ion-input type="text" [(ngModel)]="denuncia.nomeDenunciado" maxlength="100"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Descreva o Ocorrido</ion-label>\n\n        <ion-textarea type="text" [(ngModel)]="denuncia.descricaoBoa" maxlength="400"></ion-textarea>\n\n    </ion-item>  \n\n    <ion-item>\n\n        <div style="display:flex; flex-direction:column;justify-content:center">\n\n\n\n\n\n            <button ion-button (click)="capture()">Lets take a picture!</button>\n\n        \n\n            <img [src]="captureDataUrl"  *ngIf="captureDataUrl"/>\n\n            \n\n          </div>\n\n    </ion-item>   \n\n\n\n         <ion-input type="number" [(ngModel)]="denuncia.status_id" value=\'1\' hidden></ion-input>\n\n         \n\n    <button ion-button color="secondary" block (click)="adicionarDenuncia(denuncia)">\n\n        Adicionar\n\n    </button>\n\n  \n\n  </ion-card-content>\n\n\n\n</ion-card>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\informacao\informacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_denuncias_denuncias__["a" /* InformacaoProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], DenunciarPage);
    return DenunciarPage;
}());

//# sourceMappingURL=informacao.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarDenunciasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_denuncias_denuncias__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListarDenunciasPage = /** @class */ (function () {
    function ListarDenunciasPage(navCtrl, navParams, denunciasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.denunciasProvider = denunciasProvider;
    }
    ListarDenunciasPage.prototype.getFoto = function (image) {
        return this.denunciasProvider.getFoto(image);
    };
    ListarDenunciasPage.prototype.ionViewDidLoad = function () {
        this.denuncias = this.denunciasProvider.pegarDenuncias(true);
    };
    ListarDenunciasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-listar-denuncias',template:/*ion-inline-start:"C:\GIT\app-semeia\src\pages\listar-informacao\listar-informacao.html"*/'<!--\n\n  Generated template for the ListarDenunciasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Listar Informacao</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-card *ngFor="let denuncia of informacoes | async">\n\n  <div>\n\n    <img [src]="getFoto(denuncia.fotoDenuncia)"/>\n\n  </div>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n   {{ denuncia.nomeDenunciado }}-{{ denuncia.status_id }}\n\n      </ion-card-title>\n\n    <p>\n\n        {{ denuncia.descricaoBoa }}\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\GIT\app-semeia\src\pages\listar-informacao\listar-informacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_denuncias_denuncias__["a" /* InformacaoProvider */]])
    ], ListarDenunciasPage);
    return ListarDenunciasPage;
}());

//# sourceMappingURL=listar-informacao.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map
