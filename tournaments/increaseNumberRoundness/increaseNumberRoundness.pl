#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub increaseNumberRoundness {
    my ($n) = @_;

    my $c = 0;
    my $d = 0;

    while (0 < $n) {
        my $e = $n % 10;
        $n = int($n / 10);

        if (!$e) {
            if ($d) {
                $c = 1;
            }
        } else {
            if ($c) {
                return 1;
            }
            else {
                $d = 1;
            }
        }
    }

    return 0;
}
