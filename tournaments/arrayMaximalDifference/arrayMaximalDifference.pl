#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayMaximalDifference {
    my ($inputArray) = @_;

    my @sortedInputArray = sort { $a <=> $b } @$inputArray;

    return $sortedInputArray[$#sortedInputArray] - $sortedInputArray[0];
}
