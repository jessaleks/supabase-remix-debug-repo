import type { Database } from '../db_types';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export default createClient<Database>(supabaseUrl!, supabaseKey!);
