#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub pagesNumbering {
    my ($n) = @_;

    my $result = 0;
    my $x = 1;
    my $y = 1;

    while ($n >= 10 * $x) {
        $result += 9 * $x * $y;
        $x *= 10;
        ++$y;
    }

    $result += ($n - $x + 1) * $y;

    return $result;
}
