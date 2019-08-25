#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub eulersTotientFunction {
    my ($n) = @_;

    my $result = $n;
    my $c = 2;

    while ($n >= $c ** 2) {
        unless ($n % $c) {
            until ($n % $c) {
                $n /= $c;
            }
            $result -= $result / $c;
        }
        ++$c;
    }

    if (1 < $n) {
        $result -= $result / $n;
    }

    return $result;
}
