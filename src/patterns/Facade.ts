class User {
  private name: string;
  private birthDate: Date;
  private age: Object;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  public getUser() {
    return { name: this.name, birthDate: this.birthDate };
  }

  public getAge() {
    const getAgeYears = this.birthDate.getFullYear();

    const getAgeMonths = this.birthDate.getMonth();

    this.age = { years: getAgeYears, months: getAgeMonths };

    return this.age;
  }
}

class ConvertDates {
  private dateToConvert: Date;

  constructor(dateToConvert: Date) {
    this.dateToConvert = dateToConvert;
  }

  public convert() {
    return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(
      this.dateToConvert
    );
  }
}

class Facade {
  public handle() {
    const user = new User("Douglas Eduardo", new Date("1995-04-28"));

    const age = user.getAge();
    const { name, birthDate } = user.getUser();

    const convertDate = new ConvertDates(birthDate);
    const formatedDate = convertDate.convert();

    return { name, age, birthDate: formatedDate };
  }
}

export { Facade };
