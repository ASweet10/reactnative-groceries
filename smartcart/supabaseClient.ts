import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnjfsdqnfnogexuobwwo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuamZzZHFuZm5vZ2V4dW9id3dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MzU4MzIsImV4cCI6MjA3MTQxMTgzMn0.IF6kX9XKic95tEsCe-BEzVj7BWx-ddThnJF5dezJyb0'
export const supabase = createClient(supabaseUrl, supabaseKey)
