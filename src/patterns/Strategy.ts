interface ITaxation {
  calculateTax(value: number): number;
}

class Invoice implements ITaxation {
  public calculateTax(value: number): number {
    return value;
  }
}

class HeavyInvoice implements ITaxation {
  public calculateTax(value: number) {
    return value + 10;
  }
}

class EasyInvoice implements ITaxation {
  public calculateTax(value: number): number {
    return value + 1;
  }
}

class Strategy {
  private taxation: ITaxation;

  constructor(taxation: ITaxation) {
    this.taxation = taxation;
  }

  public calculeTaxationValue(value: number) {
    return this.taxation.calculateTax(value);
  }
}

(() => {
  const invoice = new Invoice();
  const invoiceStrategy = new Strategy(invoice);
  console.log("Invoice: ", invoiceStrategy.calculeTaxationValue(10));

  const heavyInvoice = new HeavyInvoice();
  const heavyStrategy = new Strategy(heavyInvoice);
  console.log("Heavy Invoice: ", heavyStrategy.calculeTaxationValue(10));

  const easyInvoice = new EasyInvoice();
  const easyStrategy = new Strategy(easyInvoice);
  console.log("Easy Invoice", easyStrategy.calculeTaxationValue(10));
})();
