#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fractionSubtraction {
    my ($a, $b) = @_;

    my $first = @$a[0] * @$b[1] - @$a[1] * @$b[0];
    my $second = @$a[1] * @$b[1];
    my $gcd = getGcd($first, $second);

    $first /= $gcd;
    $second /= $gcd;

    return [$first, $second];
}

sub getGcd {
    my ($c, $d) = @_;

    unless ($c) {
        return $d;
    }

    return getGcd($d % $c, $c);
}
