#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub adjacentElementsProduct {
    my ($inputArray) = @_;

    my $result = $$inputArray[0] * $$inputArray[1];

    for (my $i = 1; @$inputArray - 1 > $i; ++$i) {
        if ($result < $$inputArray[$i] * $$inputArray[$i + 1]) {
            $result = $$inputArray[$i] * $$inputArray[$i + 1];
        }
    }

    return $result;
}
