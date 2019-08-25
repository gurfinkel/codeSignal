#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub powersOfTwo {
    my ($n) = @_;

    my @result;
    my $x = 1;

    while ($n) {
        if ($n & 1) {
            push(@result, $x);
        }
        $n >>= 1;
        $x <<= 1;
    }

    return \@result;
}
