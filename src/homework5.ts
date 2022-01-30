export abstract class MyGraphicsPrimitive2D {
  protected height: number
  protected width: number
  protected x: number
  protected y: number

  constructor(height: number, width: number, x: number, y: number) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  move(moveX: number, moveY: number) {
    this.x = this.x + moveX;
    this.y = this.y + moveY;

    return [this.x, this.y];
  }
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  private square: number;

  constructor(height: number, width: number, x: number, y: number) {
    super(height, width, x, y);

    this.square = this.height * this.width;
  }

  getSquare() {
    return this.square
  }
}

export class MyCircle extends MyAreaPrimitive2D {
  private circleCenter: number[];
  private radius: number;

  constructor(height: number, width: number, x: number, y: number) {
    super(height, width, x, y);

    this.circleCenter = [this.x, this.y];
    this.radius = this.width;
  }

  getCircleCenter() {
    return this.circleCenter;
  }

  getRadius() {
    return this.radius;
  }
}


export class MyRectangle extends MyAreaPrimitive2D {
  private rectangleWidth: number;
  private rectangleHeight: number;
  private leftBorder: number[];
  private rightBorder: number[];

  constructor(height: number, width: number, x: number, y: number) {
    super(height, width, x, y);

    this.rectangleWidth = this.width;
    this.rectangleHeight = this.height;
    this.leftBorder = [this.x, this.y + this.height];
    this.rightBorder = [this.x + this.width, this.y];
  }

  getRectangleWidth() {
    return this.rectangleWidth;
  }

  getRectangleHeight() {
    return this.rectangleHeight;
  }

  getLeftBorder() {
    return this.leftBorder;
  }

  getRightBorder() {
    return this.rightBorder;
  }
}
