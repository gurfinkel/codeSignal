#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub countDistantPairs {
    my ($inputString, $distance) = @_;

    my $result = 0;

    for (my $i = 0; length($inputString) > $i + $distance + 1; ++$i) {
        if (substr($inputString, $i, 1) eq substr($inputString, $i + $distance + 1, 1)) {
            ++$result;
        }
    }

    return $result;
}
