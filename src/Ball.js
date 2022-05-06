import Circle from "./Circle.js";

const BALL_RADIUS = 20;

const defaultState = {
  label: "ball",
  frictionAir: 0,
  friction: 0.00006,
  restitution: 0.8,
  inertia: Infinity,
  inverseInertia: 0,
  render: {
    fillStyle: "#f99",
    lineWidth: 5,
    strokeStyle: "black",
    visible: true,
  },
};

/**
 * @class Ball
 */
class Ball extends Circle {
  /**
   *
   * @param {Tile} tile - the tile you want the ball to start in
   */
  constructor(tile) {
    super(tile, 0, 0, BALL_RADIUS, true, defaultState);
    this.defaultRender = defaultState.render;
    const radius = BALL_RADIUS; // read-only
  }

  /**
   * Resets the ball to its defualt state
   */
  moveTile(active_tile) {
    this.body.collisionFilter.group = active_tile + 1;
    this.body.collisionFilter.mask = 0; // don't touch this
    Matter.Body.set(this.body, defaultState);
  }
}

export default Ball;
