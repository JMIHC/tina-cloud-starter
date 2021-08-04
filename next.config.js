const withSvgr = require("next-svgr");

export const defaultConfig = {
  target: 'server'
}

module.exports = withSvgr({
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home"
      },
    ];
  },
  target: "serverless"
});
