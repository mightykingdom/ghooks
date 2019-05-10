exports.getNodePath = function getNodePath() {
  switch (process.platform) {
  	case 'win32':
  	  return 'c:\\progra~1\\nodejs\\'
  }
}
