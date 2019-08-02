#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countTriangles {
    my ($x, $y) = @_;

    my $n = @$x;
    my $result = 0;

    for (my $i = 0; $n > $i; ++$i) {
        for (my $j = $i + 1; $n > $j; ++$j) {
            for (my $k = $j + 1; $n > $k; ++$k) {
                if ((@$x[$i] - @$x[$j])*(@$y[$i] - @$y[$k]) != (@$x[$i] - @$x[$k])*(@$y[$i] - @$y[$j])) {
                    ++$result;
                }
            }
        }
    }

    return $result;
}
