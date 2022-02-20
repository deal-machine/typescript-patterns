class Store {
  private static instance: Store;
  private data: number[] = [];

  public static getInstance(): Store {
    if (!Store.instance) Store.instance = new Store();

    return this.instance;
  }

  public setData(data: number) {
    this.data.push(data);
  }

  public getData() {
    return this.data;
  }
}

(() => {
  const storeOne = Store.getInstance();
  storeOne.setData(1);
  console.log("Singleton Data Instance 1: ", storeOne.getData());

  const storeTwo = Store.getInstance();
  storeTwo.setData(2);
  console.log("Singleton Data Instance 2", storeTwo.getData());

  console.log("Is instances equals? ", storeOne === storeTwo);
})();
