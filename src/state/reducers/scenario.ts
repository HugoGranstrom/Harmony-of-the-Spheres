import {
  ScenarioActionTypes,
  GET_SCENARIO,
  MODIFY_SCENARIO_PROPERTY,
  MODIFY_MASS_PROPERTY,
  ADD_MASS,
  DELETE_MASS
} from "../types/scenario";

export default (
  state = {
    name: "Earth Spoils Saturn",
    particlesFun: false,
    type: "Misc",
    integrator: "RK4",
    g: 39.5,
    dt: 0.000002,
    rotatingReferenceFrame: "Saturn",
    cameraPosition: "Free",
    cameraFocus: "Saturn",
    massBeingModified: "Saturn",
    distMax: 50,
    distMin: -50,
    primary: "Saturn",
    maximumDistance: { name: "Titan to Saturn * 2", value: 0.01633512555 },
    distanceStep: {
      name: "Titan to Saturn / 200",
      value: 0.000040837813874999996
    },
    scenarioWikiUrl: "https://en.wikipedia.org/wiki/Saturn",
    particles: {
      max: 60000,
      softening: 0,
      size: 50,
      shapes: [
        {
          primary: "Saturn",
          type: "getRingParticle",
          flatLand: true,
          tilt: [-26.73, 0, 0],
          number: 30000,
          minD: 0.0006749650466666667,
          maxD: 0.00111244757
        }
      ]
    },
    barycenterMassOne: "Earth",
    barycenterMassTwo: "Sun",
    tol: 1e-12,
    maxDt: 1e-7,
    minDt: 1e-22,
    drawLineEvery: 6,
    isLoaded: false,
    playing: false,
    customCameraToBodyDistanceFactor: false,
    barycenterZ: 10000,
    elapsedTime: 0,
    useBarnesHut: false,
    theta: 0.5,
    collisions: true,
    habitableZone: false,
    referenceOrbits: false,
    softeningConstant: 0,
    systemBarycenter: true,
    logarithmicDepthBuffer: false,
    scale: 2100000,
    barycenter: false,
    trails: true,
    labels: true,
    trajectoryRendevouz: {
      x: 0,
      y: 0,
      z: 0,
      p: { x: 0, y: 0, z: 0, t: 0 }
    },
    velMax: 5,
    velMin: -5,
    velStep: 0.00000185765499287888,
    isMassBeingAdded: false,
    a: 0,
    e: 0,
    w: 0,
    i: 0,
    o: 0,
    masses: [
      {
        name: "Saturn",
        x: 1.455395947628908,
        y: -9.949880746961366,
        z: 0.1150689429678489,
        vx: 1.904060271026863,
        vy: 0.2886523546718628,
        vz: -0.08092749245870556,
        trailVertices: 3000,
        spacecraft: false,
        bump: false,
        type: "sphere",
        luminosity: 0,
        temperature: 0,
        m: 0.0002857,
        radius: 862.3853211009175,
        tilt: -26.73,
        orbitalPeriod: 29.46,
        texture: "Saturn",
        bodyType: "Planet",
        color: "beige"
      },
      {
        name: "Sun",
        x: -0.00001135841603717545,
        y: 0.007200805435052814,
        z: -0.00007608241832106424,
        vx: -0.0027531411153919037,
        vy: 0.0010072803591140611,
        vz: 0.0000687504175911851,
        m: 1,
        radius: 42767.441860465115,
        type: "star",
        bump: false,
        luminosity: 1,
        color: "#ffffff",
        temperature: 5000,
        tilt: 0,
        spacecraft: false,
        orbitalPeriod: 0
      },
      {
        m: 0.000003003,
        radius: 91.74311926605505,
        tilt: -23.44,
        orbitalPeriod: 0.05,
        name: "Earth",
        bump: true,
        bodyType: "Planet",
        color: "skyblue",
        texture: "Earth",
        spacecraft: false,
        type: "sphere",
        luminosity: 0,
        temperature: 0,
        vx: 1.904060271026863,
        vy: 3.2523894933628767,
        vz: -0.08092749245870556,
        x: 1.456680725273908,
        y: -9.949880746961366,
        z: 0.1150689429678489
      }
    ]
  },
  action: ScenarioActionTypes
) => {
  switch (action.type) {
    case GET_SCENARIO:
      return { ...state, ...action.scenario };

    case MODIFY_SCENARIO_PROPERTY:
      return { ...state, [action.payload.key]: action.payload.value };

    case MODIFY_MASS_PROPERTY:
      return {
        ...state,
        masses: state.masses.map((mass: MassType) => {
          if (mass.name === action.payload.name) {
            return { ...mass, [action.payload.key]: action.payload.value };
          }
          return mass;
        })
      };

    case ADD_MASS:
      return { ...state, masses: [...state.masses, action.payload] };

    case DELETE_MASS: {
      const index = state.masses
        .map((mass: MassType) => mass.name)
        .indexOf(action.name);

      const newMasses = state.masses.filter(
        (mass: MassType, i: number) => index !== i
      );

      let newState;

      if (!newMasses.length)
        newState = {
          ...state,
          massBeingModified: "There are no masses",
          masses: newMasses,
          rotatingReferenceFrame: "Origo",
          cameraFocus: "Origo"
        };
      else
        newState = {
          ...state,
          massBeingModified: newMasses[0].name,
          masses: newMasses,
          rotatingReferenceFrame:
            action.name !== state.rotatingReferenceFrame
              ? state.rotatingReferenceFrame
              : newMasses[0].name,
          cameraFocus:
            action.name !== state.cameraFocus
              ? state.cameraFocus
              : newMasses[0].name
        };

      return newState;
    }

    default:
      return state;
  }
};