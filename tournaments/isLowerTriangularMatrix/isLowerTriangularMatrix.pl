#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isLowerTriangularMatrix {
    my ($matrix) = @_;

    my $n = @$matrix;

    for (my $i = 0; $n > $i; ++$i) {
        for (my $j = 1 + $i; $n > $j; ++$j) {
            if (@{@$matrix[$i]}[$j]) {
                return 0;
            }
        }
    }

    return 1;
}
