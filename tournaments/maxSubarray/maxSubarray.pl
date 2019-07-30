#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maxSubarray {
    my ($inputArray) = @_;

    my $result = 0;
    my $c = 0;

    for my $item (@$inputArray) {
        $c = 0 < $c + $item ? $c + $item : 0;
        $result = $result > $c ? $result : $c;
    }

    return $result;
}
