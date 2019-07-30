#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub threeAndFour {
    my ($n) = @_;

    my @result = (0);
    my $item = 12;

    while ($item < $n) {
        if (!($item % 3) && !($item % 4)) {
            push(@result, $item);
        }
        ++$item;
    }

    return \@result;
}
