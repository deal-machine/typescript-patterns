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
    const ageYear = this.birthDate.getFullYear();
    const ageMonth = this.birthDate.getMonth() + 1;
    const actualYear = new Date().getFullYear();
    const actualMonth = new Date().getMonth() + 1;

    const months = actualMonth - ageMonth;
    let years = months < 0 ? actualYear - ageYear - 1 : actualYear - ageYear;

    this.age = {
      years,
      months: months + 12,
    };

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
  public handle(name: string, birthDate: Date) {
    const user = new User(name, birthDate);

    const age = user.getAge();
    const { name: userName, birthDate: userBirthDate } = user.getUser();

    const convertDate = new ConvertDates(userBirthDate);
    const formatedDate = convertDate.convert();

    return { name: userName, age, birthDate: formatedDate };
  }
}

(() => {
  const userConverted = new Facade().handle(
    "Douglas Eduardo",
    new Date("1998-03-13")
  );

  console.log(userConverted);
})();
