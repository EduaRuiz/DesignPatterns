interface DevilFruit {
  name: string;
  ability(): void;
}

class ParameciaFruit implements DevilFruit {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  ability(): void {
    console.log(`The ${this.name} fruit gives the user a superhuman ability.`);
  }
}

class ZoanFruit implements DevilFruit {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  ability(): void {
    console.log(
      `The ${this.name} fruit gives the user the ability to transform into an animal.`
    );
  }
}

class LogiaFruit implements DevilFruit {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  ability(): void {
    console.log(
      `The ${this.name} fruit gives the user the ability to transform into an element.`
    );
  }
}

interface DevilFruitFactory {
  createDevilFruit(name: string): DevilFruit;
}

class ParameciaFruitFactory implements DevilFruitFactory {
  createDevilFruit(name: string): DevilFruit {
    return new ParameciaFruit(name);
  }
}

class ZoanFruitFactory implements DevilFruitFactory {
  createDevilFruit(name: string): DevilFruit {
    return new ZoanFruit(name);
  }
}

class LogiaFruitFactory implements DevilFruitFactory {
  createDevilFruit(name: string): DevilFruit {
    return new LogiaFruit(name);
  }
}

const a = (name: string, factory: DevilFruitFactory) => {
  const devilFruit = factory.createDevilFruit(name);
  devilFruit.ability();
};

a('Gomu Gomu no Mi', new ParameciaFruitFactory());
a('Hito Hito no Mi', new ZoanFruitFactory());
a('Mera Mera no Mi', new LogiaFruitFactory());
