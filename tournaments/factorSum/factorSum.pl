#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub factorSum {
    my ($n) = @_;

    my $result = $n;
    my $c = 0;
    my $d = 0;

    do {
        my $e = 2;
        $c = $result;
        $d = $result;
        $result = 0;

        while ($d >= $e**2) {
            if (!($d % $e)) {
                $d /= $e;
                $result += $e;
            } else {
                ++$e;
            }
        }

        $result += $d;
    } until ($result == $c);

    return $result;
}
