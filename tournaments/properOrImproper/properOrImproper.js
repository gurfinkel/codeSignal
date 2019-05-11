function properOrImproper(a) {
    if (1 > Math.abs(a[0] / a[1])) return 'Proper';
    return 'Improper';
}
