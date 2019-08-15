#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub rightmostRoundNumber {
    my ($inputArray) = @_;

    for (my $i = @$inputArray - 1; 0 <= $i; --$i) {
        unless ($$inputArray[$i] % 10) {
            return $i;
        }
    }

    return -1;
}
