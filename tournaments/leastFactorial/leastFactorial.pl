#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub leastFactorial {
    my ($n) = @_;

    my $result = 1;
    my $x = 1;

    while ($n > $result) {
        $result *= $x++;
    }

    return $result;
}
