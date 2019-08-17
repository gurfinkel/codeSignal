#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub mixedFractionToImproper {
    my ($a) = @_;

    return [$$a[0] * $$a[2] + $$a[1], $$a[2]];
}
