#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divisorsSubset {
    my ($subset, $n) = @_;

    my $result = 0;

    for (my $i = 1; $n >= $i; ++$i) {
        my $x = 1;
        for (my $j = 0; @$subset > $j; ++$j) {
            if ($i % $$subset[$j]) {
                $x = 0;
            }
        }
        if ($x) {
            ++$result;
        }
    }

    return $result;
}
