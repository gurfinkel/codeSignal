#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub applesDistribution {
    my ($apples, $boxCapacity, $maxResidue) = @_;

    my $result = 0;

    for (my $i = 1; $boxCapacity >= $i; ++$i) {
        if ($apples % $i <= $maxResidue) {
            ++$result;
        }
    }

    return $result;
}
