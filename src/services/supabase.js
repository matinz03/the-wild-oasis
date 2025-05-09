import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://boexjtaembwyqvzipxbr.supabase.co'
const supabaseKey ="Dashagh"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
