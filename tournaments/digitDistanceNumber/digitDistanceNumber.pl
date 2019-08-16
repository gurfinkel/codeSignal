#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub digitDistanceNumber {
    my ($n) = @_;

    my $result = 0;
    my $c = $n % 10;
    my $d = 1;

    $n /= 10;

    while ($n) {
        $result += $d * abs($n % 10 - $c);
        $d *= 10;
        $c = $n % 10;
        $n = ~~($n / 10);
    }

    return $result;
}
