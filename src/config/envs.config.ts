const baseConfig = {
  app_name: process.env.APP_NAME || 'netflix-movies',
  env: process.env.NODE_ENV || 'local',
  mongoConnection: {
    uri:
      process.env.MONGO_DB_URI ||
      'mongodb://localhost:27017/?authMechanism=DEFAULT',
    user: process.env.MONGO_DB_USER || 'root',
    pass: process.env.MONGO_DB_PASS || 'root',
    dbName: process.env.MONGO_DB_NAME || 'netflix-movies',
    tls: process.env.MONGO_DB_TLS || true,
  },
};

const setVarsEnv = (aditionalEnvConfig = {}) => {
  return { ...baseConfig, aditionalEnvConfig };
};

export const environmentConfig = {
  local: setVarsEnv(),
  test: setVarsEnv(),
  int: setVarsEnv(),
  qa: setVarsEnv(),
  prod: setVarsEnv(),
};
