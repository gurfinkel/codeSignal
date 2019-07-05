#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub numberOfEvenDigits {
    my ($n) = @_;

    my $result = 0;

    while (0 < $n) {
        if (!(($n % 10) & 1)) {
            ++$result;
        }

        $n = int($n / 10);
    }

    return $result;
}
