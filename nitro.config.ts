export default {
  preset: "vercel",
  output: {
    dir: ".output"
  },
  experimental: {
    server: {
      entry: true
    }
  }
};