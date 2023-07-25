export const check = (tc) => {
  if (tc.length == 11 && tc[0] != "0") {
    var tek = Number(tc[0]) + Number(tc[2]) + Number(tc[4]) + Number(tc[6]) + Number(tc[8]);
    var cift = Number(tc[1]) + Number(tc[3]) + Number(tc[5]) + Number(tc[7]);
    var t10 = ((tek * 7) - cift) % 10;
    if (Number(tc[9]) == t10 && Number(tc[10]) == (cift + tek + t10) % 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}