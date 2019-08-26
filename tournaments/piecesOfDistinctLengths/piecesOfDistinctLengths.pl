#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub piecesOfDistinctLengths {
    my ($strawLength) = @_;

    my $result = 1;

    while (0 <= $strawLength) {
        $strawLength -= $result++;
    }

    return $result - 2;
}
