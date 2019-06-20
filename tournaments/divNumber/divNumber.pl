#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub divNumber {
    my ($k, $l, $r) = @_;

    my $result = 0;

    for (my $i = $l; $r >= $i; ++$i) {
        my $a = $i;
        my $b = 1;
        my $c = 2;

        while ($a >= $c*$c) {
            my $d = 0;

            while (!($a % $c)) {
                $a /= $c;
                ++$d;
            }

            $b *= 1 + $d;

            if ($k < $b) {
                last;
            }

            ++$c;
        }

        if (1 < $a) {
            $b <<= 1;
        }

        if ($k == $b) {
            ++$result;
        }
    }

    return $result;
}
