import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nmwyxtvbrsgwdzwwyzov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5td3l4dHZicnNnd2R6d3d5em92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyNDgyMjYsImV4cCI6MjA0MTgyNDIyNn0.lXwiVRWBAjpm3BAUQGrO02R6193-OvUIvXmBMXfWnYE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
