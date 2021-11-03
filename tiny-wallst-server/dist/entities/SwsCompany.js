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
exports.SwsCompany = void 0;
var typeorm_1 = require("typeorm");
var SwsCompanyScore_1 = require("./SwsCompanyScore");
var SwsCompany = /** @class */ (function (_super) {
    __extends(SwsCompany, _super);
    function SwsCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "ticker_symbol", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "exchange_symbol", void 0);
    __decorate([
        (0, typeorm_1.Column)({ unique: true }),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "unique_symbol", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], SwsCompany.prototype, "date_generated", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "security_name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "exchange_country_iso", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "listing_currency_iso", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "canonical_url", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], SwsCompany.prototype, "unique_symbol_slug", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return SwsCompanyScore_1.default; }, function (swsCompanyScore) { return swsCompanyScore.id; }),
        (0, typeorm_1.JoinColumn)({ name: "score_id" }),
        __metadata("design:type", SwsCompanyScore_1.default)
    ], SwsCompany.prototype, "score_id", void 0);
    SwsCompany = __decorate([
        (0, typeorm_1.Entity)("swsCompany")
    ], SwsCompany);
    return SwsCompany;
}(typeorm_1.BaseEntity));
exports.SwsCompany = SwsCompany;
exports.default = SwsCompany;
//# sourceMappingURL=SwsCompany.js.map