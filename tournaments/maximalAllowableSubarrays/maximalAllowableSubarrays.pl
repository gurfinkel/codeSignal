#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maximalAllowableSubarrays {
    my ($inputArray, $maxSum) = @_;

    my $n = @$inputArray;
    my @result;
    my $index = -1;
    my $c = 0;

    for (my $i = 0; $n > $i; ++$i) {
        if (0 < $i) {
            $c -= $$inputArray[$i - 1];
        }

        while ($n > $index + 1 && $c + $$inputArray[$index + 1] <= $maxSum) {
            $c += $$inputArray[++$index];
        }

        push @result, $index;
    }

    return \@result;
}
