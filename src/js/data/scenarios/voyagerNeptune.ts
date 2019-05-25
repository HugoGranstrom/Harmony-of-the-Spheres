export default {
  name: 'The Sun and the Neptunian System',
  type: 'Solar System',
  g: 39.5,
  dt: 9e-7,
  distMax: 50,
  distMin: -50,
  rotatingReferenceFrame: 'Neptune',
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  freeOrigo: {
    x: -2118.150178902576,
    y: -1992.556723911082,
    z: 2120.3231321690787
  },
  particles: {
    max: 20000,
    size: 140,
    rings: []
  },
  massBeingModified: 'Neptune',
  primary: 'Neptune',
  maximumDistance: { name: 'Triton to Neptune * 5', value: 0.01185845755 },
  distanceStep: {
    name: 'Triton to Neptune / 100',
    value: 0.000023716915100000003
  },
  scenarioWikiUrl: 'https://en.wikipedia.org/wiki/Neptune',
  masses: [
    {
      name: 'Sun',
      x: -0.001407345721997563,
      y: 3.20690115027253e-4,
      z: -1.544945687075323e-5,
      vx: 0.0019722588614700825,
      vy: -4.944318472434034e-4,
      vz: -3.094316831387058e-5,
      trailVertices: 6e3
    },
    {
      name: 'Neptune',
      x: 5.985264329407189,
      y: -29.61054468191337,
      z: 0.471808076286421,
      vx: 1.1165054960682934,
      vy: 0.23338475849869655,
      vz: -0.030678136881423936,
      trailVertices: 6e3
    },
    {
      name: 'Triton',
      x: 5.983219998919647,
      y: -29.61173857987389,
      z: 0.4719456474814677,
      vx: 0.8451788218109715,
      vy: 0.7783966045832394,
      vz: 0.667115419424356
    },
    {
      name: 'Proteus',
      x: 5.984692714855684,
      y: -29.61108371495806,
      z: 0.471844557931718,
      vx: 2.056466374391497,
      vy: -0.8169265349935171,
      vz: -0.8043690616903206
    },
    {
      name: 'Larissa',
      m: 2.48878788345e-12,
      tilt: 0,
      type: 'asteroid',
      orbitalPeriod: 0.0015205479,
      x: 5.984814160434514,
      y: -29.61069017809711,
      z: 0.4719397014835676,
      vx: 1.4713303715037245,
      vy: -1.600654151110315,
      vz: -0.8418893015924724
    },
    {
      name: 'Galatea',
      m: 1.8854453662500002e-12,
      tilt: 0,
      type: 'asteroid',
      orbitalPeriod: 0.00117534247,
      x: 5.985125482849405,
      y: -29.61019869406991,
      z: 0.4719885125231672,
      vx: -0.8145219628906788,
      vy: -0.7661052297671012,
      vz: 0.39908422502391816
    },
    {
      name: 'Despina',
      m: 1.0558494051e-12,
      tilt: 0,
      type: 'asteroid',
      orbitalPeriod: 9.17808219e-4,
      x: 5.98546581968112,
      y: -29.61077952670712,
      z: 0.471642124564081,
      vx: 2.8905702863680354,
      vy: 1.8549675796093248,
      vz: -0.17283690048331354
    },
    {
      name: 'Thalassa',
      m: 1.0558494051e-12,
      tilt: 0,
      type: 'asteroid',
      orbitalPeriod: 9.17808219e-4,
      x: 5.985307851179991,
      y: -29.61085117941523,
      z: 0.471680745669302,
      vx: 3.3937608555928858,
      vy: 0.8540927613572222,
      vz: -0.7451846458996935
    },
    {
      name: 'Naiad',
      m: 9.552923189000001e-14,
      tilt: 0,
      type: 'asteroid',
      orbitalPeriod: 8.0547945e-4,
      x: 5.985141015537203,
      y: -29.61083746791593,
      z: 0.4717534673578492,
      vx: 3.175238005207448,
      vy: -0.3917742422527576,
      vz: -1.3296473679967924
    },
    {
      name: 'Voyager 2',
      x: 5.96584356204397,
      y: -29.57111128483145,
      z: 0.4700108732777291,
      vx: 2.6972840187146523,
      vy: -2.9352897290197966,
      vz: 0.13734806662139457,
      trailVertices: 7e4
    }
  ]
};