import { createClient } from "@supabase/supabase-js"

const mydb=creatClient(
    process.env.DATABASEURL,
    process.env.DATABASEKEY
)

module.exports=mydb;