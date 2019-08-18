#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isDiagonalMatrix {
    my ($matrix) = @_;

    my $n = @$matrix;

    for (my $i = 0; $n > $i; ++$i) {
        for (my $j = 0; $n > $j; ++$j) {
            if ($i != $j && @{@$matrix[$i]}[$j]) {
                return 0;
            }
        }
    }

    return 1;
}
