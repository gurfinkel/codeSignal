#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub nearestRoundNumber {
    my ($value) = @_;

    if (!($value % 10)) {
        return $value;
    }

    return 10 + $value - $value % 10;
}
