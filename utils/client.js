
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkvuwlppkldwmaptmvfq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrdnV3bHBwa2xkd21hcHRtdmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NzgyNDksImV4cCI6MjA1NDA1NDI0OX0.cflyz33leXoQ1iK0RLGlbRnxf287pOXOs9RyRMQvciQ'
export const supabase = createClient(supabaseUrl, supabaseKey)