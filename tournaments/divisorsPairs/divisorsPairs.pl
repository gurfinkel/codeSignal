#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divisorsPairs {
    my ($sequence) = @_;

    my $len = @$sequence;
    my $result = 0;

    for (my $i = 0; $len > $i; ++$i) {
        for (my $j = $i + 1; $len > $j; ++$j) {
            unless ((@$sequence[$i] % @$sequence[$j]) && (@$sequence[$j] % @$sequence[$i])) {
                ++$result;
            }
        }
    }

    return $result;
}
