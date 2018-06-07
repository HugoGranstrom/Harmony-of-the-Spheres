export default {
  name: 'The Jovian System',
  playing: false,
  decorativeSun: true,
  g: 39.5,
  law: 1.5,
  dt: 9e-6,
  scale: 300,
  trails: true,
  labels: true,
  initialCameraZ: 4,
  cameraPosition: 'Free',
  cameraFocus: 'Origo',
  masses: [
    {
      name: 'Jupiter',
      color: 'orange',
      m: 9.543e-4,
      x: -7.059720449635489e-9,
      y: -3.458205558367953e-7,
      z: -8.560595128944146e-9,
      vx: 1.2011206801885418e-4,
      vy: -1.4404565860802778e-5,
      vz: 1.85765499287888e-6,
      trailVertices: 500,
      radius: 0.1
    },
    {
      name: 'Io',
      color: 'yellow',
      m: 4.490848296995278e-8,
      x: 4.123396684098477e-4,
      y: -0.00277546561117049,
      z: -9.213389019387901e-5,
      vx: 3.632459716708889,
      vy: 0.5331313883142663,
      vz: 0.07191321713719195,
      trailVertices: 1100,
      radius: 0.01
    },
    {
      name: 'Europa',
      color: 'white',
      m: 2.413291634272764e-8,
      x: 2.31315012572641e-4,
      y: -0.004516461518956031,
      z: -1.948699591675548e-4,
      vx: 2.867825888888589,
      vy: 0.1479315881074277,
      vz: 0.053531172951165384,
      trailVertices: 2e3,
      radius: 0.01
    },
    {
      name: 'Ganymede',
      color: 'lightblue',
      m: 7.450777301989e-8,
      x: -0.007162482360743344,
      y: -1.26082702584475e-5,
      z: -9.466593207081436e-5,
      vx: 0.009854944632595801,
      vy: -2.2904667534862946,
      vz: -0.08642422976208332,
      trailVertices: 5e3,
      radius: 0.015
    },
    {
      name: 'Callisto',
      color: 'grey',
      m: 5.40965639150398e-17,
      x: -0.01163958701040644,
      y: -0.005000778655901151,
      z: -3.148071350588741e-4,
      vx: 0.6828251398971682,
      vy: -1.5765023231560384,
      vz: -0.040977438627834185,
      trailVertices: 12e3,
      radius: 0.01
    }
  ]
};