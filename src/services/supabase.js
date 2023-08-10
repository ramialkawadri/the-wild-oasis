import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://kleahkikbqonbvwqkcbm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZWFoa2lrYnFvbmJ2d3FrY2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODM5NjQsImV4cCI6MjAwNzE1OTk2NH0.vn-CHAhCgKnSP41HfY359POdU7mnr9VWCCOf5jSA3Es";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
