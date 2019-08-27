#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub digitDistanceNumber {
    my ($n) = @_;

    my $result = 0;
    my $x = $n % 10;
    my $y = 1;

    $n /= 10;

    while ($n) {
        $result += $y * abs($n % 10 - $x);
        $y *= 10;
        $x = $n % 10;
        $n = ~~($n / 10);
    }

    return $result;
}
