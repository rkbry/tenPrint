/**
 * 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
 **/
function tenPrint(cols, rows) {
  var maze = '';
  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      maze += (Math.random() > 0.5) ? '╱' : '╲';
    }
    maze += '\n';
  }
  return maze;  // console.log() it mostly
}
