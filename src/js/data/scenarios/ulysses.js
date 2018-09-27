export default {
  name: 'Ulysses - Leaving the Ecliptic',
  integrator: 'RK4',
  g: 39.5,
  law: 1.5,
  dt: 0.0004,
  scale: 100,
  elapsedTime: 0,
  distMax: 60,
  distMin: -60,
  distStep: 0.1,
  velMax: 0.5,
  velMin: -0.5,
  velStep: 0.000005,
  trails: true,
  labels: true,
  rotatingReferenceFrame: 'Sun',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigoZ: 1700,
  massBeingModified: 'Sun',
  masses: [
    {
      name: 'Sun',
      type: 'star',
      color: 'yellow',
      m: 1,
      x: 0.001907170226444396,
      y: 0.001647241859491345,
      z: -7.305366730653568e-5,
      vx: 0.0010043805367614962,
      vy: 0.00162152221387405,
      vz: -1.721189727004425e-5,
      radius: 10,
      trailVertices: 4e3
    },
    {
      name: 'Earth',
      m: 3.003e-6,
      color: 'blue',
      x: 0.6322396914935335,
      y: -0.793917085379488,
      z: -9.184117683923244e-5,
      vx: 4.8245231219195235,
      vy: 3.8781466123014257,
      vz: 3.718429833892851e-5,
      radius: 1,
      trailVertices: 12e3
    },
    {
      name: 'Jupiter',
      m: 9.543e-4,
      color: 'orange',
      x: -4.28630198321716,
      y: 3.197368623779167,
      z: 0.08273822117667205,
      vx: -1.6831332477526202,
      vy: -2.0824586261911744,
      vz: 0.046315691519436826,
      radius: 3,
      trailVertices: 6e4
    },
    {
      name: 'Ulysses',
      type: 'model',
      m: 0,
      color: 'limegreen',
      x: -3.12358029331676,
      y: 2.130050362505527,
      z: 0.0973566458988609,
      vx: -4.0624426922498955,
      vy: 0.013168650120671553,
      vz: 0.03305279658505684,
      radius: 0.8,
      trailVertices: 12e4
    }
  ]
};
