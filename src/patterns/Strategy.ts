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
