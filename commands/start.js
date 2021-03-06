var summary = require('./summary');
var git = require('../lib/git');

var start = function (key) {
  var name = summary(key).shift();
  var result = [];
  var branch = git.featureBranchName([key, name].join(' '));


  // create branch if does not exist
  if (!git.branchExists(branch)) {
    git.createBranch(branch);
    result.push('Branch `' + branch + '` created');
  }
  git.checkoutBranch(branch);
  result.push('Checked out branch `' + branch + '`');

  return result;
};

start.help = [
  'jira start <issue key>'
];

module.exports = start;



