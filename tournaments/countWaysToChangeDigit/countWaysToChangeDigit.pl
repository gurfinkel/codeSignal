#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countWaysToChangeDigit {
    my ($value) = @_;

    my $result = 0;

    while (0 < $value) {
        $result += (9 - $value % 10);
        $value = int($value / 10);
    }

    return $result;
}
