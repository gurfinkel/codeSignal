#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub oddNumbersBeforeZero {
    my ($sequence) = @_;

    my $result = 0;

    foreach my $item (@$sequence) {
        if (!$item) {
            last;
        } elsif ($item & 1) {
            ++$result;
        }
    }

    return $result;
}
