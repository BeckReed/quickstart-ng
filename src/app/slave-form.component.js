"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var slave_1 = require("./slave");
var SlaveFormComponent = (function () {
    function SlaveFormComponent() {
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new slave_1.Slave(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
        /////////////////////////////
    }
    SlaveFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(SlaveFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    SlaveFormComponent.prototype.newHero = function () {
        this.model = new slave_1.Slave(42, '', '');
    };
    SlaveFormComponent.prototype.skyDog = function () {
        var myHero = new slave_1.Slave(42, 'SkyDog', 'Fetch any object at any distance', 'Leslie Rollover');
        console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
        return myHero;
    };
    //////// NOT SHOWN IN DOCS ////////
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    SlaveFormComponent.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    };
    return SlaveFormComponent;
}());
SlaveFormComponent = __decorate([
    core_1.Component({
        selector: 'slave-form',
        templateUrl: './slave-form.component.html',
        styleUrls: ['./slave-form.component.css']
    })
], SlaveFormComponent);
exports.SlaveFormComponent = SlaveFormComponent;
//# sourceMappingURL=slave-form.component.js.map