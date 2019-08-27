#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divNumber {
    my ($k, $l, $r) = @_;

    my $result = 0;

    for (my $i = $l; $r >= $i; ++$i) {
        my $x = $i;
        my $y = 1;
        my $z = 2;

        while ($x >= $z * $z) {
            my $c = 0;

            while (!($x % $z)) {
                $x /= $z;
                ++$c;
            }

            $y *= 1 + $c;

            if ($k < $y) {
                last;
            }

            ++$z;
        }

        if (1 < $x) {
            $y <<= 1;
        }

        if ($k == $y) {
            ++$result;
        }
    }

    return $result;
}
