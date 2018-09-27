export default {
  name: 'The Sun, Earth and Moon System',
  integrator: 'RK4',
  playing: false,
  g: 39.5,
  law: 1.5,
  dt: 5e-5,
  scale: 300,
  elapsedTime: 0,
  distMax: 0.00713911058,
  collisions: true,
  distMin: -0.00713911058,
  distStep: 2.3797035266666667e-6,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 5e-6,
  trails: true,
  labels: true,
  rotatingReferenceFrame: 'Earth',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigoZ: 5,
  massBeingModified: 'Sun',
  masses: [
    {
      name: 'Earth',
      color: 'blue',
      m: 3.003e-6,
      x: 0.9939017404234283,
      y: 0.1352478854409775,
      z: -5.63711820259021e-5,
      vx: -0.9740470647877054,
      vy: 6.197562901988265,
      vz: 4.1377604204935426e-4,
      trailVertices: 2e4,
      radius: 0.1
    },
    {
      name: 'Sun',
      type: 'star',
      color: 'yellow',
      m: 1,
      x: 0.00257729957449904,
      y: -0.004392340734313888,
      z: -6.978730929619852e-5,
      vx: 0.0029586689261267758,
      vy: 1.3186850299206433e-4,
      vz: -8.036276531728809e-5,
      trailVertices: 2e4,
      radius: 5
    },
    {
      name: 'Moon',
      m: 3.69396868e-8,
      color: 'grey',
      x: 0.9956218231659631,
      y: 0.1372984436242337,
      z: -1.963882374615497e-4,
      vx: -1.1283327200261632,
      vy: 6.334444083774614,
      vz: -0.015608356925550449,
      trailVertices: 2e4,
      radius: 0.025
    }
  ]
};
