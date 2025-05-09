import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://boexjtaembwyqvzipxbr.supabase.co'
const supabaseKey = env.supabaseKey
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
