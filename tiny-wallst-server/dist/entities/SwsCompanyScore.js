"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwsCompanyScore = void 0;
var typeorm_1 = require("typeorm");
var SwsCompany_1 = require("./SwsCompany");
var SwsCompanyScore = /** @class */ (function (_super) {
    __extends(SwsCompanyScore, _super);
    function SwsCompanyScore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return SwsCompany_1.default; }, function (swsCompany) { return swsCompany.id; }),
        __metadata("design:type", SwsCompany_1.default)
    ], SwsCompanyScore.prototype, "company", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Date)
    ], SwsCompanyScore.prototype, "date_generated", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "dividend", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "future", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "health", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "management", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "past", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "misc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", Number)
    ], SwsCompanyScore.prototype, "total", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompanyScore.prototype, "sentence", void 0);
    SwsCompanyScore = __decorate([
        (0, typeorm_1.Entity)("swsCompanyScore")
    ], SwsCompanyScore);
    return SwsCompanyScore;
}(typeorm_1.BaseEntity));
exports.SwsCompanyScore = SwsCompanyScore;
exports.default = SwsCompanyScore;
//# sourceMappingURL=SwsCompanyScore.js.map