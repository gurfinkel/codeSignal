#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub circleOfNumbers {
    my ($n, $firstNumber) = @_;

    return ($firstNumber + $n / 2) % $n;
}
