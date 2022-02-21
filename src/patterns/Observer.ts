interface IObserver {
  sendMessage(): void;
}
interface ISubscriber {
  addSubscriber(observers: IObserver[]): void;
  removeSubscriber(observer: IObserver): void;
  notifySubscribers(): void;
}

class DigitalLibrary implements ISubscriber {
  private observers: IObserver[] = [];

  public addSubscriber(observers: IObserver[]): void {
    for (const observer of observers) {
      this.observers.push(observer);
    }
  }

  public removeSubscriber(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);

    if (!observerIndex) console.error("Observer not found.");

    this.observers.splice(observerIndex, 1);
  }

  public notifySubscribers(): void {
    for (const obs of this.observers) {
      obs.sendMessage();
    }
  }
}

class Customer implements IObserver {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  sendMessage(): void {
    console.log(`Sending message... ${this.name}`);
  }
}

(() => {
  const digitalLibrary = new DigitalLibrary();

  const customerOne = new Customer("Douglas");
  const customerTwo = new Customer("Eduardo");
  const customerThree = new Customer("Alcântara");
  const customerFour = new Customer("Lourenço");

  const observersToAdd: IObserver[] = [
    customerOne,
    customerTwo,
    customerThree,
    customerFour,
  ];

  digitalLibrary.addSubscriber(observersToAdd);

  digitalLibrary.notifySubscribers();

  digitalLibrary.removeSubscriber(customerTwo);

  digitalLibrary.notifySubscribers();
})();
