#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divisorsSubset {
    my ($subset, $n) = @_;
    my $result = 0;

    for (my $i = 1; $n >= $i; ++$i) {
        my $c = 1;
        for (my $j = 0; @$subset > $j; ++$j) {
            if ($i % $$subset[$j]) {
                $c = 0;
            }
        }
        if ($c) {
            ++$result;
        }
    }

    return $result;
}
