#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub appleBoxes {
    my ($k) = @_;

    my $result = $k * (1 + $k) >> 1;

    return ($k & 1) ? -$result : $result;
}
