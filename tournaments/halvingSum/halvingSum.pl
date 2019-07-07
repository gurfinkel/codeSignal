#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub halvingSum {
    my ($n) = @_;

    my $result = 0;
    my $index = 1;

    while ($n >= $index) {
        $result += int($n / $index);
        $index <<= 1;
    }

    return $result;
}
