const Options = {
  mode: "run", // run, build or package
  quiet: "info", // error, warn, info, debug, off
  // Run API
  files: null,
  version: "latest",
  flavour: "sdk",
  cacheDir: "./cache",
  platforms: [],
  currentPlatform: null,
  mirror: "https://nwjs.io/",
  downloadUrl: "https://dl.nwjs.io",
  manifestUrl: "https://nwjs.io/versions.json",
  // Build API
  appName: false,
  appVersion: false,
  buildDir: "./build",
  buildType: "default",
  forceDownload: false,
  macCredits: false,
  macIcns: false,
  macZip: null,
  macPlist: false,
  winVersionString: {},
  winIco: null,
  useRcedit: false,
  argv: [],
  // Package API
  zip: null,
  zipOptions: null,
  mergeZip: true,
};

export default Options;
