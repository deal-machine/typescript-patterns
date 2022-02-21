abstract class Character {
  public templateMethod() {
    this.walk();
    this.jump();
    this.fight();
    this.magicPower();
  }
  protected walk(): void {
    console.log("Walking...");
  }

  protected jump(): void {
    console.log("Jumping...");
  }

  protected abstract fight(): void;

  protected abstract magicPower(): void;
}

class Warrior extends Character {
  protected fight() {
    console.log("Fighting...");
  }
  protected magicPower(): void {
    console.log("Cannot use magic...");
  }
}

class Wizard extends Character {
  protected walk(): void {
    console.log("Slowly Walking...");
  }

  protected jump(): void {
    console.log("Cannot Jump...");
  }
  protected fight() {
    console.log("Cannot Fight...");
  }
  protected magicPower(): void {
    console.log("Powered by magic...");
  }
}

(() => {
  new Warrior().templateMethod();

  new Wizard().templateMethod();
})();
