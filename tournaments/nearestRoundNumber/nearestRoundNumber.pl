#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub nearestRoundNumber {
    my ($value) = @_;

    return ($value % 10) ? 10 + $value - $value % 10 : $value;
}
