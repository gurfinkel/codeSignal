#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countSumOfTwoRepresentations {
    my ($n, $l, $r) = @_;

    my $result = 0;

    for (my $i = $l; $r >= $i; ++$i) {
        for (my $j = $i; $r >= $j; ++$j) {
            if ($n == $i + $j) {
                ++$result;
            }
        }
    }

    return $result;
}
