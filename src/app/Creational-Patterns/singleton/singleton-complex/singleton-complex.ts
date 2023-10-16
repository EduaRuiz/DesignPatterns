class Singleton {
  private static instance: Singleton;
  private name = 'Singleton';
  private constructor(name: string) {}
  public static getInstance(name: string): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(name);
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    console.log("Singleton: The singleton's name is " + this.name + '.');
  }
}

function clientCode() {
  const s1 = Singleton.getInstance('s1');
  const s2 = Singleton.getInstance('s2');
  s1.someBusinessLogic();
  s2.someBusinessLogic();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.');
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();
