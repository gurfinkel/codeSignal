#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub increaseNumberRoundness {
    my ($n) = @_;

    my $x = 0;
    my $y = 0;

    while (0 < $n) {
        my $z = $n % 10;
        $n = int($n / 10);

        if (!$z) {
            if ($y) {
                $x = 1;
            }
        } else {
            if ($x) {
                return 1;
            } else {
                $y = 1;
            }
        }
    }

    return 0;
}
