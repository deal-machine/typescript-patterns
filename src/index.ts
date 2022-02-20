import { Facade } from "./patterns/Facade";

() => {
  const facade = new Facade().handle();
  console.log(facade);
};
