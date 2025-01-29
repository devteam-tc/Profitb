module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  devIndicators: {
    appIsrStatus: false,
  },
  output: 'export', // Ensures the app is exported statically
  images: {
    unoptimized: true, // Optionally, disable image optimization for static export
  },
};
