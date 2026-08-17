import { describe, expect, it } from 'vitest'
import { shouldSkipRuntimeMigrations } from '../../server/utils/migrations'

describe('shouldSkipRuntimeMigrations', () => {
  it('skips when env toggle is disabled', () => {
    expect(shouldSkipRuntimeMigrations({
      REQCORE_RUN_MIGRATIONS_ON_START: 'false',
    })).toBe('env-toggle')
  })

  it('skips on Railway', () => {
    expect(shouldSkipRuntimeMigrations({
      RAILWAY_ENVIRONMENT_ID: 'railway-env',
    })).toBe('railway')
  })

  it('runs migrations by default', () => {
    expect(shouldSkipRuntimeMigrations({})).toBeNull()
  })
})
