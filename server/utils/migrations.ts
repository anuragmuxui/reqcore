export function shouldSkipRuntimeMigrations(processEnv: NodeJS.ProcessEnv): 'env-toggle' | 'railway' | null {
  if (processEnv.REQCORE_RUN_MIGRATIONS_ON_START === 'false') return 'env-toggle'
  if (processEnv.RAILWAY_ENVIRONMENT_ID) return 'railway'
  return null
}
