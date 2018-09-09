const express = require('express'),
      app = express();

/**
 * Parser for the command line arguments
 * @param  {Array}  args         Command line arguments
 * @param  {String} separator    Argument separator
 * @param  {[Any]}  defaultValue Default value for argument without value
 * @return {Object}              Object structure of each arguments
 */
function arrayArgsToObj(args, separator='--', defaultValue=undefined) {
  let lastKey = undefined; // Last argument key found

  // Reduce args array to arg object
  return args.reduce(function(obj, val) {

    // Argument separator found
    if (separator === val.substr(0, separator.length)) {
      lastKey = val.substr(separator.length, val.length);
      obj[lastKey] = defaultValue;

      //console.log(`Add key ${lastKey}`)
    }

    // Add value to last found argument
    else if (lastKey) {
      //console.log(`Add value "${val}" to last key ${lastKey}`)

      obj[lastKey] = val;
      lastKey = undefined;
    }

    return obj;
  }, {});
}



/**
 * MAIN PROCESS
 */
// Parse the command line arguments
const args = arrayArgsToObj(process.argv, '--', true);

if (args.verbose) {
  console.log('ExpressStatic Definition:')
  console.log(args)
}

// Configure public directory
app.use(express.static(args.public))

// Bind the listen port
app.listen(args.port, function() {
  console.log(`\nExpressStatic is listening on port ${args.port}`)
})
