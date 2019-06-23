#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub candles {
    my ($candlesNumber, $makeNew) = @_;

    my $result = 0;
    my $temp = 0;

    while (0 < $candlesNumber) {
        $result += $candlesNumber;
        $temp += $candlesNumber;
        $candlesNumber = int $temp / $makeNew;
        $temp %= $makeNew;
    }

    return $result;
}
