#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub minimalNumberOfCoins {
    my ($coins, $price) = @_;

    my $index = @$coins - 1;
    my $result = 0;
    my @sortedCoins = sort {$a <=> $b} @$coins;

    while (0 <= $index && 0 < $price) {
        if (@sortedCoins[$index] <= $price) {
            $price -= @sortedCoins[$index];
            ++$result;
        } else {
            --$index;
        }
    }

    return $result;
}
