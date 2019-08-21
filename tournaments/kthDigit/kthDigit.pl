#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub kthDigit {
    my ($n, $k) = @_;

    my $c = length(''.$n);
    my $d = $c - $k + 1;

    while ($n) {
        unless (--$d) {
            return $n % 10;
        }
        $n = ~~($n / 10);
    }

    return -1;
}
