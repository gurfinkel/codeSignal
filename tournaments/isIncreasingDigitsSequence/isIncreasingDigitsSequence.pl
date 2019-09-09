#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isIncreasingDigitsSequence {
    my ($n) = @_;

    my $x = $n % 10;

    $n = ~~($n / 10);

    while ($n) {
        if ($x <= $n % 10) {
            return 0;
        }

        $x = $n % 10;
        $n = ~~($n / 10);
    }

    return 1;
}
