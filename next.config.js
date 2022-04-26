module.exports = {
  reactStrictMode: true,
  trailingSlash: true, //slash 기준 폴더 -> 파일 형식으로 배포하겠다.
  generateBuildId: () => "freeboard-test-deploy-1", //ssr, ssg 동일한 파일이라고 인식시킴
  exportPathMap: () => ({
    //정적으로(storage)에서 받아올 파일
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
    "/Freeboard-api": { page: "/Freeboard-api" },
    "/market": { page: "/market" },
    "/mypage": { page: "/mypage" },
  }),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
