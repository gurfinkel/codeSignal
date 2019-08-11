#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub sumOfDivisors {
    my ($n) = @_;

    my $result = 0;
    my $c = 1;

    while ($n >= $c) {
        if (!($n % $c)) {
            $result += $c;
        }
        ++$c;
    }

    return $result;
}
