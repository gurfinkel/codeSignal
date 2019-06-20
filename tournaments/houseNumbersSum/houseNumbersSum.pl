#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub houseNumbersSum {
    my ($inputArray) = @_;

    my $result = 0;
    my $index = 0;

    while (@$inputArray[$index]) {
        $result += @$inputArray[$index++];
    }

    return $result;
}
