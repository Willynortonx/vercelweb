import { createClient } from "@supabase/supabase-js"

const mydb=createClient(
    process.env.DATABASEURL,
    process.env.DATABASEKEY
)

module.exports=mydb;