let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
// m== rows
// n == cols
SpiralTrans(mat, mat.length, mat.length);
function SpiralTrans(mat, m, n) {
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = m - 1;
  let out = "";
  let c = 0;
  while (c < n * m) {
    for (var i = left; i <= right && c < n * m; i++) {
      out = out + mat[top][i] + " ";
      c++;
    }
    top++;
    for (var i = top; i <= bottom && c < n * m; i++) {
      out = out + mat[i][right] + " ";
      c++;
    }
    right--;
    for (var i = right; i >= left && c < n * m; i--) {
      out = out + mat[bottom][i] + " ";
      c++;
    }
    bottom--;
    for (var i = bottom; i >= top && c < n * m; i--) {
      out = out + mat[i][left] + " ";
      c++;
    }
    left++;
  }
  console.log(out);
}
