#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub properOrImproper {
    my ($a) = @_;
    return 1 > abs($$a[0] / $$a[1]) ? 'Proper' : 'Improper';
}
