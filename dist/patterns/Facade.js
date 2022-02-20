"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facade = void 0;
class User {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    getUser() {
        return { name: this.name, birthDate: this.birthDate };
    }
    getAge() {
        const getAgeYears = this.birthDate.getFullYear();
        const getAgeMonths = this.birthDate.getMonth();
        this.age = { years: getAgeYears, months: getAgeMonths };
        return this.age;
    }
}
class ConvertDates {
    constructor(dateToConvert) {
        this.dateToConvert = dateToConvert;
    }
    convert() {
        return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(this.dateToConvert);
    }
}
class Facade {
    handle() {
        const user = new User("Douglas Eduardo", new Date("1995-04-28"));
        const age = user.getAge();
        const { name, birthDate } = user.getUser();
        const convertDate = new ConvertDates(birthDate);
        const formatedDate = convertDate.convert();
        return { name, age, birthDate: formatedDate };
    }
}
exports.Facade = Facade;
//# sourceMappingURL=Facade.js.map