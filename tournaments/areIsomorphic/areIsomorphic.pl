#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub areIsomorphic {
    my ($array1, $array2) = @_;

    unless (@$array1 == @$array2) {
        return 0;
    }

    for (my $i = 0; @$array1 > $i; ++$i) {
        unless (@{$$array1[$i]} == @{$$array2[$i]}) {
            return 0;
        }
    }

    return 1;
}
