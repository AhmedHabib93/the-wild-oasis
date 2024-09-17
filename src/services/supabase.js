import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nuajmqrantijzxfkpwjf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51YWptcXJhbnRpanp4Zmtwd2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5MTg5OTAsImV4cCI6MjA0MDQ5NDk5MH0.G-t9djj6lznqCbuLsgTURCDnhwMK8r4d2oYKvrv6SoM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
