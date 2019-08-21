#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub pagesNumbering {
    my ($n) = @_;

    my $result = 0;
    my $c = 1;
    my $d = 1;

    while ($n >= 10 * $c) {
        $result += 9 * $c * $d;
        $c *= 10;
        ++$d;
    }

    $result += ($n - $c + 1) * $d;

    return $result;
}
