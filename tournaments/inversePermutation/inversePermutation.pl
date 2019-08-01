#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub inversePermutation {
    my ($permutation) = @_;

    my @result = (0) * @$permutation;

    for (my $i = 0; @$permutation > $i; ++$i) {
        $result[@$permutation[$i] - 1] = $i + 1;
    }

    return \@result;
}
