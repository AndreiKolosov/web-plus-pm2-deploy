module.exports = {
  apps: [],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy":
        "cd frontend && npm i && npm run build && pm2 startOrRestart ecosystem.config.js --env production",
    },
  },
};
