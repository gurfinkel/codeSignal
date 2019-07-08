#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayChange {
    my ($inputArray) = @_;

    my $result = 0;

    for (my $i = 1; @$inputArray > $i; ++$i) {
        if (@$inputArray[$i] <= @$inputArray[$i - 1]) {
            $result += (1 + @$inputArray[$i - 1] - @$inputArray[$i]);
            @$inputArray[$i] = 1 + @$inputArray[$i - 1];
        }
    }

    return $result;
}
