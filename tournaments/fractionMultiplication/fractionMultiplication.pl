#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fractionMultiplication {
    my ($a, $b) = @_;

    my @result = ($$a[0] * $$b[0], $$a[1] * $$b[1]);
    my $gcd = getGcd($result[0], $result[1]);

    $result[0] /= $gcd;
    $result[1] /= $gcd;

    return \@result;
}

sub getGcd {
    my ($c, $d) = @_;

    if (!$c) {
        return $d;
    }

    return getGcd($d % $c, $c);
}
