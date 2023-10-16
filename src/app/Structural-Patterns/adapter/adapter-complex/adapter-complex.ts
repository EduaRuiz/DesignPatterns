export class RoundHole {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  fits(peg: RoundPeg): boolean {
    return this.radius >= peg.radius;
  }
}

export class RoundPeg {
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
}

export class SquarePeg {
  width: number;
  constructor(width: number) {
    this.width = width;
  }
}

export class SquarePegAdapter extends RoundPeg {
  peg: SquarePeg;
  constructor(peg: SquarePeg) {
    super(peg.width);
    this.peg = peg;
  }
  getRadius(): number {
    return (this.peg.width * Math.sqrt(2)) / 2;
  }
}

export class Application {
  constructor() {
    const hole = new RoundHole(5);
    const rpeg = new RoundPeg(5);
    console.log(hole.fits(rpeg));

    const small_sqpeg = new SquarePeg(5);
    const large_sqpeg = new SquarePeg(10);
    // hole.fits(small_sqpeg);

    const small_sqpeg_adapter = new SquarePegAdapter(small_sqpeg);
    const large_sqpeg_adapter = new SquarePegAdapter(large_sqpeg);
    console.log(hole.fits(small_sqpeg_adapter));
    console.log(hole.fits(large_sqpeg_adapter));
  }
}
