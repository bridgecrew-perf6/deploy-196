module.exports = {
  reactStrictMode: true,
  trailingSlash: true, //slash 기준 폴더 -> 파일 형식으로 배포하겠다.
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};