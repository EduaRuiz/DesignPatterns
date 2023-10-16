var PirateSubject = /** @class */ (function () {
    function PirateSubject() {
        this.observers = [];
    }
    PirateSubject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    PirateSubject.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    PirateSubject.prototype.notifyObservers = function (action) {
        this.observers.forEach(function (observer) {
            observer.update(action);
        });
    };
    return PirateSubject;
}());
var CrewMember = /** @class */ (function () {
    function CrewMember(name) {
        this.name = name;
    }
    CrewMember.prototype.update = function (action) {
        console.log("".concat(this.name, " observa: Luffy realiza la acci\u00F3n - ").concat(action));
    };
    return CrewMember;
}());
var Ship = new PirateSubject();
var zoro = new CrewMember('Zoro');
var nami = new CrewMember('Nami');
var usopp = new CrewMember('Usopp');
Ship.addObserver(zoro);
Ship.addObserver(nami);
Ship.addObserver(usopp);
Ship.notifyObservers('Gomu Gomu no Pistol');
