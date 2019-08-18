#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub leastFactorial {
    my ($n) = @_;

    my $result = 1;
    my $c = 1;

    while ($n > $result) {
        $result *= $c++;
    }

    return $result;
}
