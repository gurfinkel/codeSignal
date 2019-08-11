#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub magicalWell {
    my ($a, $b, $n) = @_;

    my $result = 0;

    while ($n--) {
        $result += $a++ * $b++;
    }

    return $result;
}
