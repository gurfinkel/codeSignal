#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub lrSegmentNumber {
    my ($l, $r) = @_;

    my $result = 0;

    for (my $i = $l; $r >= $i; ++$i) {
        $result = 10 * $result + $i;
    }

    return $result;
}
