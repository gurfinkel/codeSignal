#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fractionDivision {
    my ($a, $b) = @_;

    my $result = [@$a[0] * @$b[1], @$a[1] * @$b[0]];
    my $gcd = getGcd(@$result[0], @$result[1]);

    @$result[0] /= $gcd;
    @$result[1] /= $gcd;

    return $result;
}

sub getGcd {
    my ($x, $y) = @_;

    unless ($x) {
        return $y;
    }

    return getGcd($y % $x, $x);
}
