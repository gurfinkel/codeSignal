bool isInsideTheCircle(int xa, int ya, int xc, int yc, int rc) {
  int dist = (xa - xc) * (xa - xc) + (ya - yc) * (ya - yc);
  rc *= rc;
  if (dist < rc) {
    return true;
  }
  return false;
}
