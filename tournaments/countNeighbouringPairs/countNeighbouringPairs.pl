#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countNeighbouringPairs {
    my ($inputString) = @_;

    my $result = 0;
    my @store = split '', $inputString;

    for (my $i = 0; @store > $i + 1; ++$i) {
        if ($store[$i] eq $store[$i + 1]) {
            ++$result;
        }
    }

    return $result;
}
