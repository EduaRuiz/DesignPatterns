export class Car {}
export class Manual {}

export interface Builder {
  reset(): void;
  setSeats(number: number): void;
  setEngine(engine: string): void;
  setTripComputer(): void;
  setGPS(): void;
}

export class CarBuilder implements Builder {
  private car!: Car;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Car();
  }

  setSeats(number: number): void {
    console.log('CarBuilder: setting seats');
  }

  setEngine(engine: string): void {
    console.log('CarBuilder: setting engine');
  }

  setTripComputer(): void {
    console.log('CarBuilder: setting trip computer');
  }

  setGPS(): void {
    console.log('CarBuilder: setting GPS');
  }

  getProduct(): Car {
    const product = this.car;
    this.reset();
    return product;
  }
}

export class ManualBuilder implements Builder {
  private manual!: Manual;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.manual = new Manual();
  }

  setSeats(number: number): void {
    console.log('ManualBuilder: setting seats');
  }

  setEngine(engine: string): void {
    console.log('ManualBuilder: setting engine');
  }

  setTripComputer(): void {
    console.log('ManualBuilder: setting trip computer');
  }

  setGPS(): void {
    console.log('ManualBuilder: setting GPS');
  }

  getProduct(): Manual {
    const product = this.manual;
    this.reset();
    return product;
  }
}

export class Director {
  private builder!: Builder;

  setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  constructSportsCar(builder: Builder): void {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine('sport engine');
    builder.setTripComputer();
    builder.setGPS();
  }

  constructSUV(builder: Builder): void {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine('SUV engine');
    builder.setTripComputer();
    builder.setGPS();
  }
}

export class Application {
  makeCar(): void {
    const director = new Director();
    const builder = new CarBuilder();
    director.constructSportsCar(builder);
    const car = builder.getProduct();
    console.log('Car: ', car);
  }

  makeManual(): void {
    const director = new Director();
    const builder = new ManualBuilder();
    director.constructSportsCar(builder);
    const manual = builder.getProduct();
    console.log('Manual: ', manual);
  }
}
