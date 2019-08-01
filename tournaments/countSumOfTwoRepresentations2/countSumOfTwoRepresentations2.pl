#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countSumOfTwoRepresentations2 {
    my ($n, $l, $r) = @_;

    my $result = 0;

    while ($l <= $r) {
        if ($n - $l <= $r && $l << 1 <= $n) {
            ++$result;
        }
        ++$l;
    }

    return $result;
}
