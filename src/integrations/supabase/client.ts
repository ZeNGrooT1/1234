
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xxoedzhqeffettmidzpx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4b2VkemhxZWZmZXR0bWlkenB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NjE0NDIsImV4cCI6MjA1NjEzNzQ0Mn0.Sryhg-SmPQSBoIhMIOlgNZiziOW0cKtD8Y8uL2xS6Z4";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
