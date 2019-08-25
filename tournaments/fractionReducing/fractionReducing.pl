#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub fractionReducing {
    my ($fraction) = @_;

    my $gcd = getGcd($$fraction[0], $$fraction[1]);

    return [$$fraction[0]/$gcd, $$fraction[1]/$gcd];
}

sub getGcd {
    my ($x, $y) = @_;

    unless ($x) {
        return $y;
    }

    return getGcd($y % $x, $x);
};
