const { exec } = require('child_process');
const fs = require('fs')

const args = process.argv.slice(2);
toml = args[0]
ex = args[1]
debug = args[2]

exec('npx wrangler d1 create ' + ex, (error, stdout, stderr) => {

    if(debug === "debug"){
        console.log(error,stderr);
    }

    if (error || stderr) {
        console.log("DB already created...")
        const f = fs.readFileSync(toml, "utf-8");
        if(f.indexOf("[[d1_databases]]") < 0){
            console.log("The DB need to be inserted manually to the file due to some unexpected errors...")
        }
        return;
    }

    const toappend = "[[d1_databases]]" + stdout.split("[[d1_databases]]")[1]
    fs.appendFileSync(toml, toappend);
    
});



