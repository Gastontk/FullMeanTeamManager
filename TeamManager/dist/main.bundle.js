webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/add-player/add-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.divBordered{\n\tborder: solid black 2px;\n\tmargin-top: 20px;\n\tpadding: 5px;\n\tbackground-color: linen;\n\tmax-width: 70%;\n\tmargin-left: 10px;\n}\n.errCheck{\n\theight: 20px;\n\tcolor: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/add-player/add-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'divBordered'>\n\t<a [routerLink]=\"['']\">List</a>  --  <a [routerLink] = \"['addplayer']\">Add Player</a>\n\t<form name = 'myForm' (submit) = submitForm($event) #myForm=\"ngForm\" >\n\t\t<div class = 'errCheck'>\n\t\t\t<div *ngIf = '!myForm.valid'>\n\t\t\t\tName must be at least 8 characters long\n\t\t\t</div>\n\t\t</div>\n\t\tName: <input name = 'name' #name = 'ngModel' [(ngModel)] = 'player.name' type=\"text\" required minlength='8'><br>\n\t\tPosition: <input name = 'position' #position = 'ngModel' [(ngModel)] = 'player.position' type=\"text\"> <br>\n\t\t<input type=\"submit\" [disabled]='!myForm.valid' [ngClass]=\"{'btn-danger': !myForm.valid, 'btn-success':myForm.valid}\">\n\n\t</form>\n\n\n\t{{myForm.valid}}\n</div>\n\n"

/***/ }),

/***/ "./src/app/add-player/add-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//added


var AddPlayerComponent = (function () {
    function AddPlayerComponent(_router, _playerService) {
        this._router = _router;
        this._playerService = _playerService;
        this.player = { _id: null,
            name: '',
            position: '',
            status: [], };
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._playerService.getPlayers(function (response) {
            console.log('In component CONSTRUCTOR', response);
            _this.players = response;
        });
        this.player = { _id: null, name: '', position: '', status: [{ game: 0, gameStatus: 0 }] };
    };
    AddPlayerComponent.prototype.submitForm = function ($event) {
        this.player._id = Math.floor(Math.random() * 999);
        console.log('New player id is:', this.player._id);
        this.player.status = [{ game: 0, gameStatus: 0 }, { game: 1, gameStatus: 0 }, { game: 2, gameStatus: 0 }];
        console.log('form submitted', this.player);
        // this.players.splice(0,0, this.player)
        this._playerService.createPlayer(this.player);
        this._router.navigate(['']);
    };
    return AddPlayerComponent;
}());
AddPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-player',
        template: __webpack_require__("./src/app/add-player/add-player.component.html"),
        styles: [__webpack_require__("./src/app/add-player/add-player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], AddPlayerComponent);

var _a, _b;
//# sourceMappingURL=add-player.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__players_players_component__ = __webpack_require__("./src/app/players/players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_player_add_player_component__ = __webpack_require__("./src/app/add-player/add-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__player_status_player_status_component__ = __webpack_require__("./src/app/player-status/player-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player_component__ = __webpack_require__("./src/app/edit-player/edit-player.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__players_players_component__["a" /* PlayersComponent */]
    },
    {
        path: 'addplayer',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__add_player_add_player_component__["a" /* AddPlayerComponent */]
    },
    // {
    //   path: 'status',
    //   children: [],
    //   component: PlayerStatusComponent,
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'status/0/status/:id',
    //   children: [],
    //   component: PlayerStatusComponent,
    //   pathMatch: 'full'
    // },
    {
        path: 'status/:id',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_4__player_status_player_status_component__["a" /* PlayerStatusComponent */],
        pathMatch: 'full'
    },
    // {
    //   path: 'status/0/status/:id',
    //   children: [],
    //   component: PlayerStatusComponent,
    //   pathMatch: 'full'
    // },
    {
        path: 'edit/:id',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_5__edit_player_edit_player_component__["a" /* EditPlayerComponent */],
    },
    {
        path: '**',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__players_players_component__["a" /* PlayersComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<p>{{title}}</p>\n<a [routerLink] = \"['/players']\">Players</a> --\n<a [routerLink]=\"['status',0]\">Manage Player Status</a> <br>\t<br><br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Team Manager App-';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__players_players_component__ = __webpack_require__("./src/app/players/players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_player_add_player_component__ = __webpack_require__("./src/app/add-player/add-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__player_status_player_status_component__ = __webpack_require__("./src/app/player-status/player-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_player_edit_player_component__ = __webpack_require__("./src/app/edit-player/edit-player.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__players_players_component__["a" /* PlayersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__add_player_add_player_component__["a" /* AddPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__player_status_player_status_component__["a" /* PlayerStatusComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edit_player_edit_player_component__["a" /* EditPlayerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__player_service__["a" /* PlayerService */],],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/edit-player/edit-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/edit-player/edit-player.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"modPlayerInfo()\" name = 'myForm' #myForm ='ngForm' >\n\tName: <input type=\"text\" name='name' #name='ngModel' [(ngModel)] = 'player.name'><br>\n\tPosition:  <input type=\"text\" name = 'position' #position = 'ngModel' [(ngModel)]='player.position'><br>\n\t<input type=\"submit\">\n\t\n\n\n</form>\n\n\n<!-- {{players | json}} <br> <br><br>\n{{id}}\n<br><br>\n{{player.name}} -->\n"

/***/ }),

/***/ "./src/app/edit-player/edit-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPlayerComponent = (function () {
    function EditPlayerComponent(_playerService, _route, _router) {
        var _this = this;
        this._playerService = _playerService;
        this._route = _route;
        this._router = _router;
        this.players = [];
        this._playerService.getPlayers(function (players) {
            console.log('In PlayerService CONSTRUCTOR', players.json());
            _this.players = players.json();
            // this.findPlayer();
            for (var x = 0; x < _this.players.length; x++) {
                if (_this.players[x]._id == _this.id) {
                    console.log('Match');
                    _this.player = _this.players[x];
                    break;
                }
            }
        });
        this._route.paramMap.subscribe(function (params) {
            // this.stringId = params.get('id');
            _this.id = Number(params.get('id'));
            // console.log('parseInt is', Number(params.get('id')));
            // console.log('param', this.id);
            // this.statusCode = params.get('id')
            // this._playerService.getPlayers()
        });
    }
    EditPlayerComponent.prototype.ngOnInit = function () {
        // this._playerService.getPlayers((players)=>{
        //   console.log('In PlayerService CONSTRUCTOR', players.json())
        //   this.players = players.json();
        //   this.findPlayer();
        // })
    };
    //get ind player from this.players
    EditPlayerComponent.prototype.findPlayer = function () {
        console.log('In findPlayer');
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x]._id == this.id) {
                console.log('Match');
                this.player = this.players[x];
            }
        }
        // this.player = 
    };
    // Edit individual player
    EditPlayerComponent.prototype.modPlayerInfo = function () {
        console.log('Modifedplayer is', this.player);
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x]._id == this.player._id) {
                console.log('Match');
                this.players[x] = this.player;
                this._playerService.updatePlayer(this.player);
                // this.player = this.players[x];
                this._router.navigate(['/players']);
            }
        }
    };
    return EditPlayerComponent;
}());
EditPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-player',
        template: __webpack_require__("./src/app/edit-player/edit-player.component.html"),
        styles: [__webpack_require__("./src/app/edit-player/edit-player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object])
], EditPlayerComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-player.component.js.map

/***/ }),

/***/ "./src/app/player-status/player-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".green{\n\tbackground-color: #ade88d;\n}\n.red{\n\tbackground-color: #ff6060;\n}\n.yellow{\n\tbackground-color: #ede86f;\n}\n\n\n\n.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #b8dba6;\n}\n\n\n.wrap{\n\tborder: solid black 2px;\n\tmargin-left: 10px;\n\tpadding: 5px;\n\tbackground-color: linen;\n\twidth:70%;\n\tmax-width: 100%\n\n}\n.table{\n\t/*display: block;*/\n\twidth: 100%;\n}\n.colorBox{\n\twidth: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/player-status/player-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='wrap'>\n\t<a [routerLink]=\"['/status',0]\">Game 1</a> - <a [routerLink]=\"['/status',1]\">Game 2</a> - <a [routerLink]=\"['/status',2]\">Game 3</a> <br><br><br>\n\t<div class='statusDiv'>\n\t\t{{serverMessage}}\n\n\t</div>\n\n\n\t<h1>Player Status For Game {{id+1}}</h1>\n\t<table class ='table table-condensed table-striped table-hover table-bordered'>\n\t\t<tr>\n\t\t\t<th>Name</th>\n\t\t\t<th>Change Status</th>\n\t\t\t<th>Status</th>\n\t\t</tr>\n\t\t<tr *ngFor = 'let player of players'>\n\t\t\t<td>{{player.name}}</td>\n\t\t\t\n\n<!-- \t\t\t<td  style= 'color:orange;' *ngIf = 'player.status[id].gameStatus == 0'>{{player.name}}</td>\n\n\t\t\t<td style='color:green' *ngIf = 'player.status[id].gameStatus == 1'>{{player.name}}</td>\n\n\t\t\t<td style='color:red'  *ngIf = 'player.status[id].gameStatus == 2'>{{player.name}}</td> -->\n\n\n\n\n\n\t\t\t<td> <button (click) = 'play(player._id)' [ngClass]=\"{'green':(player.status[id].gameStatus==1)}\">Playing</button><button (click)='bench(player._id)'  [ngClass]=\"{'red':(player.status[id].gameStatus==2)}\">Benched</button><button (click) = 'undecide(player._id)' [ngClass]=\"{'yellow':(player.status[id].gameStatus==0)}\">Undecided</button></td>\n\n\t\t\t<td  class = 'colorBox btn-warning' *ngIf = 'player.status[id].gameStatus == 0'>UNDECIDED</td>\n\n\t\t\t<td class = 'colorBox btn-success' *ngIf = 'player.status[id].gameStatus == 1'>PLAYING</td>\n\n\t\t\t<td class = 'colorBox btn-danger'  *ngIf = 'player.status[id].gameStatus == 2'>BENCHED</td>\n\t\t</tr>\n\n\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/player-status/player-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStatusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerStatusComponent = (function () {
    function PlayerStatusComponent(_route, _playerService) {
        var _this = this;
        this._route = _route;
        this._playerService = _playerService;
        this.serverMessage = 'test';
        this._playerService.getPlayers(function (players) {
            console.log('In component CONSTRUCTOR', players);
            _this.players = players.json();
            _this.serverMessage = 'Players recieved from server';
        });
        //subscribe to route params
        this._route.paramMap.subscribe(function (params) {
            _this.stringId = params.get('id');
            _this.id = parseInt(params.get('id'));
            console.log('parseInt is', parseInt(params.get('id')));
            console.log('param', _this.id);
            _this.statusCode = params.get('id');
            // this._playerService.getPlayers()
        });
    }
    PlayerStatusComponent.prototype.ngOnInit = function () {
    };
    // assign player to play
    PlayerStatusComponent.prototype.play = function (id) {
        console.log('Play', id);
        for (var x = 0; x < this.players.length; x++) {
            console.log('players[x]._id ', this.players[x]._id, 'this.id', id);
            console.log(this.players[x]);
            this.forNextId = this.players[x]._id;
            if (this.forNextId == (id)) {
                this.players[x].status[this.id].gameStatus = 1;
                console.log('FOUND A MATCH', this.forNextId);
                console.log('', this.players[x].status[this.id]);
                this._playerService.updatePlayer(this.players[x]);
                // this._playerService.getPlayers((players)=>{
                //    console.log('In component CONSTRUCTOR', players)
                //    this.players = players.json();
                //  })
                // 	// .gameStatus = 1
            }
        }
    };
    //Assign player to bench
    PlayerStatusComponent.prototype.bench = function (id) {
        console.log('Benching ID:', id);
        for (var x = 0; x < this.players.length; x++) {
            // console.log('players[x]._id ', this.players[x]._id, 'this.id',  id);
            // console.log(this.players[x]);
            this.forNextId = this.players[x]._id;
            if (this.forNextId == (id)) {
                this.players[x].status[this.id].gameStatus = 2;
                console.log('FOUND A MATCH and created', this.players[x].status, this.id);
                // console.log('',this.players[x].status[this.id])
                this._playerService.updatePlayer(this.players[x]);
                // this._playerService.getPlayers((players)=>{
                //   console.log('In component BENCH()', players)
                //   this.players = players.json();
                // })
                // 	// .gameStatus = 1
            }
        }
    };
    //Assign player to default Undecided
    PlayerStatusComponent.prototype.undecide = function (id) {
        console.log('Benching ID:', id);
        for (var x = 0; x < this.players.length; x++) {
            // console.log('players[x]._id ', this.players[x]._id, 'this.id',  id);
            // console.log(this.players[x]);
            this.forNextId = this.players[x]._id;
            if (this.forNextId == (id)) {
                this.players[x].status[this.id].gameStatus = 0;
                console.log('FOUND A MATCH and created', this.players[x].status, this.id);
                // console.log('FOUND A MATCH', this.forNextId, )
                // console.log('',this.players[x].status[this.id])
                this._playerService.updatePlayer(this.players[x]);
                // 	// .gameStatus = 1
            }
        }
    };
    return PlayerStatusComponent;
}());
PlayerStatusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-player-status',
        template: __webpack_require__("./src/app/player-status/player-status.component.html"),
        styles: [__webpack_require__("./src/app/player-status/player-status.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _b || Object])
], PlayerStatusComponent);

var _a, _b;
//# sourceMappingURL=player-status.component.js.map

/***/ }),

/***/ "./src/app/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerService = (function () {
    function PlayerService(_http, _router, _route) {
        this._http = _http;
        this._router = _router;
        this._route = _route;
        this.players = [];
        this.initStatus = { game: 0, gameStatus: 0 };
        // this._http.get(`/players`)
        // .subscribe( 
        //   (players) => {
        //     console.log('Successful response from the server', players.json());
        //     this.players = players.json();
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // )
        //  	{_id:2,name:'Yvette Kennedy', position:'Loose Head Prop', status:[{game:0, gameStatus:0},{game:1, gameStatus:0},{game:2, gameStatus:0}]}];
        // console.log(this.players);
    }
    PlayerService.prototype.ngOnInit = function () {
        console.log('INITTING');
    };
    //for speed testing
    PlayerService.prototype.getPlayer = function (id) {
        console.log('In getPlayer() with id of', id);
    };
    PlayerService.prototype.getPlayers = function (callback) {
        return this._http.get("/players")
            .subscribe(function (response) {
            // console.log('Successful response from the server', response);
            callback(response);
            // this.players = response.json();
        }, function (err) {
            console.log(err);
        });
    };
    PlayerService.prototype.createPlayer = function (player) {
        return this._http.post("/players", player)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            /* code */
        }, function (err) {
            console.log('ERR RESPONSE', err);
        });
    };
    PlayerService.prototype.deletePlayer = function (player) {
        var _this = this;
        this.player = player;
        console.log('In Player Service and player to be deleted is ', player);
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x]._id == player._id) {
                console.log('Found one', x);
                console.log('before splice:', this.players);
                this.players.splice(x, 1);
                console.log('after splice:', this.players);
            }
        }
        return this._http.delete("/player", { body: this.player }).subscribe(function (response) {
            console.log(response);
            // this._router.navigate(['']);
            _this.getPlayers(function (response) {
                _this.players = response.json();
            });
        }, function (err) {
            console.log('ERR', err);
        });
    };
    //HERE
    PlayerService.prototype.updatePlayer = function (player) {
        console.log('Updating', player);
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x]._id == player._id) {
                console.log('Found one', x);
                this.players[x] = player;
                this._router.navigate(['']);
            }
        }
        this._http.put("/players", { body: player })
            .subscribe(function (response) {
            console.log('Successful response from the server', response);
            /* code */
        }, function (err) {
            console.log('err is', err);
        });
    };
    PlayerService.prototype.simplePlayersReturn = function () {
        console.log('This.players is simplePlayersRetun is', this.players);
    };
    return PlayerService;
}());
PlayerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], PlayerService);

var _a, _b, _c;
// {_id:1,name:'Gaston Kennedy', position:'Tight Head Prop'},
// {_id:2,name:'Yvette Kennedy', position:'Loose Head Prop'} 
//# sourceMappingURL=player.service.js.map

/***/ }),

/***/ "./src/app/players/players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-hover tbody tr:hover td, .table-hover tbody tr:hover th {\n  background-color: #b8dba6;\n}\n\n\ntable{\n\tmax-width: 600px;\n\toverflow: hidden;\n  \ttext-overflow: ellipsis;\n \twhite-space: nowrap; \n}\n\n.divBordered{\n\tborder: solid black 2px;\n\tmargin-top: 20px;\n\tmargin-left: 10px;\n\tbackground-color: linen;\n\tpadding: 5px;\n\tmax-width: 70%\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/players/players.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = 'divBordered'>\n\t<a [routerLink]=\"['']\">List</a>  --  <a [routerLink] = \"['/addplayer']\">Add Player</a> <br><br><br>\n\t<h3>{{serverMessage}}</h3>\n\t<table class = 'table-striped table table-bordered table-hover table-condensed'>\n\t\t<tr>\n\t\t\t<th>Player Name</th>\n\t\t\t<th>Preferred Position</th>\n\t\t\t<th>Actions</th>\n\t\t</tr>\n\t\t<tr *ngFor='let player of players'>\n\t\t\t<td> <a [routerLink]=\"['edit', player._id]\">{{player.name | uppercase}}</a> </td>\n\t\t\t<td>{{player.position}}</td>\n\t\t\t<td><a (click)=deletePlayer(player)><button class='button btn-danger'>Delete</button></a></td>\n\t\t\t\n\n\t\t</tr>\n\n\n\n\t</table>\n<!-- \n\n\t<table>\n\t\t<tr *ngFor = 'let player of players'>\n\t\t\t<td>{{player.name}}</td>\n\t\t\t<td>{{player.status |json}}</td>\n\t\t</tr>\n\t</table> -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("./src/app/player.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayersComponent = (function () {
    function PlayersComponent(_playerService) {
        // this.players = [{_id:1,name:'Gaston Kennedy', position:'Tight Head Prop'},
        // 	{_id:2,name:'Yvette Kennedy', position:'Loose Head Prop'}];
        // this.players = (this.player;
        var _this = this;
        this._playerService = _playerService;
        this.serverMessage = 'Data Loading';
        this._playerService.getPlayers(function (response) {
            // console.log('In component CONSTRUCTOR', response)
            _this.players = response.json();
            _this.serverMessage = 'Data loaded';
        });
    }
    PlayersComponent.prototype.ngOnInit = function () {
    };
    PlayersComponent.prototype.deletePlayer = function (player) {
        this.confirm = confirm('Are you sure you wish to remove ' + player.name + '?');
        // console.log(this.confirm);
        if (this.confirm == false) {
            return;
        }
        for (var x = 0; x < this.players.length; x++) {
            if (this.players[x]._id == player._id) {
                console.log('Found a match');
                this.players.splice(x, 1);
                console.log(this.players);
            }
        }
        this._playerService.deletePlayer(player);
        this.ngOnInit();
        // console.log(player)
        // for( var x=0; x< this.players.length;  x ++){
        // 	if(this.players[x]._id == player._id){
        // 		console.log('Found a match');
        // 		this.players.splice(x, 1)
        // 		console.log(this.players);
        // 	}
        // }
    };
    return PlayersComponent;
}());
PlayersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-players',
        template: __webpack_require__("./src/app/players/players.component.html"),
        styles: [__webpack_require__("./src/app/players/players.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayersComponent);

var _a;
//# sourceMappingURL=players.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map