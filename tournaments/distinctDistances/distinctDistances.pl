#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub distinctDistances {
    my ($distances) = @_;

    my $result = 1;

    if ($$distances[1] != @$distances[0]) {
        ++$result;
    }
    if ($$distances[1] != @$distances[$#$distances]) {
        ++$result;
    }
    if ($$distances[1] + @$distances[0] < @$distances[$#$distances]) {
        ++$result;
    }

    return $result;
}
