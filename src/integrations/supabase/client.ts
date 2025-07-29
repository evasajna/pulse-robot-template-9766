// integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types' // keep this if you have typed schema

const SUPABASE_URL = "https://gzbvyvzsuscexdhtioxe.supabase.co"
const SUPABASE_PUBLISHABLE_KEY = "YOUR_NEW_ANON_KEY" // replace with your new anon/public key

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
})
