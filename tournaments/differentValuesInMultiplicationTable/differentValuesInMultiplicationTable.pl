#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub differentValuesInMultiplicationTable {
    my ($n, $m) = @_;

    use List::Util qw[min max];

    my $result = 0;

    for (my $i = 1; $n * $m >= $i; ++$i) {
        for (my $j = 1; min($n, $m) >= $j; ++$j) {
            if (max($n, $m) >= $i / $j && !($i % $j)) {
                ++$result;
                last;
            }
        }
    }

    return $result;
}
