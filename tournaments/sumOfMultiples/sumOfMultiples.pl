#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub sumOfMultiples {
    my ($n, $k) = @_;

    my $result = 0;

    for (my $i = $k; $n >= $i; $i += $k) {
        $result += $i;
    }

    return $result;
}
