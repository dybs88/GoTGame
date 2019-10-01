export const prodEnvironment = {
  production: true,
  restServerPort: 5000,
  autoAuthorize: false,
  environmentName: "Production",
  browser: function() {
    const ua = window.navigator.userAgent;

    if (ua.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (ua.indexOf("Chrome") > -1) {
      return "Chrome";
    }
  }
};
