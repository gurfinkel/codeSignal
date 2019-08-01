#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub improperFractionToMixed {
    my ($a) = @_;
    return [int(@$a[0] / @$a[1]), @$a[0] % @$a[1], @$a[1]];
}
